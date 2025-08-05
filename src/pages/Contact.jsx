import React from 'react';
import Footer from '../components/Footer';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    User
} from "lucide-react";



const Contact = () => {
    return (
        <>
            <div
                className="w-full flex items-center justify-center mt-20"
                style={{
                    background: "linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)",
                    height: "304px",
                    minHeight: "220px"
                }}
            >
                <div className="w-full flex flex-col items-center justify-center text-center px-4">
                    <h1
                        className="text-white font-poppins font-semibold"
                        style={{
                            fontSize: "56px",
                            lineHeight: "84px",
                            maxWidth: 314,
                            margin: "0 auto"
                        }}
                    >
                        Contact Us
                    </h1>
                    <p
                        className="mt-4 text-white opacity-90 font-poppins"
                        style={{
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "120%",
                            maxWidth: 533,
                            margin: "0 auto"
                        }}
                    >
                        Get in touch with our expert team for personalized real estate and mortgage guidance.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-start py-12 px-4 gap-12 bg-white">
                {/* Left Side: Contact Form */}
                <div className="flex-1 w-full max-w-[600px]">
                    <h2 className="font-poppins font-medium text-[32px] md:text-[40px] leading-[48px] md:leading-[68px] text-black mb-2">
                        Send us a Message
                    </h2>
                    <p className="font-poppins text-base font-normal text-black mb-6 max-w-[431px]">
                        Fill out the form below and we'll get back to you as soon as possible.
                    </p>

                    <form className="bg-white rounded-[16px] border border-[#2B8CED] p-4 md:p-6 flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex flex-col w-full md:w-1/2">
                                <label className="text-black text-base font-poppins font-normal leading-[100%] mb-1">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your Full Name"
                                    className="border border-[#B3B3B3] rounded-md px-3 py-2 font-poppins text-base leading-[100%]"
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-full md:w-1/2">
                                <label className="text-black text-base font-poppins font-normal leading-[100%] mb-1">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your Email"
                                    className="border border-[#B3B3B3] rounded-md px-3 py-2 font-poppins text-base leading-[100%]"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex flex-col w-full md:w-1/2">
                                <label className="text-black text-base font-poppins font-normal leading-[100%] mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="(555) 123-4567"
                                    className="border border-[#B3B3B3] rounded-md px-3 py-2 font-poppins text-base leading-[100%]"
                                />
                            </div>
                            <div className="flex flex-col w-full md:w-1/2">
                                <label className="text-black text-base font-poppins font-normal leading-[100%] mb-1">
                                    Preferred Contact Method
                                </label>
                                <select
                                    defaultValue=""
                                    className="border border-[#B3B3B3] rounded-md px-3 py-2 font-poppins text-base leading-[100%]"
                                >
                                    <option value="" disabled>
                                        Select Contact Method
                                    </option>
                                    <option value="phone">Phone</option>
                                    <option value="email">Email</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-black text-base font-poppins font-normal leading-[100%] mb-1">
                                Subject *
                            </label>
                            <select
                                required
                                defaultValue=""
                                className="border border-[#B3B3B3] rounded-md px-3 py-2 font-poppins text-base leading-[100%]"
                            >
                                <option value="" disabled>
                                    Select a Subject
                                </option>
                                <option value="buying">Buying</option>
                                <option value="selling">Selling</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-black text-base font-poppins font-normal leading-[100%] mb-1">
                                Message *
                            </label>
                            <textarea
                                placeholder="Tell us how we can help you..."
                                required
                                className="border border-[#B3B3B3] rounded-md px-3 py-2 font-poppins text-base leading-[100%] min-h-[100px]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full text-white font-poppins font-medium text-base rounded-md py-2 transition duration-200 mt-2 hover:brightness-110"
                            style={{
                                background: 'linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)',
                            }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right Side: Get in Touch Info */}
                <div className="flex-1 w-full max-w-[500px]">
                    <h2 className="font-poppins font-medium text-[32px] md:text-[40px] leading-[48px] md:leading-[68px] text-black mb-2">
                        Get in Touch
                    </h2>
                    <p className="font-poppins text-base font-normal text-black mb-6 max-w-[431px]">
                        Ready to start your real estate journey? Contact our expert team today for personalized guidance and support.
                    </p>

                    <div className="flex flex-col gap-4">
                        {[
                            {
                                Icon: Phone,
                                label: "Phone:",
                                value: "+1 (555) 123-4567",
                                note: "Mon–Fri 8AM–8PM, Sat 9AM–5PM",
                            },
                            {
                                Icon: Mail,
                                label: "Email:",
                                value: "info@propertynexus.com",
                                note: "We'll respond within 24 hours",
                            },
                            {
                                Icon: MapPin,
                                label: "Address:",
                                value: "123 Business Avenue",
                                note: "City, State 12345",
                            },
                            {
                                Icon: Clock,
                                label: "Business Hours:",
                                value: "Monday – Friday: 8AM – 8PM",
                                note: "Saturday: 9AM – 5PM, Sunday: Closed",
                            },
                        ].map(({ Icon, label, value, note }, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[16px] border border-[#2B8CED] p-4 flex items-start gap-4"
                            >
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center mt-1 shrink-0"
                                    style={{
                                        background:
                                            "linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)",
                                    }}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-poppins font-normal text-[#2B8CED] leading-[100%] mb-3">
                                        {label}
                                    </p>
                                    <p className="text-[20px] font-poppins font-semibold leading-[100%] text-[#404040]">
                                        {value}
                                    </p>
                                    <p className="text-[12px] font-poppins text-[#5C5C5C] leading-[100%] mt-2">
                                        {note}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[344px] flex items-center justify-center bg-gradient-to-tr from-[#0D4883] via-[#0D4883] to-[#1B6EC1]">
                <div className="w-full flex flex-col items-center">
                    <h2 className="font-poppins font-semibold text-white text-[40px] leading-[64px] mb-2 text-center">
                        Ready to Apply?
                    </h2>
                    <p className="font-poppins text-base font-normal text-white text-center max-w-[533px] mb-8">
                        Learn more about how our innovative projects can benefit your business or explore partnership opportunities.
                    </p>
                    <div className="flex gap-3">
                        <button
                            className="w-[232px] h-[48px] rounded-[12px] px-5 py-3 bg-[#EEBD2B] font-poppins font-semibold text-[16px] leading-[100%] text-[#0D4883] transition hover:bg-yellow-400"
                        >
                            Schedule a Consultation
                        </button>
                        <button
                            className="w-[170px] h-[48px] rounded-[12px] px-5 py-3 border border-white bg-transparent font-poppins font-bold text-[16px] leading-[100%] text-white transition hover:bg-white hover:text-[#0D4883]"
                        >
                            Start a Live Chat
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full py-14 bg-white flex flex-col items-center">
                <h2 className="font-poppins font-medium text-[48px] leading-[68px] text-black text-center">
                    Meet Our Team
                </h2>
                <p className="font-poppins text-base font-normal text-black text-center mt-2 mb-8">
                    Experienced professionals ready to help you succeed
                </p>
                <div className="w-full flex flex-col md:flex-row md:justify-center gap-6 px-4">
                    {[
                        {
                            name: "Sarah Johnson",
                            title: "Senior Mortgage Advisor",
                            phone: "+1 (555) 123-4567",
                            email: "sarah@propertynexus.com",
                        },
                        {
                            name: "Michael Chen",
                            title: "Real Estate Specialist",
                            phone: "(555) 123-4568",
                            email: "michael@propertynexus.com",
                        },
                        {
                            name: "Emily Rodriguez",
                            title: "Loan Officer",
                            phone: "(555) 123-4568",
                            email: "emily@propertynexus.com",
                        },
                    ].map((member, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-4 bg-white rounded-[16px] border border-[#2B8CED] p-5 max-w-[388px] min-w-0 mx-auto md:w-[388px] h-[140px] shadow-sm"
                        >
                            <div className="w-12 h-12 bg-[#0A4076] flex items-center justify-center rounded-full -mt-16">
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="font-poppins font-semibold text-xl md:text-2xl leading-[100%] text-[#0A4076]">
                                    {member.name}
                                </span>
                                <span className="font-poppins text-xs text-[#5C5C5C] leading-[100%] mb-2 mt-2">
                                    {member.title}
                                </span>
                                <div className="flex items-center text-[#5C5C5C] text-sm font-poppins mb-0.5">
                                    <Phone className="w-4 h-4 mr-1 text-black" strokeWidth={2.5} />
                                    {member.phone}
                                </div>
                                <div className="flex items-center text-[#5C5C5C] text-sm font-poppins">
                                    <Mail className="w-4 h-4 mr-1 text-black" strokeWidth={2.5} />
                                    {member.email}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full min-h-[344px] flex flex-col items-center justify-center bg-gradient-to-tr from-[#0D4883] via-[#0D4883] to-[#1B6EC1]">
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-white" strokeWidth={2.5} />
                </div>
                <h2
                    className="font-poppins font-semibold text-[40px] leading-[64px] text-center text-white mb-1"
                    style={{ width: 416 }}
                >
                    123 Business Avenue
                </h2>
                <p
                    className="font-poppins font-normal text-base text-center text-white mb-7"
                    style={{ width: 416 }}
                >
                    City, State 12345
                </p>
                <button className="w-[147px] h-[48px] bg-[#EEBD2B] rounded-[12px] px-5 py-3 flex justify-center items-center font-bold text-base text-[#0D4883] hover:bg-yellow-400 transition">
                    Open in Maps
                </button>
            </div>
            <div className="w-full min-h-[344px] flex items-center justify-center bg-white">
                <div className="w-full flex flex-col items-center">
                    <h2 className="font-poppins font-medium text-[#000000] text-[40px] mb-2 text-center">
                        Ready to Apply?
                    </h2>
                    <p className="font-poppins text-base font-normal text-[#000000] text-center max-w-[533px] mb-8">
                        Learn more about how our innovative projects can benefit your business or explore partnership opportunities.
                    </p>
                    <div className="flex gap-3">
                        <button
                            className="w-[232px] h-[48px] rounded-[12px] px-5 py-3 font-poppins font-semibold text-[16px] leading-[100%] text-[#FFFFFF] transition hover:brightness-110"
                            style={{
                                background: "linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)",
                            }}
                        >
                            Get Pre-Approved
                        </button>

                        <button
                            className="w-[170px] h-[48px] rounded-[12px] px-5 py-3 border border-[#0A4076] bg-transparent font-poppins font-bold text-[16px] leading-[100%] text-[#0A4076] transition hover:bg-blue hover:text-[#0D4886]"
                        >
                            Talk to Expert
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
