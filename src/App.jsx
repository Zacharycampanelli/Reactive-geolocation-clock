import Button from "./components/Button/Button"
import Clock from "./components/Clock/Clock"
import DisplayCity from "./components/DisplayCity/DisplayCity"
import QuoteBox from "./components/QuoteBox/QuoteBox"
import Background from "./layout/Background"

function App() {
 
  return (
    <div className="min-w-full  w-full ">
      <Background>
        <div className="container p-7 relative h-screen">

       <QuoteBox />
        <Clock />
        <DisplayCity />
        <Button />
        </div>
      </Background>
    </div>
  )
}

export default App
