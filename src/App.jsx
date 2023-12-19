import { useState } from "react";

import Clock from "./components/Clock/Clock";
import DisplayCity from "./components/DisplayCity/DisplayCity";
import QuoteBox from "./components/QuoteBox/QuoteBox";
import ScreenDrawer from "./components/ScreenDrawer/ScreenDrawer";
import Background from "./layout/Background";

// Define the main App component
function App() {
  // State variable to manage the expansion state of the ScreenDrawer component
  const [expanded, setExpanded] = useState(false);

  // Render the App component with a layout structure and nested components
  return (
    <div className="w-screen h-screen max-h-screen min-h-screen min-w-screen border-box">
      <Background>
        <div className="container relative h-screen px-6 py-7 md:px-16 md:py-20 lg:px-[150px] lg:py-16">
          {/* Render the QuoteBox component with dynamic expansion state */}
          <QuoteBox expanded={expanded} />

          {/* Render the Clock component with dynamic expansion state */}
          <Clock expanded={expanded} />

          {/* Render the DisplayCity component */}
          <DisplayCity />

          {/* Render the ScreenDrawer component with dynamic expansion state */}
          <ScreenDrawer expanded={expanded} setExpanded={setExpanded} />
        </div>
      </Background>
    </div>
  );
}

export default App;
