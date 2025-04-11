import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapClickHandler = ({ setDestination }) => {
  useMapEvents({
    click(e) {
      setDestination([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};

const Map = ({ locationName }) => {
  const [start, setStart] = useState(null);
  const [destination, setDestination] = useState(null);
  const [route, setRoute] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [steps, setSteps] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isClient, setIsClient] = useState(false);
  const mapRef = useRef();
  const containerRef = useRef();

  const fetchCoordinates = async (name) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        name
      )}`
    );
    const data = await res.json();
    if (data.length > 0) {
      const { lat, lon } = data[0];
      return [parseFloat(lat), parseFloat(lon)];
    }
    return null;
  };

  const fetchRoute = async (start, end) => {
    try {
      const apiKey = "5b3ce3597851110001cf6248607c11c7828e4e5b8a17deb0f25d77f6";
      const url =
        "https://api.openrouteservice.org/v2/directions/driving-car/geojson";

      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coordinates: [
            [start[1], start[0]],
            [end[1], end[0]],
          ],
        }),
      });

      const data = await res.json();
      const coords = data.features[0].geometry.coordinates.map(([lon, lat]) => [
        lat,
        lon,
      ]);
      setRoute(coords);

      const summary = data.features[0].properties.summary;
      setDistance((summary.distance / 1000).toFixed(2));
      setDuration((summary.duration / 60).toFixed(1));
      const stepsList = data.features[0].properties.segments[0]?.steps || [];
      setSteps(stepsList);
    } catch (err) {
      console.error("Failed to fetch route:", err);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const coords = await fetchCoordinates(searchInput);
    if (coords) {
      setDestination(coords);
    } else {
      alert("Destination not found.");
    }
  };

  useEffect(() => {
    setIsClient(true);
    fetchCoordinates(locationName).then((coords) => {
      setStart(coords);
    });
  }, [locationName]);

  useEffect(() => {
    if (start && destination) {
      fetchRoute(start, destination);
    }
  }, [start, destination]);

  useEffect(() => {
    if (!start || !mapRef.current) return;

    const map = mapRef.current;
    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    setTimeout(() => {
      map.invalidateSize();
    }, 200);

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [start]);

  if (!isClient || !start) return <p className="text-xs">Loading map…</p>;

  return (
    <div>
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-3 flex gap-2">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search destination"
          className="border px-3 py-1 rounded w-full text-sm"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
        >
          Search
        </button>
      </form>

      {/* Map */}
      <div ref={containerRef} className="w-full h-64 rounded overflow-hidden">
        <MapContainer
          center={start}
          zoom={25}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
          whenCreated={(mapInstance) => {
            mapRef.current = mapInstance;
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <MapClickHandler setDestination={setDestination} />
          <Marker position={start}>
            <Popup>Start: {locationName}</Popup>
          </Marker>
          {destination && (
            <Marker position={destination}>
              <Popup>Destination</Popup>
            </Marker>
          )}
          {route && <Polyline positions={route} color="blue" />}
        </MapContainer>
      </div>

      {/* Directions */}
      {distance && duration && (
        <div className="mt-3 p-3 bg-gray-100 text-black rounded text-sm shadow">
          <p>
            <strong>Distance:</strong> {distance} km
          </p>
          <p>
            <strong>Estimated Time:</strong> {duration} minutes
          </p>
          {steps.length > 0 && (
            <div className="mt-2">
              <strong>Directions:</strong>
              <ol className="list-decimal list-inside mt-1 space-y-1">
                {steps.map((step, index) => (
                  <li key={index}>{step.instruction}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Map;
