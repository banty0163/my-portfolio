import React from 'react'
import GradientButton from '../components/GradientButton'

function Contact() {
    return (
        <>
            <div className="main-container py-20 lg:py-28 h-full flex flex-col gap-8 justify-center  items-center">
                Freelance Projects,collabaration and full-time opportunities.Let's get acquainted
                <GradientButton className="btn hover:translate-y-1" text="Get in Touch" link="/" />
            </div>
        </>
    )
}

export default Contact