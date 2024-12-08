import './App.css'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import Listings from './components/Listings/listings'
import Findings from './components/Findings/findings'
import Choose from './components/Choose/choose'

function App() {

  return (
    <>
     <Navbar />
     <Hero/>
     <Listings/>
     <Findings/>
     <Choose/>
    </>
  )
}

export default App
