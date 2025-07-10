import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const project1Ref = useRef<HTMLDivElement>(null);
  const project2Ref = useRef<HTMLDivElement>(null);
  const project3Ref = useRef<HTMLDivElement>(null);

  
  
  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
    
    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
          }
        }
      )
    })

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    )
  }, [])

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" className="" />
            </div>
            <div className="text-content">
              <h2>On-Demand Rides Made Simple with a Powerful, User-friendly App called Ryde</h2>
              <p className="text-white-50 md:text-xl text-lg">(Talk more about the app, the technologies used, what obstacles you faced while developing it)</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="some project name..." className="" />
              </div>
              <h2>Project 2</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="some project name..." className="" />
              </div>
              <h2>Project 3</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase