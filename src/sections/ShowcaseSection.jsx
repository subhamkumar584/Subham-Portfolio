import { use, useRef } from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    useGSAP(() => {
        const projects = [project1Ref.current,project2Ref.current,project3Ref.current];
        projects.forEach((card,index)=>{
            gsap.fromTo(card,{
                y:50,
                opacity:0
            },{
                y:0,
                opacity:1,
                duration:1,
                delay: 0.3 * (index+1),
                scrollTrigger:{
                    trigger: card,
                    start: "top bottom-=100"
                }
            }
        )
        });
        gsap.fromTo(sectionRef.current,{opacity:0},{opacity:1,duration:1.5})
    },[])
    return (
  <section id="work" className="app-showcase" ref={sectionRef}>
    <div className="w-full">
      <div className="showcaselayout">

        {/* LEFT: Showcase Content */}
        <div className="first-project-wrapper" ref={project1Ref}>
          <div className="image-wrapper">
            <img src="/images/project1.png" alt="Project 1: Code Companion" />
          </div>
          <div className="text-content">
            <h2>
              Coding becomes simple if you have a coding companion, so introducing
              the RAG model based Code Companion which makes coding tasks easier.
            </h2>
            <p className="text-white-50 md:text-xl">
              Code Companion is an AI-powered coding assistant designed to help
              developers write, debug, and optimize code efficiently.
            </p>
          </div>
        </div>

        {/* RIGHT: Project List */}
        <div className="project-list-wrapper overflow-hidden">
          <div className="project" ref={project2Ref}>
            <div className="image-wrapper bg-[#ffefdb]">
              <img src="/images/project2.png" alt="Project 2: KrishiMitra" />
            </div>
            <h2>KrishiMitra</h2>
          </div>

          <div className="project" ref={project3Ref}>
            <div className="image-wrapper bg-[#ffe7db]">
              <img src="/images/project3.png" alt="Project 3: YC-directory" />
            </div>
            <h2>YC-directory</h2>
          </div>
        </div>

      </div>
    </div>
  </section>
);

}
export default ShowcaseSection;