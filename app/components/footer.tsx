import React from "react";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="greenBg text-black">
                <div className="container border-t-3 py-10 flex flex-wrap justify-between">
                    <p className="text-xl">© {year}. All Rights Reserved.</p>
                    <div className="flex gap-10 items-center text-2xl sm:pt-0 pt-5">
                        <FaFacebookF />
                        <AiFillInstagram />
                        <FaXTwitter />
                    </div>
                </div>
            </div>
        </>
    )
}
