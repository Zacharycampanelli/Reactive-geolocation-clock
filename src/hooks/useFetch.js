import { useState, useEffect } from 'react';

const useFetch = (url, toggle = false) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch(url)
      .then(response => {
        if (!response.ok) { 
          // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message);
      })
  }, [url, toggle])

  return { data, isLoading, error };
}

export default useFetch;

