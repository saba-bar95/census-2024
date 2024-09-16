import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useState, useEffect } from "react";

const GoogleMap = ({ location }) => {
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!location) return;

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    service.findPlaceFromQuery(
      {
        query: `${location.lng}, ${location.lat}`,
        fields: ["formatted_address", "name", "geometry"],
      },
      (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPlace(results[0]);
          console.log("Place information:", results[0]); // Log the place object to the console
        }
      }
    );
  }, [location]);

  return (
    <>
      <APIProvider apiKey={"AIzaSyB7D2WPALIsuME2Y8wbWGZuob19cbpuiR0"}>
        <Map
          style={{ width: "100%", height: "100%" }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          center={
            location ? { lat: location.lat, lng: location.lng } : undefined
          }
          zoom={location ? 12 : 3}
        >
          {location && (
            <Marker position={{ lat: location.lat, lng: location.lng }} />
          )}
        </Map>
      </APIProvider>
    </>
  );
};
export default GoogleMap;
