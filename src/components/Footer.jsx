import React from "react";
import logo from "../assets/lucide_house.png";
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => (
  <footer
    className="w-full"
    style={{
      background: "linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)",
      padding: 0,
    }}
  >
    <div className="w-full max-w-[1250px] mx-auto pt-14 pb-8 px-4 flex flex-col md:flex-row md:justify-between gap-12">
      {/* LEFT: Logo, tagline, CTA */}
      <div className="flex flex-col items-start w-full md:max-w-sm">
        <div className="flex items-center gap-2 mb-3">
          <img
            src={logo}
            alt="PropertyNexus Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="font-poppins font-semibold text-[20px] text-white">
            PropertyNexus
          </span>
        </div>
        <p className="text-[#E6E6E6] font-poppins text-[14px] leading-relaxed mb-6">
          Your trusted partner in real estate <br /> and mortgage solutions. Connecting dreams with reality.
        </p>
        <button className="font-poppins font-semibold text-[15px] text-white border border-white rounded-xl px-5 py-3 transition hover:bg-white hover:text-[#0D4883]">
          Apply for a Loan
        </button>
      </div>

      {/* RIGHT: Links & Contact - stack vertically on small screens */}
      <div className="w-full flex flex-wrap justify-between gap-y-10 md:gap-y-0 md:gap-x-12">
        {/* Quick Links */}
        <div className="flex flex-col w-[45%] sm:w-[30%] md:w-auto">
          <h3 className="font-poppins font-semibold text-base mb-3 text-[#E6E6E6]">Quick Links</h3>
          <ul className="space-y-2 font-poppins text-[14px] text-[#E6E6E6]">
            <li><a href="#">Home Buying &amp; Selling</a></li>
            <li><a href="#">Loan Services</a></li>
            <li><a href="#">Mortgage Calculator</a></li>
            <li><a href="#">Apply Now</a></li>
          </ul>
        </div>

        {/* Our Projects */}
        <div className="flex flex-col w-[45%] sm:w-[30%] md:w-auto">
          <h3 className="font-poppins font-semibold text-base mb-3 text-[#E6E6E6]">Our Projects</h3>
          <ul className="space-y-2 font-poppins text-[14px] text-[#E6E6E6]">
            <li><a href="#">Real Estate Platform</a></li>
            <li><a href="#">AI Financial Advisor</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Wealth Management</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col w-full sm:w-[100%] md:w-auto">
          <h3 className="font-poppins font-semibold text-base mb-3 text-[#E6E6E6]">Contact Us</h3>
          <div className="space-y-3 font-poppins text-[14px] text-[#E6E6E6]">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-white" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-white" />
              <span>info@propertynexus.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-white" />
              <span>123 Business Ave, City, State 12345</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
