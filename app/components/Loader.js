// components/Loader.tsx
//import assets from "./Assets";
import Image from 'next/image';
import assets from './Assets';
export default function Loader() {
  return (
    <div className="loader-overlay">
      <div className="spinner"></div>
      <div className="imgBlur">
      <Image src={assets.banner_01} alt="Myflexpass" />
     </div>
    </div>
  );
}
