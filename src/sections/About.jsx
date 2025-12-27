import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, SplitText)
import { SplitText } from 'gsap/SplitText.js';


function About() {
    const aboutRef = useRef(null);

    useGSAP(() => {
        SplitText.create(".about-text", {
            type: "lines,chars ",
            onSplit(self) {
                gsap.set(self.chars, {
                    opacity: 0.25
                });

                gsap.to(self.chars, {
                    opacity: 1,
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: "top 70%",
                        end: "center center",
                        scrub: 1
                    }
                })
            }
        })
    }, { scope: aboutRef })
    return (
        <>
            <div ref={aboutRef} className=" relative z-20 h-screen bg-white rounded-tl-[60px] rounded-tr-[60px] ">
                <div className=" about-text main-container py-4 lg:py-12 h-full flex justify-center items-center font-heading text-black text-2xl leading-[1.25] md:text-3xl xl:text-5xl">
                    I’m Banty Kumar, a final-year B.Tech Information Technology student from Erode Sengunthar Engineering College, Tamil Nadu. I’m interested in Full Stack Web Development and have hands-on experience with Java, HTML, CSS, JavaScript, React.js, Redux, Git, and GitHub.
                </div>
            </div>
        </>
    )
}

export default About