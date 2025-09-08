"use client";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet.markercluster";
import { useRouter } from "next/navigation";

const customIcon = L.icon({
    iconUrl: "/icons/marker-icon.png",
    iconRetinaUrl: "/icons/marker-icon-2x.png",
    shadowUrl: "/icons/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export default function MapView({ gyms }) {
    const router = useRouter();
    const mapRef = useRef(null);
    const clusterRef = useRef(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [areaOptions, setAreaOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);
    const [filters, setFilters] = useState({ category: "", city: "", search: "" });

    const filteredGyms = gyms?.filter(gym => {
        return (
            (!filters.category || gym.category.toLowerCase() === filters.category.toLowerCase()) &&
            (!filters.city || gym.city.toLowerCase() === filters.city.toLowerCase()) &&
            (!filters.search || gym.name.toLowerCase().includes(filters.search.toLowerCase()))
        );
    });

    const handleSelect = (category) => {
        setFilters({ ...filters, category, city: "" }); // Clear city when category changes
    };

    useEffect(() => {
        if (!mapRef.current) {
            const map = L.map("map").setView([37.7749, -122.4194], 10);
            mapRef.current = map;

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "&copy; OpenStreetMap contributors"
            }).addTo(map);

            clusterRef.current = L.markerClusterGroup();
            map.addLayer(clusterRef.current);
        }
        updateMarkers();
    }, [gyms, filters]);

    useEffect(() => {
        const categories = Array.from(new Set(gyms?.map(g => g.category).filter(Boolean))).sort();
        setAreaOptions(categories);
    }, [gyms]);

    useEffect(() => {
        if (filters.category) {
            const cities = Array.from(
                new Set(gyms.filter(g => g.category === filters.category).map(g => g.city))
            ).sort();
            setCityOptions(cities);
        } else {
            // setCityOptions([]);
            const allCities = Array.from(
                new Set(gyms.map(g => g.city))
            ).sort();
            setCityOptions(allCities);
        }
    }, [filters.category, gyms]);

    const updateMarkers = () => {
        if (!clusterRef.current) return;
        clusterRef.current.clearLayers();

        const bounds = L.latLngBounds();

        filteredGyms?.forEach(gym => {
            const marker = L.marker([gym.latitude, gym.longitude], { icon: customIcon });

            const popupContent = `
      <div class="text-center p-3" style="max-width: 200px;">
    <img src="${gym.image}" alt="${gym.name}" 
         style="width: 100px; height: 100px; object-fit: contain;" 
         class="img-fluid rounded mb-2" />
    <div>
      <b>${gym.name}</b><br/>
      ${gym.city}, ${gym.category}<br/>
      <button 
        class="popup-view-details btn btn-primary font_size p-2 mt-2" 
        data-id="${gym.id}" 
        data-slug="${slugify(gym.slug)}">
        View details
      </button>
    </div>
  </div>
    `;

            marker.bindPopup(popupContent);

            // When popup opens, attach click event to the button
            marker.on("popupopen", () => {
                const button = document.querySelector(".popup-view-details");
                if (button) {
                    button.addEventListener("click", () => {
                        const id = button.getAttribute("data-id");
                        const slug = button.getAttribute("data-slug");
                        sessionStorage.setItem("selected_gym_id", id);
                        router.push(`/${slug}`);
                    });
                }
            });

            clusterRef.current.addLayer(marker);
            bounds.extend([gym.latitude, gym.longitude]);
        });

        if (filteredGyms?.length > 0) {
            mapRef.current.fitBounds(bounds, { padding: [50, 50] });
        }
    };

    // const updateMarkers = () => {
    //     if (!clusterRef.current) return;
    //     clusterRef.current.clearLayers();

    //     const bounds = L.latLngBounds();

    //     filteredGyms.forEach(gym => {
    //         //const marker = L.marker([gym.latitude, gym.longitude]);
    //         const marker = L.marker([gym.latitude, gym.longitude], { icon: customIcon });
    //         marker.bindPopup(`<b>${gym.name}</b><br>${gym.city}, ${gym.category}`);
    //         marker.on("click", () => {
    //             sessionStorage.setItem("selected_gym_id", gym.id);
    //             router.push(`/${slugify(gym.slug)}`);
    //         });
    //         clusterRef.current.addLayer(marker);
    //         bounds.extend([gym.latitude, gym.longitude]);
    //     });

    //     if (filteredGyms.length > 0) {
    //         mapRef.current.fitBounds(bounds, { padding: [50, 50] });
    //     }
    // };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setShowSidebar(false);
            } else {
                setShowSidebar(true);
            }
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                    <button
                        onClick={() => setShowSidebar(prev => !prev)}
                        className="btn btn-outline-primary d-md-none mb-3 ms-auto text capitalize mt-0 me-2">
                        <small>
                            <i className="fa-solid fa-filter"></i> Filter
                        </small>
                    </button>
                </div>
                <div className="row">
                    {/* <div
                        className={`col-12 col-md-3 bg-light sidebar p-3 ${showSidebar ? "d-block" : "d-none d-md-block"}`}
                        style={{
                            transition: "transform 0.3s ease-in-out",
                            zIndex: 999,
                            minHeight: '100vh',
                        }} > */}
                    <div className="col-md-3 d-none d-md-block" style={{ backgroundColor: 'rgb(255, 248, 248)' }}>
                        {/* <button
                            onClick={() => setShowSidebar(prev => !prev)}
                            style={{
                                position: "absolute",
                                top: '12%',
                                right: '5%',
                                zIndex: 1000,
                                background: "#fff",
                                border: "1px solid rgb(79 135 194)",
                                padding: "8px 12px",
                                borderRadius: 20,
                                display: "block"
                            }}
                            className="filter-toggle" >
                            <i className="fa-solid fa-filter"></i> Filter
                        </button> */}
                        <div className="sidebar sidebar_mob"
                            // style={{ width: 300, padding: 20, overflowY: "auto", background: "#f9f9f9" }}
                            style={{
                                //width: 300,
                                padding: "15px 10px",
                                overflowY: "auto",
                                background: "#fff8f8",
                                transform: showSidebar ? "translateX(0)" : "translateX(-100%)",
                                transition: "transform 0.3s ease-in-out",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                zIndex: 999,
                            }}>
                            {/* <h3 style={{ fontFamily: "'Russo One', sans-serif" }}>Filter partners</h3> */}
                            
                            <input
                                type="text"
                                placeholder="Search partners..."
                                style={{ width: "100%", padding: 8, marginBottom: 15 }}
                                onChange={e => setFilters({ ...filters, search: e.target.value })}
                            />
                            {/* <select
                        style={{ width: "100%", padding: 8, marginBottom: 15 }}
                        onChange={e => setFilters({ ...filters, category: e.target.value, city: "" })}
                        value={filters.category} >
                        <option value="">All Categories</option>
                        {areaOptions.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                      </select> */}
                            {/* <ul style={{ padding: 0, marginBottom: 15, listStyle: "none" }}>
                        <li 
                            key="all"
                            style={{ padding: 8, cursor: 'pointer', background: filters.category === "" ? "#eee" : "" }}
                            onClick={() => handleSelect("")}
                        >
                            All Categories
                        </li>
                        {areaOptions.map(category => (
                            <li 
                                key={category} 
                                style={{ padding: 8, cursor: 'pointer', background: filters.category === category ? "#eee" : "" }} 
                                onClick={() => handleSelect(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul> */}
                            {/* <ul className="d-flex flex-wrap gap-1 list-unstyled mb-3">
                        <li
                            className={`px-2 pt-1 pb-2 rounded-pill border ${filters.category === "" ? "bg-primary text-white border-primary" : "bg-light text-gray"}`}
                            onClick={() => handleSelect("")}
                            style={{ cursor: "pointer" }} >
                            <small>All Categories</small>
                        </li>
                        {areaOptions.map(category => (
                            <li
                            key={category}
                            className={`px-2 pt-1 pb-2 rounded-pill border ${filters.category === category ? "bg-primary text-white border-primary" : "bg-light text-gray"}`}
                            onClick={() => handleSelect(category)}
                            style={{ cursor: "pointer" }}
                            >
                            <small>{category}</small>
                            </li>
                        ))}
                        </ul> */}
                            <select
                                style={{ width: "100%", padding: 8, marginBottom: 15 }}
                                onChange={e => setFilters({ ...filters, city: e.target.value })}
                                value={filters.city} >
                                <option value="">All Cities</option>
                                {cityOptions.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                            <h4 style={{ fontFamily: "'Russo One', sans-serif", fontSize: '18px', marginBottom: 15 }}>Results ({filteredGyms?.length})</h4>
                            <div style={{ maxHeight: "50vh", overflowY: "auto", }}>
                                {/* {filteredGyms.map((gym, idx) => (
                            <div
                                key={idx}
                                style={{ borderBottom: "1px solid #ccc", padding: 8, cursor: "pointer" }}
                                onClick={() => {
                                    mapRef.current.setView([gym.latitude, gym.longitude], 14);
                                }} >
                                <img alt="" src={gym.image} style={{width:'100px', height:'100px'}} />
                                <h6 style={{ fontFamily: "'Russo One', sans-serif", fontSize:'14px', marginBottom:'5px'}} >{gym.name}</h6>
                                <p style={{fontStyle:'normal', fontSize:'12px', marginBottom:'2px'}}>{gym.city}, {gym.category}</p>
                            </div>
                        ))} */}
                                <div className="d-flex flex-column flex-md-row w-100">
                                    <div>
                                        {filteredGyms?.map((gym, idx) => (
                                            <div
                                                key={idx}
                                                className="d-flex align-items-start mb-3 border-bottom pb-2"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    mapRef.current.setView([gym.latitude, gym.longitude], 14);
                                                }}
                                            //   onClick={() => {
                                            //     mapRef.current.setView([gym.latitude, gym.longitude], 14);
                                            //     setSelectedGym(gym); // if you're tracking selection
                                            //   }}
                                            >
                                                <img
                                                    src={gym.image || "/images/placeholder.jpg"}
                                                    alt={gym.name}
                                                    className="img-fluid rounded me-2"
                                                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                                />
                                                <div>
                                                    <h6
                                                        className="mb-1"
                                                        style={{
                                                            fontFamily: "'Russo One', sans-serif",
                                                            fontSize: "13px", fontWeight: '500',
                                                        }}
                                                    >
                                                        {gym.name}
                                                    </h6>
                                                    <p className="mb-0" style={{ fontSize: "12px" }}>
                                                        {gym.city}, {gym.category}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-9 ps-0 pe-0 position-relative">
                        {/* <button
                                onClick={() => setShowSidebar(prev => !prev)}
                                className="btn btn-outline-primary d-md-none mb-2 me-3 float-end">
                                <i className="fa-solid fa-filter"></i> Filter
                            </button> */}
                        <div className="sidebar ps-2 pe-2">
                            <ul className="d-flex flex-wrap gap-2 list-unstyled mb-3">
                                <li
                                    className={`px-lg-4 px-xl-4 px-sm-4 px-md-4 px-2 pt-1 pb-2 rounded-pill border ${filters.category === "" ? "bg-primary text-white border-primary" : "bg-light text-gray"}`}
                                    onClick={() => handleSelect("")}
                                    style={{ cursor: "pointer" }} >
                                    <small>All Categories</small>
                                </li>
                                {areaOptions.map(category => (
                                    <li
                                        key={category}
                                        className={`px-lg-4 px-xl-4 px-sm-4 px-md-4 px-2 pt-1 pb-2 rounded-pill border ${filters.category === category ? "bg-primary text-white border-primary" : "bg-light text-gray"}`}
                                        onClick={() => handleSelect(category)}
                                        style={{ cursor: "pointer" }} >
                                        <small>{category}</small>
                                    </li>
                                ))}
                                {/* {filters.category} */}
                                {/* {filters.category && (
                                    <li
                                        className="px-lg-4 px-xl-4 px-sm-4 px-md-4 px-2 pt-1 pb-2 rounded-pill border bg-warning text-dark"
                                        onClick={() => handleSelect(filters.category)}
                                        style={{ cursor: "pointer" }}>
                                        <small>Reset</small>
                                    </li>
                                )} */}
                            </ul>
                        </div>
                        {filters.category && (
                                    <div
                                        className="mobile-view px-lg-4 px-xl-4 px-sm-4 px-md-4 px-2 pt-1 pb-2 rounded-pill border bg-warning text-dark"
                                        onClick={() => handleSelect(filters.category)}
                                        style={{ cursor: "pointer", position: "absolute", right:"15px", zIndex:"999", top:"60px" }}>
                                        <small>Reset</small>
                                    </div>
                                )}
                        <div id="map" style={{ height: "100vh", width: "100%" }}></div>
                    </div>
                </div>
                {showSidebar && (
                    <div
                        className="d-md-none position-fixed top-0 start-0 bg-white shadow"
                        style={{
                            width: '100%',
                            height: '100vh',
                            zIndex: 1050,
                            padding: '20px',
                            overflowY: 'auto',
                        }}
                    >
                        <button
                            className="btn-close mb-3"
                            onClick={() => setShowSidebar(false)}
                        ></button>

                        {/* Filter content */}
                        <div className="sidebar sidebar_mob"
                            // style={{ width: 300, padding: 20, overflowY: "auto", background: "#f9f9f9" }}
                            style={{
                                //width: 300,
                                padding: 0,
                                overflowY: "auto",
                                background: "#fff8f8",
                                transform: showSidebar ? "translateX(0)" : "translateX(-100%)",
                                transition: "transform 0.3s ease-in-out",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                zIndex: 999,
                            }}>
                            {/* <h3 style={{ fontFamily: "'Russo One', sans-serif" }}>Filter partners</h3> */} 
                            <h3 className="text-end">
                                {/* <i class="fa fa-times-circle-o" aria-hidden="true"></i> */}
                                <i className="fa fa-times-circle text-danger" onClick={() => setShowSidebar(prev => !prev)}></i>
                                </h3>
                            <input
                                type="text"
                                placeholder="Search partners..."
                                style={{ width: "100%", padding: 8, marginBottom: 15 }}
                                onChange={e => setFilters({ ...filters, search: e.target.value })}
                            />
                            <select
                                style={{ width: "100%", padding: 8, marginBottom: 15 }}
                                onChange={e => setFilters({ ...filters, city: e.target.value })}
                                value={filters.city} >
                                <option value="">All Cities</option>
                                {cityOptions.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                            <h4 style={{ fontFamily: "'Russo One', sans-serif", fontSize: '18px', marginBottom: 15 }}>Results ({filteredGyms?.length})</h4>
                             <div style={{ maxHeight: "50vh", overflowY: "auto", }} >
                                <div className="d-flex flex-column flex-md-row w-100">
                                    <div>
                                        {filteredGyms?.map((gym, idx) => (
                                            <div
                                                key={idx}
                                                className="d-flex align-items-start mb-3 border-bottom pb-2"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    mapRef.current.setView([gym.latitude, gym.longitude], 14);
                                                }}
                                            //   onClick={() => {
                                            //     mapRef.current.setView([gym.latitude, gym.longitude], 14);
                                            //     setSelectedGym(gym); // if you're tracking selection
                                            //   }}
                                            >
                                                <img
                                                    src={gym.image || "/images/placeholder.jpg"}
                                                    alt={gym.name}
                                                    className="img-fluid rounded me-2"
                                                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                                />
                                                <div>
                                                    <h6
                                                        className="mb-1"
                                                        style={{
                                                            fontFamily: "'Russo One', sans-serif",
                                                            fontSize: "13px", fontWeight: '500',
                                                        }}
                                                    >
                                                        {gym.name}
                                                    </h6>
                                                    <p className="mb-0" style={{ fontSize: "12px" }}>
                                                        {gym.city}, {gym.category}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}