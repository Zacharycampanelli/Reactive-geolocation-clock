// Define a custom hook useInterval for creating intervals in React
import { useEffect, useRef } from "react";

// The useInterval hook takes a callback function and a delay as parameters
export const useInterval = (callback, delay) => {
  // Use useRef to persist the callback function across renders
  const savedCallback = useRef();

  // Effect to update the savedCallback ref whenever the callback function changes
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Effect to set up the interval and clean it up on component unmount or delay change
  useEffect(() => {
    // Function to execute the saved callback on each interval tick
    function tick() {
      savedCallback.current();
    }

    // Set up the interval using setInterval with the provided delay
    let id = setInterval(tick, delay);

    // Clean up the interval on component unmount or delay change
    return () => clearInterval(id);
  }, [delay]);
};
