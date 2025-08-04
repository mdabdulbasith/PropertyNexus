import React from 'react';
import { Check } from 'lucide-react';
import Footer from '../components/Footer';
import { DollarSign, Clock, ShieldCheck, TrendingDown } from "lucide-react"

const Loans = () => {
    return (
        <>
            <div
                className="w-full flex items-center justify-center overflow-hidden mt-20"
                style={{
                    background: "linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)",
                    minHeight: "220px",
                    padding: "2rem 1rem",
                }}
            >
                <div className="w-full max-w-[1280px] flex flex-col items-center text-center px-4">
                    <h1
                        className="text-white font-poppins font-semibold"
                        style={{
                            fontSize: "clamp(28px, 5vw, 56px)",
                            lineHeight: "clamp(40px, 6vw, 84px)",
                            maxWidth: 739,
                            margin: "0 auto",
                        }}
                    >
                        Mortgage &amp; Loan Services
                    </h1>

                    <p
                        className="mt-4 text-white opacity-90 font-poppins"
                        style={{
                            fontSize: "clamp(14px, 2.5vw, 16px)",
                            lineHeight: "160%",
                            maxWidth: 540,
                            margin: "0 auto",
                        }}
                    >
                        Find the perfect loan solution for your home purchase or refinancing
                        needs with competitive rates and expert guidance.
                    </p>

                    <button
                        className="mt-7 font-poppins font-semibold text-[#0D4883] bg-white rounded-xl px-6 py-3 text-base shadow-md transition hover:bg-[#e6eefd] hover:shadow-lg"
                        style={{
                            fontSize: "16px",
                            borderRadius: "12px",
                        }}
                    >
                        Get Pre-Qualified Now
                    </button>
                </div>
            </div>

            <div className="pt-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48 bg-white">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-[#0A4076] mb-2">Loan Options</h2>
                    <p className="text-gray-600">Choose from our variety of mortgage products</p>
                </div>

                {/* Loan Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Conventional Loans",
                            rate: "Starting at 6.5%",
                            description: "Traditional mortgages with competitive rates and flexible terms.",
                            features: ["No PMI with 20% down", "Flexible credit requirements", "Low down payment", "Various term options"],
                            term: "15-30 years",
                            down: "5-20%",
                        },
                        {
                            title: "FHA Loans",
                            rate: "Starting at 6.2%",
                            description: "Government-backed loans with lower down payment requirements.",
                            features: ["Flexible credit scores", "Low Down Payment", "Assumable loan", "Various term options"],
                            term: "15-30 years",
                            down: "3.5%",
                        },
                        {
                            title: "VA Loans",
                            rate: "Starting at 6.0%",
                            description: "Exclusive benefits for military veterans and service members.",
                            features: ["No down payment", "No PMI required", "Competitive rates"],
                            term: "15-30 years",
                            down: "0%",
                        },
                        {
                            title: "USDA Loans",
                            rate: "Starting at 6.3%",
                            description: "Rural development loans for eligible areas and borrowers.",
                            features: ["No down payment", "Rural properties", "Income limits apply"],
                            term: "30 years",
                            down: "0%",
                        },
                    ].map(({ title, rate, description, features, term, down }) => (
                        <div
                            key={title}
                            className="relative border-[1px] border-[#0A4076] rounded-lg p-6 flex flex-col justify-between shadow-sm bg-white"
                        >
                            {/* Rate badge */}
                            <div className="absolute top-4 right-4 bg-[#EEBD2B] text-[#0A4076] text-xs px-3 py-1 rounded-full font-semibold z-10">
                                {rate}
                            </div>

                            <div>
                                <h3 className="text-[24px] font-semibold text-[#363636]">{title}</h3>
                                <p className="text-[14px] text-[#777777] mb-3">{description}</p>

                                <ul className="space-y-2 text-[14px] text-[#777777] mb-4">
                                    {features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <div className="min-w-[26px] h-6 flex items-center justify-center bg-[#0A4076] rounded-full">
                                                <Check className="w-3.5 h-3.5 text-white" />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Horizontal layout for term & down payment */}
                                <div className="flex justify-between text-sm text-gray-600 mb-4 gap-8">
                                    <div className="flex flex-col items-start">
                                        <span className="font-medium text-gray-500">Term:</span>
                                        <span className="font-bold text-[#363636]">{term}</span>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className="font-medium text-gray-500">Down Payment:</span>
                                        <span className="font-bold text-[#363636]">{down}</span>
                                    </div>
                                </div>


                            </div>

                            <button className="mt-4 w-full border border-[#0A4076] text-[#0A4076] py-2 rounded-md text-[16px] font-bold hover:bg-gray-100">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full bg-white py-14 px-4 flex flex-col items-center">
                {/* Heading */}
                <h2 className="font-poppins font-semibold text-black text-center text-[32px] md:text-[40px] leading-[48px] md:leading-[68px]">
                    Loan Process
                </h2>

                {/* Subheading */}
                <p className="font-poppins text-black text-center mt-1 mb-8 text-[14px] md:text-[16px] leading-[100%]">
                    Simple steps to get your loan approved
                </p>

                {/* Cards Wrapper */}
                <div className="w-full">
                    <div className="mx-auto flex flex-wrap justify-center gap-6 max-w-screen-xl">
                        {[
                            {
                                id: 1,
                                title: "Pre-qualification",
                                description:
                                    "Quick assessment of your financial situation and loan eligibility.",
                                time: "5 minutes",
                            },
                            {
                                id: 2,
                                title: "Application",
                                description:
                                    "Complete your detailed loan application with required documentation.",
                                time: "30 minutes",
                            },
                            {
                                id: 3,
                                title: "Processing",
                                description:
                                    "We review your application and verify all information and documents.",
                                time: "3–7 Days",
                            },
                            {
                                id: 4,
                                title: "Underwriting",
                                description:
                                    "Final review and approval decision from our underwriting team.",
                                time: "5–10 days",
                            },
                            {
                                id: 5,
                                title: "Closing",
                                description: "Sign final documents and receive your loan funds.",
                                time: "1 Day",
                            },
                        ].map((step) => (
                            <div
                                key={step.id}
                                className="bg-white border border-[#2B8CED] rounded-[16px] flex flex-col items-center px-4 py-6 w-[280px] md:w-[250px] h-[235px]"
                            >
                                {/* Step Circle */}
                                <div
                                    className="flex items-center justify-center rounded-full mb-4"
                                    style={{
                                        width: 48,
                                        height: 48,
                                        background:
                                            "linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)",
                                    }}
                                >
                                    <span className="font-poppins font-semibold text-white text-[32px] leading-[48px]">
                                        {step.id}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-center font-poppins font-semibold text-[20px] text-[#0A4076] leading-[100%]">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-center font-poppins text-[12px] leading-snug text-[#5C5C5C] mt-1">
                                    {step.description}
                                </p>

                                {/* Time Info */}
                                <div className="mt-auto pt-4">
                                    <span className="font-poppins font-medium text-[#0A4076] text-[14px] px-[11px] py-[2px] rounded-full">
                                        {step.time}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div
                className="w-full flex flex-col items-center justify-center"
                style={{
                    background: "linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)",
                    minHeight: 258,
                    paddingTop: 48,
                    paddingBottom: 48,
                }}
            >
                <h2
                    className="font-poppins font-semibold text-white text-center"
                    style={{
                        fontSize: 40,
                        lineHeight: "54px",
                        margin: "0 auto",
                    }}
                >
                    Current Rates
                </h2>

                <p
                    className="mb-5 mt-1 text-white font-poppins font-normal text-[16px] text-center opacity-90"
                    style={{
                        lineHeight: "21px",
                    }}
                >
                    Today's competitive mortgage rates
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
                    <div
                        className="bg-white rounded-[8px] flex flex-col items-center justify-center px-6 py-2 shadow"
                        style={{
                            minWidth: 116,
                            height: 67,
                            padding: "8px 16px",
                            borderRadius: 8,
                        }}
                    >
                        <span
                            className="font-poppins font-semibold text-[#0D4883]"
                            style={{ fontSize: 20, lineHeight: "100%" }}
                        >
                            6.5%
                        </span>
                        <span
                            className="font-poppins font-normal text-[#5C5C5C] text-[14px] leading-[100%] text-center"
                            style={{ marginTop: 4 }}
                        >
                            30 Year Fixed
                        </span>
                    </div>

                    <div
                        className="bg-white rounded-[8px] flex flex-col items-center justify-center px-6 py-2 shadow"
                        style={{
                            minWidth: 116,
                            height: 67,
                            padding: "8px 16px",
                            borderRadius: 8,
                        }}
                    >
                        <span
                            className="font-poppins font-semibold text-[#0D4883]"
                            style={{ fontSize: 20, lineHeight: "100%" }}
                        >
                            6.2%
                        </span>
                        <span
                            className="font-poppins font-normal text-[#5C5C5C] text-[14px] leading-[100%] text-center"
                            style={{ marginTop: 4 }}
                        >
                            15 Year Fixed
                        </span>
                    </div>

                    <div
                        className="bg-white rounded-[8px] flex flex-col items-center justify-center px-6 py-2 shadow"
                        style={{
                            minWidth: 116,
                            height: 67,
                            padding: "8px 16px",
                            borderRadius: 8,
                        }}
                    >
                        <span
                            className="font-poppins font-semibold text-[#0D4883]"
                            style={{ fontSize: 20, lineHeight: "100%" }}
                        >
                            5.8%
                        </span>
                        <span
                            className="font-poppins font-normal text-[#5C5C5C] text-[14px] leading-[100%] text-center"
                            style={{ marginTop: 4 }}
                        >
                            5/1 ARM
                        </span>
                    </div>
                </div>

                <button
                    className="flex items-center justify-center font-poppins font-semibold text-[#0D4883] mt-2"
                    style={{
                        width: 244,
                        height: 48,
                        gap: 8,
                        borderRadius: 12,
                        background: "#EEBD2B",
                        padding: "12px 20px",
                        fontSize: 14,
                        boxShadow: "0 2px 6px #eedc2b33",
                    }}
                >
                    Get Your Custom Rate
                    <span className="ml-2 text-lg">→</span>
                </button>
            </div>


            <div className="w-full py-16 px-4 flex flex-col items-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-black font-poppins text-center">
                    Why Choose Us
                </h2>

                {/* Subheading */}
                <p className="text-center mt-2 mb-10 text-black text-[16px] font-poppins max-w-xl">
                    Experience the difference with our loan services
                </p>

                {/* Cards */}
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: "Competitive Rates",
                            description: "Access to the most competitive interest rates in the market.",
                            icon: <DollarSign className="text-white" size={20} />,
                        },
                        {
                            title: "Fast Processing",
                            description: "Quick approval process with most decisions within 24 hours.",
                            icon: <Clock className="text-white" size={20} />,
                        },
                        {
                            title: "Secure & Trusted",
                            description: "Bank-level security and trusted by thousands of customers.",
                            icon: <ShieldCheck className="text-white" size={20} />,
                        },
                        {
                            title: "Low Fees",
                            description: "Transparent pricing with minimal fees and no hidden costs.",
                            icon: <TrendingDown className="text-white" size={20} />,
                        },
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 border border-[#2B8CED] hover:shadow-lg transition duration-300 flex flex-col items-start"
                        >
                            {/* Icon Circle */}
                            <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center mb-4">
                                {card.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-[#0A4076] font-semibold text-lg mb-2 font-poppins">
                                {card.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm font-poppins">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>





            <Footer />
        </>
    );
};

export default Loans;
