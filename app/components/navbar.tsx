'use client'
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navMenu = [
    {
        name: "Home",
        href: '/'
    },
    {
        name: 'portfolio',
        href: '/portfolio'
    }
]

export default function Navbar() {
    const pathname = usePathname();
    return (
        <>
            <div className="container pt-15 md:flex md:justify-between justify-center items-center">
                <div className="text-4xl font-bold lexend-deca greenColor text-center">
                    <h1>Mr Portfolio</h1>
                </div>
                <div className="flex gap-10 uppercase greenColor text-xl manrope lg:pt-0 pt-5 justify-center">
                    {navMenu.map((item) => (
                        <div key={item.href}>
                            <Link href={item.href}>{item.name}</Link>
                            {pathname === item.href && <div className="w-full mt-1 h-1.5 rounded-2xl greenBg"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}