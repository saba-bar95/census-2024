const getCoordinates = (address) => {
  if (address === undefined) {
    console.error("Address is undefined");
    throw new Error("Address is undefined");
  }
  return new Promise((resolve, reject) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK") {
        resolve(results);
      } else {
        console.error(`Failed to get coordinates for address: ${address}`);
        console.error(`Status: ${status}`);
        reject(new Error(`Failed to get coordinates for address: ${address}`));
      }
    });
  });
};

export default getCoordinates;
