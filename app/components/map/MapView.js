"use client";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet.markercluster";
import { useRouter } from "next/navigation"; 

const customIcon = L.icon({
  //iconUrl: "/icons/marker-icon.png",
  iconRetinaUrl: "/icons/marker-icon-2x.png",
  //shadowUrl: "/icons/marker-shadow.png",
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

    const filteredGyms = gyms.filter(gym => {
        return (
            (!filters.category || gym.category.toLowerCase() === filters.category.toLowerCase()) &&
            (!filters.city || gym.city.toLowerCase() === filters.city.toLowerCase()) &&
            (!filters.search || gym.name.toLowerCase().includes(filters.search.toLowerCase()))
        );
    });

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
        const categories = Array.from(new Set(gyms.map(g => g.category).filter(Boolean))).sort();
        setAreaOptions(categories);
    }, [gyms]);

    useEffect(() => {
        if (filters.category) {
            const cities = Array.from(
                new Set(gyms.filter(g => g.category === filters.category).map(g => g.city))
            ).sort();
            setCityOptions(cities);
        } else {
            setCityOptions([]);
        }
    }, [filters.category, gyms]);

const updateMarkers = () => {
  if (!clusterRef.current) return;
  clusterRef.current.clearLayers();

  const bounds = L.latLngBounds();

  filteredGyms.forEach(gym => {
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

  if (filteredGyms.length > 0) {
    mapRef.current.fitBounds(bounds, { padding: [50, 50] });
  }
};

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
            <div style={{ display: "flex", height: "100vh" }}>
                <button
                    onClick={() => setShowSidebar(prev => !prev)}
                    style={{
                        position: "absolute",
                        top: '16%',
                        right: '5%',
                        zIndex: 1000,
                        background: "#fff",
                        border: "1px solid rgb(79 135 194)",
                        padding: "8px 12px",
                        borderRadius: 20,
                        display: "block"
                    }}
                    className="filter-toggle"
                >
                    <i className="fa-solid fa-filter"></i> Filter
                </button>
                <div className="sidebar"
                    // style={{ width: 300, padding: 20, overflowY: "auto", background: "#f9f9f9" }}
                    style={{
                        width: 300,
                        padding: 20,
                        overflowY: "auto",
                        background: "#f9f9f9",
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
                    <select
                        style={{ width: "100%", padding: 8, marginBottom: 15 }}
                        onChange={e => setFilters({ ...filters, category: e.target.value, city: "" })}
                        value={filters.category}
                    >
                        <option value="">All Categories</option>
                        {areaOptions.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <select
                        style={{ width: "100%", padding: 8, marginBottom: 15 }}
                        onChange={e => setFilters({ ...filters, city: e.target.value })}
                        value={filters.city}
                    >
                        <option value="">All Cities</option>
                        {cityOptions.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                    <h4 style={{ fontFamily: "'Russo One', sans-serif",fontSize:'18px',marginBottom:15 }}>Results ({filteredGyms.length})</h4>
                    <div style={{ maxHeight: "40vh", overflowY: "auto", }}>
                        {/* {filteredGyms.map((gym, idx) => (
                            <div
                                key={idx}
                                style={{ borderBottom: "1px solid #ccc", padding: 8, cursor: "pointer" }}
                                onClick={() => {
                                    mapRef.current.setView([gym.latitude, gym.longitude], 14);
                                }}
                            >
                                <img alt="" src={gym.image} style={{width:'100px', height:'100px'}} />
                                <h6 style={{ fontFamily: "'Russo One', sans-serif", fontSize:'14px', marginBottom:'5px'}} >{gym.name}</h6>
                                <p style={{fontStyle:'normal', fontSize:'12px', marginBottom:'2px'}}>{gym.city}, {gym.category}</p>
                            </div>
                        ))} */}
                        <div className="d-flex flex-column flex-md-row w-100">
    <div>
      {filteredGyms.map((gym, idx) => (
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
                fontSize: "13px", fontWeight:'500',
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
                <div id="map" style={{ flex: 1 }}></div>
            </div>
        </>
    );
}