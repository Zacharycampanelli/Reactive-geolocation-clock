import { useEffect, useState } from "react";

import SvgIconArrowDown from "../../assets/icons/IconArrowDown";
import SvgIconArrowUp from "../../assets/icons/IconArrowUp";

// Define the DrawerButton component
const DrawerButton = ({ expanded, openDrawer }) => {
  // State variable to manage the direction of the arrow icon
  const [arrow, setArrow] = useState("down");

  // Update the arrow direction when the 'expanded' prop changes
  useEffect(() => {
    expanded ? setArrow("up") : setArrow("down");
  }, [expanded]);

  // Render the DrawerButton component with a button that toggles the drawer
  return (
    <button
      onClick={openDrawer}
      className="mb-2 flex w-[35%] items-center justify-center rounded-[28px] bg-white p-1 md:w-[22%] md:p-3 lg:w-auto"
      type="button"
    >
      <p className="ml-2 mr-3 text-[12px] font-bold leading-[14px] tracking-[3.75px] tracking-[5px] opacity-50 md:text-[16px] md:leading-[28px] ">
        {arrow === "down" ? "MORE" : "LESS"}
      </p>
      <span className="relative inline-block h-8 w-8 rounded-[50%] bg-black hover:bg-darkGray">
        {arrow === "down" ? (
          <SvgIconArrowDown />
        ) : (
          <SvgIconArrowUp className="relative " />
        )}
      </span>
    </button>
  );
};

export default DrawerButton;
