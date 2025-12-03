import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://api.iconify.design/mdi:map-marker.svg?color=%23d14d44",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const LocationCard = () => {
  return (
    <div className="bg-black/5 rounded-3xl p-6 flex flex-col md:flex-row gap-6 w-full hover:shadow-lg transition">
      
      {/* MAP */}
      <div className="w-full md:w-1/2 h-48 rounded-2xl overflow-hidden">
        <MapContainer
          center={[19.033, 73.0297]} // Navi Mumbai coords
          zoom={11}
          scrollWheelZoom={false}
          className="w-full h-full"
          attributionControl={false}
          zoomControl={false}
          style={{ filter: "grayscale(1)" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='© CARTO'
          />

          <Marker position={[19.033, 73.0297]} icon={markerIcon}>
            <Popup>Navi Mumbai, India</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* DETAILS */}
      <div className="flex flex-col justify-between w-full md:w-1/2">
        <div className="my-auto">
          <h3 className="text-2xl font-serif tracking-tight mb-1">
            Navi Mumbai
          </h3>
          <p className="opacity-60 text-lg">Currently based in Navi Mumbai, India</p>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
 