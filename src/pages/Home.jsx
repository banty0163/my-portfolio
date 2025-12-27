import React from 'react'
import Hero from "../sections/Hero.jsx"
import About from '../sections/About.jsx'
import Skills from '../sections/Skills.jsx'
import Projects from '../sections/Projects.jsx'
import Contact from '../sections/Contact.jsx'
import Footer from '../sections/Footer.jsx'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}
export default Home
