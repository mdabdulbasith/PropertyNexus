import React from 'react'
// import Home1 from '../assets/Home1.png'
import Rectangle from '../assets/Rectangle 3.png'
import { TrendingUp, Users, Shield } from 'lucide-react';
import { Home as HomeIcon, Building, Wallet, FileText } from 'lucide-react';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center px-6 pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">

                    {/* Left Section: Text Content */}
                    <div className="flex flex-col justify-center space-y-6">
                        <h1 className="text-[56px] font-medium font-poppins text-[#0A4076] leading-[64px]">
                            Your Dream Home Awaits
                        </h1>

                        <p className="text-[16px] text-[#5C5C5C]">
                            Expert real estate and mortgage solutions to help you find,<br />
                            finance, and secure your perfect property.
                        </p>

                        <div className="flex space-x-4">
                            <button className="px-6 py-3 text-white text-[16px] font-bold rounded-xl hover:bg-[#08325d] transition btn-gradient">
                                Explore Properties
                            </button>
                            <button className="px-6 py-3 bg-white text-[16px] border border-[#0A4076] font-bold text-[#0A4076] rounded-xl transition">
                                Calculate Mortgage
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 font-poppins">
                            <div className="text-center sm:text-left">
                                <TrendingUp className="w-10 h-10 text-[#0A4076]" />
                                <h2 className="text-[24px] font-semibold text-black">10,000+</h2>
                                <p className="text-black text-[16px]">Properties Sold</p>
                            </div>
                            <div className="text-center sm:text-left">
                                <Users className="w-10 h-10 text-[#0A4076]" />
                                <h2 className="text-[24px] font-semibold text-black">5,000+</h2>
                                <p className="text-black text-[16px]">Happy Clients</p>
                            </div>
                            <div className="text-center sm:text-left">
                                <Shield className="w-10 h-10 text-[#0A4076]" />
                                <h2 className="text-[24px] font-semibold text-black">15+</h2>
                                <p className="text-black text-[16px]">Years of Experience</p>
                            </div>
                        </div>

                    </div>


                    {/* Right Section: Image */}
                    <div className="flex items-center justify-center">
                        <img
                            src={Rectangle}
                            alt="Illustration"
                            className="w-[500px] h-auto shadow-lg rounded-t-[302px] rounded-b-[16px]"
                        />
                    </div>

                </div>
            </div>
            <div className="btn-gradient h-auto w-full py-16 px-6">
                <div className="max-w-6xl mx-auto text-center space-y-6">

                    {/* Heading */}
                    <h2 className="text-[48px] font-medium text-white">Our Services</h2>

                    {/* Paragraph */}
                    <p className="text-white max-w-2xl mx-auto text-[16px]">
                        Comprehensive real estate and mortgage solutions designed to <br></br> make your property journey seamless.
                    </p>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-lg p-6 text-left">
                            <HomeIcon className="w-8 h-8 text-[#0A4076] mb-3" />
                            <h3 className="text-lg font-semibold text-[#0A4076] mb-2">Buy & Sell Properties</h3>
                            <p className="text-gray-600 text-sm">Expert guidance for all your real estate transactions with competitive rates.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-lg p-6 text-left">
                            <Building className="w-8 h-8 text-[#0A4076] mb-3" />
                            <h3 className="text-lg font-semibold text-[#0A4076] mb-2">Mortgage Calculator</h3>
                            <p className="text-gray-600 text-sm">Calculate your monthly payments and explore different loan scenarios.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-lg p-6 text-left">
                            <Wallet className="w-8 h-8 text-[#0A4076] mb-3" />
                            <h3 className="text-lg font-semibold text-[#0A4076] mb-2">Loan Services</h3>
                            <p className="text-gray-600 text-sm">Comprehensive mortgage and loan solutions tailored to your needs.</p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-xl shadow-lg p-6 text-left">
                            <FileText className="w-8 h-8 text-[#0A4076] mb-3" />
                            <h3 className="text-lg font-semibold text-[#0A4076] mb-2">Expert Support</h3>
                            <p className="text-gray-600 text-sm">Get personalized assistance from our experienced real estate professionals.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center py-16 bg-[#f8f9fa] px-4">
                <h2 className="text-[48px] font-medium text-black mb-4">Ready to Get Started</h2>
                <p className="text-[16px] text-black max-w-xl mx-auto mb-8">
                    Join thousands of satisfied clients who have found their dream homes with our expert guidance.
                </p>

                <div className="flex justify-center space-x-4">
                    <button className="px-6 py-3 text-white text-[16px] font-bold rounded-xl hover:bg-[#08325d] transition btn-gradient">
                        Get Started
                    </button>
                    <button className="px-6 py-3 bg-white text-[16px] border border-[#0A4076] font-bold text-[#0A4076] rounded-xl transition">
                        Contact Us
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
