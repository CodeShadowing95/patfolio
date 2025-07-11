import LogoReferences from "./sections/LogoReferences"
import Navbar from "./components/Navbar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import Experiences from "./sections/Experiences"

const App = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <Showcase />

      <LogoReferences />

      <FeatureCards />

      <Experiences />
    </>
  )
}

export default App