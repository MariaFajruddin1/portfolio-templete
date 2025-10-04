import React from "react";
import Image from "next/image";
import HeaderImg from '@/public/Images/header.png'

export default function Header(){
    return(
        <>
        <div className="container lg:flex gap-10 items-center py-10">
            <div className="lg:w-[50%]">
                <Image src={HeaderImg} alt="header image" width={700} height={700}/>
            </div>
            <div className="lg:w-[50%]">
                <p className="manrope greenColor lg:text-5xl text-3xl mt-5">Hello, I'm Maria</p>
                <h1 className="lexend-deca xl:text-8xl md:text-7xl text-5xl greenColor pt-10">Professional Web Developer</h1>
                <button className="manrope greenBg text-black py-3 px-10 text-2xl border-double border-8 mt-7 cursor-pointer">My Portfolio</button>
            </div>
        </div>
        </>
    )
}