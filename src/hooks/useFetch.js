// Define a custom hook useFetch for making data fetch requests
import { useState, useEffect, useMemo } from "react";

// The useFetch hook takes a URL and an optional toggle parameter
export const useFetch = (url, toggle = false) => {
  // State variables for storing fetched data, loading status, and errors
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch data from the specified URL
  const fetchData = async () => {
    try {
      // Make a fetch request to the provided URL
      const response = await fetch(url);

      // Parse the response as JSON
      const result = await response.json();

      // Update the data state with the fetched result
      setData(result);
    } catch (error) {
      // Handle errors by updating the error state
      setError(error);
    } finally {
      // Set isLoading to false once the request is complete
      setIsLoading(false);
    }
  };

  // useEffect to trigger data fetching when the URL or toggle parameter changes
  useEffect(() => {
    fetchData();
  }, [url, toggle]);

  // Use useMemo to memoize the values to prevent unnecessary re-renders
  const memoizedValue = useMemo(() => ({ data, isLoading, error }), [
    data,
    isLoading,
    error,
  ]);

  // Return the memoized values
  return memoizedValue;
};
