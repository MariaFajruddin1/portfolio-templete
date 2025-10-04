import React from "react";

export default function Contact() {
    return (
        <>
            <div className="greenBg text-black">
                <div className="container border-t-3 py-15 flex flex-wrap gap-10 justify-around">
                    <div className="lg:w-[45%]">
                        <h1 className="lg:text-7xl text-5xl lexend-deca pt-5">Let’s Discuss Your Project, Today!</h1>
                        <p className="manrope text-4xl pt-6">Contact me to discuss how I can elevate your brand. Simply fill out this form to get started.</p>
                    </div>
                    <div className="lg:w-[45%]">
                        <form className="space-y-3">
                            {/* First + Last Name */}
                            <div className="md:flex gap-4">
                                <input
                                    placeholder="First name*"
                                    className="md:w-1/2 w-full mt-3 bg-white text-lg rounded-lg p-3 border border-gray-300 focus:outline-none"
                                />
                                <input
                                    placeholder="Last name*"
                                    className="md:w-1/2 w-full mt-3 bg-white text-lg rounded-lg p-3 border border-gray-300 focus:outline-none"
                                />
                            </div>
                            {/* Email + Phone */}
                            <div className="md:flex gap-4">
                                <input
                                    placeholder="Email address*"
                                    className="md:w-1/2 w-full bg-white text-lg rounded-lg p-3 border border-gray-300 focus:outline-none"
                                />
                                <input
                                    placeholder="Phone number*"
                                    className="md:w-1/2 w-full md:mt-0 mt-3 bg-white text-lg rounded-lg p-3 border border-gray-300 focus:outline-none"
                                />
                            </div>
                            {/* Message */}
                            <div>
                                <textarea
                                    rows={3}
                                    placeholder="Message*"
                                    className="w-full bg-white text-lg rounded-lg p-3 border border-gray-300 focus:outline-none"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="border-double border-6 border-black px-10 py-3 text-2xl manrope"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}