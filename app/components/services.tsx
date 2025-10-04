import React from "react";
import Image from "next/image";
import service01 from '@/public/Images/service01.png';
import service02 from '@/public/Images/service02.png';
import service03 from '@/public/Images/service03.png';
import service04 from '@/public/Images/service04.png';

export default function Services() {
    return (
        <>
            <div className="greenBg text-black">
                <div className="container border-t-3 py-15">
                    <h4 className="lg:text-4xl text-2xl uppercase manrope">SERVICES</h4>
                    <h1 className="lg:text-7xl text-5xl lexend-deca pt-3">I offer wide range of digital services.</h1>
                    <div className="flex flex-wrap justify-around mt-15 items-center xl:gap-0 gap-10">
                        <div>
                            <Image src={service01} alt="services images" className="mx-auto" width={200} height={200} />
                            <p className="text-2xl text-center pt-8 manrope">Graphic Design</p>
                        </div>
                        <div>
                            <Image src={service02} alt="services images" className="mx-auto" width={150} height={150} />
                            <p className="text-2xl text-center pt-8 manrope">Web & Mobile Design</p>
                        </div>
                        <div>
                            <Image src={service03} alt="services images" className="mx-auto" width={105} height={105} />
                            <p className="text-2xl text-center pt-8 manrope">Branding & Identity</p>
                        </div>
                        <div>
                            <Image src={service04} alt="services images" className="mx-auto" width={83} height={83} />
                            <p className="text-2xl text-center pt-8 manrope">Digital Marketing</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}