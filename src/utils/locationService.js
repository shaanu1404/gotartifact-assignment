const apiKey = import.meta.env.VITE_ABSTRACT_API_KEY;
const ipAddress = import.meta.env.VITE_ABSTRACT_IP_ADDRESS;
const abstract_location_service_url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}&ip_address=${ipAddress}`;

export const fetchLocation = async () => {
  const response = await fetch(abstract_location_service_url);
  if (!response.ok) throw new Error("Unable to fetch location data");
  const data = await response.json();
  const location = `${data.city}, ${data.region}, ${data.country}`;
  return location;
};
