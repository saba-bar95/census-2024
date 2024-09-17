import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
// import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
// import { useMemo, useEffect } from "react";

const GoogleMap = ({ apiKey, location }) => {
  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{ width: "100%", height: "100%" }}
        defaultCenter={
          location ? { lat: location.lat, lng: location.lng } : undefined
        }
        defaultZoom={8}
        center={location ? { lat: location.lat, lng: location.lng } : undefined}
        zoom={location ? 11 : 5}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        {" "}
        {location && (
          <Marker position={{ lat: location.lat, lng: location.lng }} />
        )}
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
