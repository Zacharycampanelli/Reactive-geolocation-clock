import { useState, useEffect, useMemo } from 'react';

const useFetch = (url, toggle = false) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
      try {
        const response = await fetch(url)
      const result = await response.json()
      setData(result)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

  useEffect(() => {
    fetchData()
  }, [url, toggle])

  const memoizedValue = useMemo(() => ({data, isLoading, error}), [data, isLoading, error]);

  return memoizedValue;
}

export default useFetch;

