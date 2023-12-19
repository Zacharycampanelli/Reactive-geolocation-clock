import { useState } from "react";

import Clock from "./components/Clock/Clock";
import DisplayCity from "./components/DisplayCity/DisplayCity";
import QuoteBox from "./components/QuoteBox/QuoteBox";
import ScreenDrawer from "./components/ScreenDrawer/ScreenDrawer";
import Background from "./layout/Background";

function App() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="w-screen h-screen max-h-screen min-h-screen min-w-screen border-box">
      <Background>
        <div className="container relative h-screen px-6 py-7 md:px-16 md:py-20 lg:px-[150px] lg:py-16">
          <QuoteBox expanded={expanded} />
          <Clock expanded={expanded} />
          <DisplayCity />
          <ScreenDrawer expanded={expanded} setExpanded={setExpanded} />
        </div>
      </Background>
    </div>
  );
}

export default App;
