import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

import ClockContext from "../context";

// Define the Background component
const Background = ({ children }) => {
  // Destructure the dayRange value from the ClockContext
  const { dayRange } = useContext(ClockContext);

  // State variable to manage the background image class
  const [image, setImage] = useState("");

  // Check for screen size breakpoints using useMediaQuery
  const isPhoneSize = useMediaQuery("only screen and (max-width : 768px)");
  const isTabletSize = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 1439px)",
  );
  const isDesktopSize = useMediaQuery("only screen and (min-width : 1440px)");

  // Update the background image class based on the dayRange and screen size
  useEffect(() => {
    if (isPhoneSize) {
      if (dayRange === "day") {
        setImage("bg-mobileDaytime");
      } else {
        setImage("bg-mobileNighttime");
      }
    } else if (isTabletSize) {
      if (dayRange === "day") {
        setImage("bg-tabletDaytime");
      } else {
        setImage("bg-tabletNighttime");
      }
    } else {
      if (dayRange === "day") {
        setImage("bg-desktopDaytime");
      } else {
        setImage("bg-desktopNighttime");
      }
    }
  }, [dayRange, isPhoneSize, isTabletSize, isDesktopSize]);

  // Render the Background component with dynamic background image class
  return (
    <div
      className={`h-full min-h-full w-full min-w-full bg-cover bg-fixed bg-center ${image} g-no-repeat`}
    >
      {children}
    </div>
  );
};

export default Background;
