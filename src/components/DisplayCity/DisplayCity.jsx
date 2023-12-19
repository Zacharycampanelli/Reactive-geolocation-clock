import { useEffect, useState } from "react";

import { useFetch } from "../../hooks/useFetch";

// Define the DisplayCity component
const DisplayCity = () => {
  // State variables to store city, state, and country information
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [country, setCountry] = useState(null);

  // API URL for fetching IP geolocation using the Geoapify service
  const ipInfoAPIUrl = `https://api.geoapify.com/v1/ipinfo?apiKey=${
    import.meta.env.VITE_APIKEY
  }`;

  // Fetch data from the Geoapify API using custom useFetch hook
  const { data, isPending, error } = useFetch(ipInfoAPIUrl, null);

  // Update state variables when new data is fetched
  useEffect(() => {
    if (data) {
      setCity(data.city.name);
      setState(data.state.name);
      setCountry(data.country.iso_code);
    }
  }, [data]);

  // Display a loading message while data is being fetched
  if (isPending) {
    return <h1>Loading...</h1>;
  }

  // Handle and log errors if there are issues with the API call
  if (error) {
    console.error("Error in trying to retrieve IP geolocation");
    console.error(error);
    return;
  }

  // Render the DisplayCity component with formatted city, state, and country information
  return (
    <div className="mb-[40px] mt-4 text-[13px]  font-bold uppercase leading-[28px] tracking-[3px] text-white md:mb-[70px] md:text-[18px] md:tracking-[3.6px] lg:mt-6 lg:inline lg:text-[24px] lg:tracking-[4.8px]">
      in {`${city}, ${state} ${country}`}
    </div>
  );
};

export default DisplayCity;
