import { useGSAP } from "@gsap/react"
import TechIcon from "../components/Models/TechLogos/TechIcon"
import TitleHeader from "../components/TitleHeader"
import { techStackIcons } from "../constants"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(".tech-card", { y: 50, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#skills',
        start: 'top center',
      }
    })
  })

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="My preferred tech stack" sub="🤝 The Skills I bring to the Table" />

        <div className="tech-grid">
          {techStackIcons.map((itemIcon: { name: string, modelPath: string, scale: number, rotation: number[] }) => (
            <div key={itemIcon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={itemIcon} />
                </div>

                <div className="padding-x w-full">
                  <p>
                    {itemIcon.name}
                  </p>
                </div>
              </div>
            </div>
          ))}


          {/* {techStackImgs.map((itemImg: { name: string, imgPath: string }) => (
            <div key={itemImg.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={itemImg.imgPath} alt={itemImg.name} />
                </div>

                <div className="padding-x w-full">
                  <p>
                    {itemImg.name}
                  </p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default TechStack