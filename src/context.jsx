import { createContext, useState } from "react";

// Create a new context named ClockContext
const ClockContext = createContext(null);

// Define a context provider component for managing clock-related state
export function ClockContextProvider({ children }) {
  // State variables for various clock-related information
  const [timeZone, setTimeZone] = useState();
  const [timeZoneAbr, setTimeZoneAbr] = useState();
  const [dayOfWeek, setDayOfWeek] = useState();
  const [dayOfYear, setDayOfYear] = useState();
  const [weekNumber, setWeekNumber] = useState();
  const [dayRange, setDayRange] = useState();

  // Function to modify the week day number by incrementing it
  const modifyWeekDayNumber = (num) => {
    setDayOfWeek(++num);
  };

  // Create an object with context values to be passed to consumers
  const clockContextValue = {
    timeZone,
    setTimeZone,
    timeZoneAbr,
    setTimeZoneAbr,
    dayOfWeek,
    setDayOfWeek: modifyWeekDayNumber,
    dayOfYear,
    setDayOfYear,
    weekNumber,
    setWeekNumber,
    dayRange,
    setDayRange,
  };

  // Render the ClockContext.Provider with the provided context values
  return (
    <ClockContext.Provider value={clockContextValue}>
      {children}
    </ClockContext.Provider>
  );
}

export default ClockContext;
