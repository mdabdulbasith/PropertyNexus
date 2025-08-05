import React from 'react'
import { FileText } from "lucide-react";
import Footer from '../components/Footer';


const Apply = () => {
    return (
        <>
            <div
                className="w-full flex items-center justify-center mt-20"
                style={{
                    background: "linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)",
                    height: "304px",
                    minHeight: "220px",
                }}
            >
                <div className="w-full flex flex-col items-center justify-center text-center px-4 ">
                    <h1
                        className="text-white font-poppins font-semibold"
                        style={{
                            fontSize: "56px",
                            lineHeight: "84px",
                            letterSpacing: "0%",
                            maxWidth: 581,
                            margin: "0 auto",
                        }}
                    >
                        Loan Application
                    </h1>
                    <p
                        className="mt-4 text-white opacity-80 font-poppins"
                        style={{
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "120%",
                            maxWidth: 550,
                            margin: "0 auto",
                        }}
                    >
                        Start your journey to homeownership with our simple online application process.
                    </p>
                </div>
            </div>
            <div className="max-w-2xl mx-auto p-6 rounded-xl border border-[#2B8CED] mt-10">
                {/* Step Indicator */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-black mt-1">Personal Information</h2>
                    <p className="text-sm text-black">Let's start with your basic information</p>
                </div>

                {/* Form Fields */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-black">First Name *</label>
                        <input
                            type="text"
                            placeholder="Enter your First Name"
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-black">Last Name *</label>
                        <input
                            type="text"
                            placeholder="Enter your Last Name"
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-black">Email Address *</label>
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-black">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="(555) 123-4567"
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Social Security Number */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-black">Social Security Number</label>
                        <input
                            type="text"
                            placeholder="555-12-2332"
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Date of Birth */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-black">Date of Birth</label>
                        <input
                            type="date"
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </form>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    <button
                        disabled
                        className="border border-[#0A4076] text-[#0A4076] px-5 py-2 rounded-[12px] cursor-not-allowed"
                    >
                        Back
                    </button>
                    <button className="btn-gradient text-white px-5 py-2 rounded-md cursor-pointer">
                        Next Step
                    </button>
                </div>
            </div>

            <div className="w-full py-16 px-4 flex flex-col items-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-black font-poppins text-center">
                    What you’ll Need
                </h2>

                {/* Subheading */}
                <p className="text-center mt-2 mb-10 text-black text-[16px] font-poppins max-w-xl">
                    Prepare these documents to expedite your application
                </p>

                {/* Cards */}
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 align-center">
                    {[
                        {
                            description: "Recent pay stubs (2-4 weeks)",
                        },
                        {
                            description: "Tax returns (last 2 years)",
                        },
                        {
                            description: "Bank statements (2-3 months)",
                        },
                        {
                            description: "Employment verification letter",
                        },
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 border border-[#2B8CED] hover:shadow-lg transition duration-300 flex flex-col items-center"
                        >
                            {/* Icon Circle */}
                            <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center mb-4">
                                <FileText className="text-white w-5 h-5" />
                            </div>


                            {/* Description */}
                            <p className="text-gray-600 text-sm font-poppins">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Apply
