import DrawerButton from "./components/DrawerButton/DrawerButton"
import Clock from "./components/Clock/Clock"
import DisplayCity from "./components/DisplayCity/DisplayCity"
import QuoteBox from "./components/QuoteBox/QuoteBox"
import { ScreenDrawer } from "./components/ScreenDrawer/ScreenDrawer"
import Background from "./layout/Background"
import { useState } from "react"

function App() {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="w-full min-w-full ">
      <Background>
        <div className="container relative h-screen p-7">
      {!expanded &&
       <QuoteBox /> }
        <Clock />
        <DisplayCity />
     
        <ScreenDrawer setExpanded={setExpanded}/>
        </div>
      </Background>
    </div>
  )
}

export default App
