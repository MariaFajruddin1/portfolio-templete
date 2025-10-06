import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import port01 from '@/public/Images/port01.jpeg';
import port02 from '@/public/Images/port02.jpeg';
import port03 from '@/public/Images/port03.jpeg';
import port04 from '@/public/Images/port04.jpeg';
import port05 from '@/public/Images/port05.jpeg';
import port06 from '@/public/Images/port06.jpeg';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="container py-15">
                <h3 className="lg:text-7xl py-15 text-5xl lexend-deca text-center greenColor">Recent Works</h3>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <Image src={port01} alt="portfolio work images" width={500} height={500} className="mx-auto"/>
                    <Image src={port02} alt="portfolio work images" width={500} height={500} className="mx-auto"/>
                    <Image src={port03} alt="portfolio work images" width={500} height={500} className="mx-auto"/>
                    <Image src={port04} alt="portfolio work images" width={500} height={500} className="mx-auto"/>
                    <Image src={port05} alt="portfolio work images" width={500} height={500} className="mx-auto"/>
                    <Image src={port06} alt="portfolio work images" width={500} height={500} className="mx-auto"/>
                </div>
            </div>
            <Footer/>
        </>
    )
}
