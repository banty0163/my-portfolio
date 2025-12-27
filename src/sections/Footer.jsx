import React from 'react'
import facebook from "../assets/images/facebook_icon.png"
import instagram from "../assets/images/instagram_icon.png"
import twitter from "../assets/images/twitter_icon.png"


function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="max-w-[1500px] m-auto bg-white opacity-10"></div>


            <footer className="main-container grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-20">

                <div className="main-container ">
                    <h5 className="font-medium mb-5">Services</h5>
                    <ul className="flex flex-col gap-2 text-base lg:text-lg">
                        <li className="hover:text-blue-400">
                            <a href="">Web Design</a>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2 text-base lg:text-lg">
                        <li className="hover:text-blue-400">
                            <a href="">Web Development</a>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2 text-base lg:text-lg">
                        <li className="hover:text-blue-400">
                            <a href="">UI/UX</a>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2 text-base lg:text-lg">
                        <li className="hover:text-blue-400">
                            <a href="">Branding</a>
                        </li>
                    </ul>
                </div>

                <div className="main-container">
                    <h5 className="font-medium mb-5">Accessibility</h5>
                    <ul className="flex flex-col gap-2 text-base lg:text-lg">
                        <li className="hover:text-blue-400">
                            <a href="">Mon - fri 9:00 - 5:00</a>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2 text-base lg:text-lg">
                        <li className="hover:text-blue-400">
                            <a href="">24/7 whatsApp & Email</a>
                        </li>
                    </ul>
                </div>

                <div className="main-container">
                    <h5 className="font-medium mb-5">Contact</h5>
                    <ul className="flex flex-col gap-2 text-base lg:text-lg">
                        <li className="hover:text-blue-400">
                            <a href="">banty0163@gmail.com</a>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2 text-base lg:text-lg">
                        <li className="hover:text-blue-400">
                            <a href="">+91 6201024051</a>
                        </li>
                    </ul>
                </div>
            </footer>

            <div className="max-w-[1500px] m-auto bg-white opacity-10"></div>

            <div className="main-container">

                <ul className="flex flex-col gap-2 text-base lg:text-lg">
                    <li >
                        <a href="">&copy; {currentYear}  b| All rights reserved.</a>
                    </li>
                </ul>
                <div className="flex item-center justify-center gap-4 p-4 " >


                    <a href=""><img src={facebook} alt="" className="w-8 hover:translate-y-1" /></a>
                    <a href=""><img src={instagram} alt="" className="w-8 hover:translate-y-1" /></a>
                    <a href=""><img src={twitter} alt="" className="w-8 hover:translate-y-1" /></a>
                </div >
            </div>




        </>
    )
}

export default Footer