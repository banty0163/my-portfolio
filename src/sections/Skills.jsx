import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP)

function Skills() {
    const skillsRef = useRef(null)


    return (
        <>
            <div className="bg-white text-black ">
                <div className="main-container pb-8 lg:pb-12">
                    <h3> Skills</h3>
                </div>
            </div>

            <div className="relative">
                {/* techinacal */}
                <div className="bg-black text-white pt-16 lg:pt-20 pb-[25rem] sticky top-4 ">
                    <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center ">
                        {/* left-side */}
                        <div className="flex gap-6 lg:gap-8">
                            <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                                01
                            </span>
                            <h2 className=" text-[8vw] md:text-6xl font-heading font-bold leading-[1]">Technical Skill </h2>
                        </div>
                        {/* right-side */}
                        <div className="flex flex-center">
                            <p className="text-lg lg:text-xl leading-relaxed uppercase font-heading">
                                HTML , CSS , JavaScript , React JS , Redux , Git and GitHub
                            </p>
                        </div>
                    </div>

                </div>

                <div className="bg-[#E9E9F0] text-black pt-16 lg:pt-20 pb-[10rem] sticky top-1/3">
                    <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center ">
                        {/* left-side */}
                        <div className="flex gap-6 lg:gap-8">
                            <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                                02
                            </span>
                            <h2 className=" text-[8vw] md:text-6xl font-heading font-bold leading-[1]">Soft Skill </h2>
                        </div>
                        {/* right-side */}
                        <div className="flex flex-center">
                            <p className="text-lg lg:text-xl leading-relaxed uppercase font-heading">
                                Communication , Teamwork , Problem-solving , Time management
                            </p>
                        </div>
                    </div>

                </div>

            </div >

        </>
    )
}

export default Skills