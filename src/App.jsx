import { StrictMode } from "react"
import Facts from "./assets/Components/Facts"
import Hero from "./assets/Components/Hero"
import Navbar from "./assets/Components/Navbar"
import Nations from "./assets/Components/Nations"
import About from "./assets/Components/About"
import Contact from "./assets/Components/Contact"
import Footer from "./assets/Components/Footer"


const App = () => {
  return (
    <div className="">
      <StrictMode>
        <Navbar />
        <Hero />
        <Facts />
        <About />
        <Nations />
        <Contact />
        <Footer />
      </StrictMode>
    </div>
  )
}

export default App
