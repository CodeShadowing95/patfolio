import LogoReferences from "./sections/LogoReferences"
import Navbar from "./components/Navbar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import Experiences from "./sections/Experiences"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"

const App = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <Showcase />

      <LogoReferences />

      <FeatureCards />

      <Experiences />

      <TechStack />

      <Testimonials />

      <Contact />
    </>
  )
}

export default App