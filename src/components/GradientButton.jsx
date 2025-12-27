import React from 'react'

function GradientButton({ text, link, className }) {
    return (

        <>
            <a className={` ${className} uppercase mt-2 font-heading border-2 border-transparent text-center min-w-[200px] px-12 py-3 lg:py-3  rounded-full cursor-pointer items-center `} href={link}>{text}

            </a>
        </>

    )
}

export default GradientButton