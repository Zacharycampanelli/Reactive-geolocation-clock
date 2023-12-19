import { useContext, useEffect, useState } from "react";
import { Drawer } from "@material-tailwind/react";
import { useMediaQuery } from "@uidotdev/usehooks";

import ClockContext from "../../context";
import { formatTimeZone } from "../../utils/format";
import DrawerButton from "../DrawerButton/DrawerButton";
import DrawerItem from "../DrawerItem/DrawerItem";

// Define the ScreenDrawer component
const ScreenDrawer = ({ expanded, setExpanded }) => {
  // Destructure values from the ClockContext
  const { timeZone, dayOfYear, dayOfWeek, weekNumber, dayRange } = useContext(ClockContext);

  // State variables for drawer styling
  const [drawerBackground, setDrawerBackground] = useState("");
  const [drawerSize, setDrawerSize] = useState(0);
  const [textColor, setTextColor] = useState();

  // Check for screen size breakpoints
  const isPhoneSize = useMediaQuery("only screen and (max-width : 767px)");
  const isTabletSize = useMediaQuery("only screen and (min-width : 768px) and (max-width : 1439px)");
  const isDesktopSize = useMediaQuery("only screen and (min-width : 1440px)");

  // Function to open the drawer and set its size
  const openDrawer = () => {
    setExpanded(true);
    changeDrawerSize();
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setExpanded(false);
  };

  // Set drawer background and text color based on the time of day
  useEffect(() => {
    if (dayRange === "day") {
      setDrawerBackground("bg-opaqueWhite");
      setTextColor("text-darkGray");
    } else {
      setDrawerBackground("bg-opaqueDarkGray");
      setTextColor("text-white ");
    }
  }, [dayRange]);

  // Set drawer size based on the screen size
  const changeDrawerSize = () => {
    if (isPhoneSize) {
      setDrawerSize(265);
    }

    if (isTabletSize) {
      setDrawerSize(425);
    }

    if (isDesktopSize) {
      setDrawerSize(400);
    }
  };

  // Render the ScreenDrawer component with a DrawerButton and Drawer content
  return (
    <div className="relative lg:mt-[-5%] lg:flex lg:justify-end">
      <DrawerButton expanded={expanded} openDrawer={openDrawer}>
        Open Drawer
      </DrawerButton>
      <Drawer
        overlay={false}
        placement="bottom"
        size={drawerSize}
        open={expanded}
        onClose={closeDrawer}
        className={`${drawerBackground} z-10 px-4 backdrop-blur-lg md:px-16 md:py-0 lg:p-0`}
      >
        <div className="relative my-4 flex h-[80%] flex-col items-stretch justify-between pt-10 md:mt-4 md:grid md:w-[100%] md:grid-cols-3 lg:mt-0 lg:h-[85%] lg:grid-cols-4 lg:pl-[150px] lg:pt-14">
          {/* Render DrawerItems for timezone, day of the year, day of the week, and week number */}
          <DrawerItem label="CURRENT TIMEZONE" content={timeZone !== undefined && formatTimeZone(timeZone)} textColor={textColor} id={1} />
          <DrawerItem label="DAY OF THE YEAR" content={dayOfYear} textColor={textColor} id={2} />
          <DrawerItem label="DAY OF THE WEEK" content={dayOfWeek} textColor={textColor} id={3} />
          <DrawerItem label="WEEK NUMBER" content={weekNumber} textColor={textColor} id={4} />

          {/* Render a vertical line separator for desktop size */}
          {isDesktopSize && (
            <div
              className={`absolute left-[50%] top-[25%] h-[65%] border-l border-solid ${
                dayRange === "day" ? "border-darkGray" : "border-white"
              } opacity-25`}
            ></div>
          )}
        </div>
      </Drawer>
    </div>
  );
}

export default ScreenDrawer;
