import React from 'react';
import { MapPin } from 'lucide-react';
import { BedDouble } from 'lucide-react';
import { Bath } from 'lucide-react';
import { MdAspectRatio } from 'react-icons/md';
import { Check } from 'lucide-react';
import Footer from '../components/Footer';

const BuySell = () => {
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
            Buy &amp; Sell Properties
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
            Find your dream home or sell your property with confidence. Our expert team provides comprehensive real estate services.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center py-10 px-4 bg-white">
        <h2
          className="text-center font-poppins font-medium text-[32px] md:text-[40px] text-black"
          style={{
            maxWidth: 517,
            lineHeight: "68px",
            letterSpacing: "0%",
            margin: "0 auto",
          }}
        >
          Find your Perfect Property
        </h2>

        <div
          className="mt-7 flex items-center justify-center w-full"
          style={{ minHeight: 80 }}
        >
          <form
            className="w-full max-w-[703px] flex flex-col md:flex-row items-center gap-4 p-4 border border-[#A6A6A6] rounded-[12px] bg-white shadow-sm"
            style={{
              minHeight: 80,
              borderWidth: 1,
              borderColor: "#A6A6A6",
              padding: 16,
              gap: 16,
            }}
          >
            <input
              type="text"
              placeholder="Enter ZIP Code"
              className="w-full md:w-[268px] h-12 md:h-[48px] rounded-[8px] border border-[#999999] font-poppins px-4 py-3 text-black text-base focus:outline-none focus:border-[#0D4883] bg-white transition"
              style={{
                minWidth: 150,
                maxWidth: 268,
                borderWidth: 1,
                borderColor: "#999999",
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 16,
                paddingRight: 16,
                gap: 8,
              }}
            />
            <select
              className="w-full md:w-[268px] h-12 md:h-[48px] rounded-[8px] border border-[#999999] font-poppins px-4 py-3 text-black text-base focus:outline-none focus:border-[#0D4883] bg-white transition"
              style={{
                minWidth: 150,
                maxWidth: 268,
                borderWidth: 1,
                borderColor: "#999999",
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 16,
                paddingRight: 16,
                gap: 8,
              }}
              defaultValue=""
            >
              <option value="" disabled>
                Property Type
              </option>
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
              <option>Townhome</option>
              <option>Land</option>
            </select>
            <button
              type="submit"
              className="h-12 md:h-[48px] w-full md:w-[103px] rounded-[12px] font-semibold text-white bg-gradient-to-r from-[#0D4883] to-[#1B6EC1] px-6 py-3 text-base shadow-sm transition hover:brightness-95"
              style={{
                minWidth: 103,
                borderRadius: 12,
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 24,
                paddingRight: 24,
                gap: 8,
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="w-full bg-gradient-to-br from-[#0D4883] to-[#1B6EC1] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          {/* Heading */}
          <div className="text-white text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-poppins font-semibold mb-2">
              Featured Properties
            </h2>
            <p className="text-sm sm:text-base font-poppins max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col justify-between bg-white border border-[#0A4076] rounded-2xl p-5 w-full shadow-sm transition hover:shadow-md">
              <div>
                <h3 className="font-poppins font-semibold text-[22px] text-black leading-[1.4] mb-1">
                  Modern Downtown Condo
                </h3>
                <div className="flex items-center text-sm text-[#777] font-poppins mb-4">
                  <MapPin size={16} className="text-[#777] mr-1" />
                  Downtown District
                </div>
                <div className="text-lg font-semibold font-poppins text-[#363636] mb-4 inline-block">
                  $750,000
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-[#5E5E5E] font-poppins font-semibold">
                  <span className="flex items-center gap-1">
                    <BedDouble size={20} className="text-[#5E5E5E]" />
                    2
                  </span>
                  <span className="flex items-center gap-1">

                    <Bath size={20} className="text-[#5E5E5E]" />
                    2
                  </span>
                  <span className="flex items-center gap-1">

                    <MdAspectRatio size={20} className="text-[#5E5E5E]" />
                    1,200 sq ft
                  </span>
                </div>
              </div>
              <button className="mt-6 w-full h-10 rounded-lg border border-[#0A4076] bg-white text-[#0A4076] font-poppins font-semibold text-base transition hover:bg-[#f1f7fa]">
                View Details
              </button>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col justify-between bg-white border border-[#0A4076] rounded-2xl p-5 w-full shadow-sm transition hover:shadow-md">
              <div>
                <h3 className="font-poppins font-semibold text-[22px] text-black leading-[1.4] mb-1">
                  Suburban Family Home
                </h3>
                <div className="flex items-center text-sm text-[#777] font-poppins mb-4">
                  <MapPin size={16} className="text-[#777] mr-1" />
                  Maple Heights
                </div>
                <div className="text-lg font-semibold font-poppins text-[#363636] mb-4 inline-block">
                  $950,000
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-[#5E5E5E] font-poppins font-semibold">
                  <span className="flex items-center gap-1">
                    <BedDouble size={20} className="text-[#5E5E5E]" />
                    4
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={20} className="text-[#5E5E5E]" />
                    3
                  </span>
                  <span className="flex items-center gap-1">
                    <MdAspectRatio size={20} className="text-[#5E5E5E]" />
                    2,500 sq ft
                  </span>
                </div>
              </div>
              <button className="mt-6 w-full h-10 rounded-lg border border-[#0A4076] bg-white text-[#0A4076] font-poppins font-semibold text-base transition hover:bg-[#f1f7fa]">
                View Details
              </button>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col justify-between bg-white border border-[#0A4076] rounded-2xl p-5 w-full shadow-sm transition hover:shadow-md">
              <div>
                <h3 className="font-poppins font-semibold text-[22px] text-black leading-[1.4] mb-1">
                  Luxury Waterfront Villa
                </h3>
                <div className="flex items-center text-sm text-[#777] font-poppins mb-4">
                  <MapPin size={16} className="text-[#777] mr-1" />
                  Waterfront District
                </div>
                <div className="text-lg font-semibold font-poppins text-[#363636] mb-4 inline-block">
                  $1,850,000
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-[#5E5E5E] font-poppins font-semibold">
                  <span className="flex items-center gap-1">
                    <BedDouble size={20} className="text-[#5E5E5E]" />
                    5
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={20} className="text-[#5E5E5E]" />
                    4
                  </span>
                  <span className="flex items-center gap-1">
                    <MdAspectRatio size={20} className="text-[#5E5E5E]" />
                    4,200 sq ft
                  </span>
                </div>
              </div>
              <button className="mt-6 w-full h-10 rounded-lg border border-[#0A4076] bg-white text-[#0A4076] font-poppins font-semibold text-base transition hover:bg-[#f1f7fa]">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-16 px-10 overflow-hidden">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          {/* Header */}
          <h2
            className="font-poppins font-medium text-black text-center"
            style={{ fontSize: 42, lineHeight: "68px", maxWidth: 251 }}
          >
            Our Services
          </h2>
          <p
            className="font-poppins text-black text-center mt-2"
            style={{ fontSize: 16, lineHeight: "100%", maxWidth: 412 }}
          >
            Comprehensive real estate solutions for every need
          </p>

          {/* Cards */}
          <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Property Buying",
                description:
                  "Expert guidance through every step of the home buying process, from search to closing.",
                features: [
                  "Market Analysis",
                  "Property Tours",
                  "Negotiation Support",
                  "Closing Assistance",
                ],
              },
              {
                title: "Property Selling",
                description:
                  "Maximize your property value with comprehensive selling and marketing strategies.",
                features: [
                  "Market Valuation",
                  "Professional Photography",
                  "Online Marketing",
                  "Open Houses",
                ],
              },
              {
                title: "Investment Properties",
                description:
                  "Discover profitable real estate investment opportunities with expert market insights.",
                features: [
                  "ROI Analysis",
                  "Market Research",
                  "Portfolio Building",
                  "Property Management",
                ],
              },
            ].map(({ title, description, features }) => (
              <div
                key={title}
                className="flex flex-col justify-between bg-white border border-[#0A4076] rounded-lg p-5 shadow w-full h-full"
                style={{ maxWidth: "370.67px" }}
              >
                <div>
                  <h3
                    className="font-poppins font-semibold text-black"
                    style={{ fontSize: 24, lineHeight: "36px", marginBottom: 6 }}
                  >
                    {title}
                  </h3>
                  <p
                    className="font-poppins text-[#777777]"
                    style={{ fontSize: 14, lineHeight: "21px", marginBottom: 12 }}
                  >
                    {description}
                  </p>

                  <ul className="space-y-2 font-poppins text-[#0A4076] text-sm">
                    {features.map((feature) => (
                      <li className="flex items-center gap-2" key={feature}>
                        <div className="min-w-[26px] h-6 flex items-center justify-center bg-[#0A4076] rounded-full">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="mt-4 border border-[#0A4076] text-[#0A4076] font-semibold font-poppins rounded-lg bg-white py-3 w-full text-base transition hover:bg-gray-100"
                  style={{ borderRadius: 12 }}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* CTA Text */}
          <div className="mt-20 text-center max-w-[661px] px-4">
            <h3
              className="font-poppins text-black"
              style={{
                fontSize: 48,
                lineHeight: "68px",
                fontWeight: 500,
                marginBottom: 12,
              }}
            >
              Ready to Make Your Move?
            </h3>
            <p
              className="font-poppins text-black mx-auto"
              style={{
                fontSize: 16,
                fontWeight: 400,
                maxWidth: 527,
              }}
            >
              Whether you're buying or selling, our expert team is here to guide
              you through every step.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button
              className="bg-gradient-to-r from-[#0D4883] to-[#1B6EC1] text-white font-semibold font-poppins rounded-lg px-6 py-3 w-fit text-base transition hover:brightness-90"
              style={{ borderRadius: 12 }}
            >
              Schedule Consultation
            </button>
            <button
              className="border border-[#0A4076] text-[#0A4076] font-semibold font-poppins rounded-lg px-6 py-3 w-fit text-base transition hover:bg-gray-100"
              style={{ borderRadius: 12 }}
            >
              Get Free Valuation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BuySell;
