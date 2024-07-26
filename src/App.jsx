import Body from "./Components/Body"
import Footer from "./Components/Footer"
import Header from "./Components/Header"

function App() {
  

  return (
    <>
      <div className="bg-amber-50 min-h-screen py-3 px-6 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10 ">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
