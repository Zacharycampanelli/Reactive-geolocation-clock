import Clock from "./components/Clock/Clock"
import QuoteBox from "./components/QuoteBox/QuoteBox"
import Background from "./layout/Background"

function App() {
 
  return (
    <div className="min-w-full min-h-screen w-full h-screen">
      <Background>
        <div className="container p-7">

       <QuoteBox />
        <Clock />
        </div>
      </Background>
    </div>
  )
}

export default App
