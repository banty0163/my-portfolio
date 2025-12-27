import React from 'react'
import { useRef } from 'react';
import GradientButton from '../components/GradientButton'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';
import { SplitText } from 'gsap/src/SplitText';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);



const Hero = () => {
    const heroRef = useRef(null);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            scrub: 1
        })

        SplitText.create("h1", {
            type: "lines, words",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
                gsap.from(self.words, {
                    y: 100,
                    opacity: 0,
                    stagger: 0.1
                })
            }
        })
        SplitText.create("p", {
            type: "lines, words",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
                gsap.from(self.words, {
                    y: 100,
                    opacity: 0,
                    stagger: 0.1,
                    delay: 0.3
                })
            }
        })
        gsap.from(".btn", {
            opacity: 0,
            duration: 0.6,
            y: 40,
            ease: "power2.out",
            delay: 1.25
        })
    }, { scope: heroRef })


    useGSAP.from
    return (
        <>
            <div ref={heroRef} className="main-container  h-screen flex flex-col lg: justify-center items-start lg:py-10 max-lg:pb-23 ">
                <h1 className="text-3xl lg:text-[3.2vw] uppercase font-heading font-semibold ">Banty kumar</h1>
                <p className="text-6xl lg:text-[8vw] font-heading font-bold leading-[1]    tracking-tight ">Web Devloper  <br /> & <span className="text-stroke"> Designer</span></p>
                <GradientButton text="let's talk" link="mailto:banty0163@gmail.com" className="btn" />
            </div>
        </>
    )
}

export default Hero
