/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const GoogleMap = ({ apiKey, location }) => {
  const [center, setCenter] = useState(
    location
      ? { lat: location.lat, lng: location.lng }
      : { lat: 43.0334614, lng: 42.6894803 }
  );
  const [zoom, setZoom] = useState(location ? 11 : 5);

  useEffect(() => {
    if (location) {
      setCenter({ lat: location.lat, lng: location.lng });
      setZoom(11);
    }
  }, [location]);

  const handleDrag = (e) => {
    const newCenter = e.latLng;
    setCenter(newCenter);
  };

  const handleZoomChanged = (e) => {
    setZoom(e.zoom);
  };

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{ width: "100%", height: "100%" }}
        defaultCenter={center}
        defaultZoom={8}
        center={center}
        zoom={zoom}
        onDrag={handleDrag}
        onZoomChanged={handleZoomChanged}
        gestureHandling={"greedy"}
        disableDefaultUI={true}>
        {" "}
        {location && (
          <Marker position={{ lat: location.lat, lng: location.lng }} />
        )}
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
