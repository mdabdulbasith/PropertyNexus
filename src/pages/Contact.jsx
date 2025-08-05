import React from "react";
import { Phone, Mail, MapPin, Clock, User } from "lucide-react";
import Footer from "../components/Footer";

const ContactPage = () => {
  const teamMembers = [
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
  ];

  const contactMethods = [
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
  ];

  return (
    <>
      <div className="w-full">
        {/* Hero */}
        <div
          className="flex items-center justify-center text-center px-4 py-12 mt-20"
          style={{
            background:
              "linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)",
          }}
        >
          <div className="max-w-screen-md">
            <h1 className="text-white font-poppins font-semibold text-3xl md:text-5xl leading-tight mb-4">
              Contact Us
            </h1>
            <p className="text-white text-sm md:text-base opacity-90 font-poppins">
              Get in touch with our expert team for personalized real estate and mortgage guidance.
            </p>
          </div>
        </div>

        {/* Contact Form & Info */}
        <div className="flex flex-col lg:flex-row gap-12 py-12 px-4 max-w-screen-xl md:mx-10">
          {/* Form */}
          <div className="flex-1 w-full">
            <h2 className="font-poppins font-medium text-2xl md:text-4xl text-black mb-2">
              Send us a Message
            </h2>
            <p className="text-base text-black mb-6 max-w-md">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form className="bg-white border border-[#2B8CED] rounded-lg p-4 md:p-6 flex flex-col gap-4 w-full">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="text-black text-sm font-poppins mb-1 block">Full Name *</label>
                  <input type="text" required placeholder="Enter your Full Name" className="w-full border border-[#B3B3B3] rounded-md px-3 py-2 font-poppins" />
                </div>
                <div className="w-full">
                  <label className="text-black text-sm font-poppins mb-1 block">Email Address *</label>
                  <input type="email" required placeholder="Enter your Email" className="w-full border border-[#B3B3B3] rounded-md px-3 py-2 font-poppins" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="text-black text-sm font-poppins mb-1 block">Phone Number</label>
                  <input type="tel" placeholder="(555) 123-4567" className="w-full border border-[#B3B3B3] rounded-md px-3 py-2 font-poppins" />
                </div>
                <div className="w-full">
                  <label className="text-black text-sm font-poppins mb-1 block">Preferred Contact Method</label>
                  <select className="w-full border border-[#B3B3B3] rounded-md px-3 py-2 font-poppins">
                    <option value="" disabled selected>Select Contact Method</option>
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-black text-sm font-poppins mb-1 block">Subject *</label>
                <select required className="w-full border border-[#B3B3B3] rounded-md px-3 py-2 font-poppins">
                  <option value="" disabled selected>Select a Subject</option>
                  <option value="buying">Buying</option>
                  <option value="selling">Selling</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-black text-sm font-poppins mb-1 block">Message *</label>
                <textarea required placeholder="Tell us how we can help you..." className="w-full border border-[#B3B3B3] rounded-md px-3 py-2 font-poppins min-h-[100px]" />
              </div>

              <button
                type="submit"
                className="w-full text-white font-poppins font-medium text-base rounded-md py-2 mt-2 hover:brightness-110"
                style={{
                  background: "linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)",
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 w-full">
            <h2 className="font-poppins font-medium text-2xl md:text-4xl text-black mb-2">
              Get in Touch
            </h2>
            <p className="text-base text-black mb-6 max-w-md">
              Ready to start your real estate journey? Contact our expert team today for personalized guidance and support.
            </p>

            <div className="flex flex-col gap-4">
              {contactMethods.map(({ Icon, label, value, note }, i) => (
                <div key={i} className="flex items-start gap-4 border border-[#2B8CED] rounded-lg p-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full shrink-0" style={{ background: "linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)" }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-poppins text-[#2B8CED] mb-1">{label}</p>
                    <p className="text-base md:text-lg font-poppins font-semibold text-[#404040]">{value}</p>
                    <p className="text-xs font-poppins text-[#5C5C5C] mt-1">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ready to Apply Section */}
        <div className="w-full px-4 py-14 bg-gradient-to-tr from-[#0D4883] via-[#0D4883] to-[#1B6EC1] text-white text-center">
          <h2 className="font-poppins font-semibold text-2xl md:text-4xl mb-2">Ready to Apply?</h2>
          <p className="text-sm md:text-base mb-6 max-w-screen-md mx-auto">
            Learn more about how our innovative projects can benefit your business or explore partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-[480px] mx-auto">
            <button className="w-full p-2 sm:w-auto min-w-[180px] h-12 rounded-lg bg-[#EEBD2B] font-poppins font-semibold text-[#0D4883] hover:bg-yellow-400">
              Schedule a Consultation
            </button>
            <button className="w-full sm:w-auto min-w-[150px] h-12 rounded-lg border border-white font-poppins font-bold text-white hover:bg-white hover:text-[#0D4883] transition">
              Start a Live Chat
            </button>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="w-full py-14 bg-white text-center">
          <h2 className="font-poppins font-medium text-2xl md:text-4xl text-black">Meet Our Team</h2>
          <p className="text-base text-black mt-2 mb-8">Experienced professionals ready to help you succeed</p>
          <div className="flex flex-wrap justify-center gap-6 px-4">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white rounded-[16px] border border-[#2B8CED] p-5 w-full sm:w-[360px] md:w-[320px] shadow-sm">
                <div className="w-12 h-12 bg-[#0A4076] flex items-center justify-center rounded-full">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-poppins font-semibold text-lg text-[#0A4076]">{member.name}</p>
                  <p className="font-poppins text-xs text-[#5C5C5C] mt-1 mb-2">{member.title}</p>
                  <div className="flex items-center text-sm text-[#5C5C5C]">
                    <Phone className="w-4 h-4 mr-1 text-black" strokeWidth={2.5} />
                    {member.phone}
                  </div>
                  <div className="flex items-center text-sm text-[#5C5C5C] mt-1">
                    <Mail className="w-4 h-4 mr-1 text-black" strokeWidth={2.5} />
                    {member.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full px-4 py-14 bg-gradient-to-tr from-[#0D4883] via-[#0D4883] to-[#1B6EC1] text-white text-center">
          <MapPin className="w-12 h-12 text-white mb-4 mx-auto" strokeWidth={2.5} />
          <h2 className="font-poppins font-semibold text-2xl md:text-4xl mb-1">123 Business Avenue</h2>
          <p className="text-base mb-6">City, State 12345</p>
          <button className="w-[147px] h-12 bg-[#EEBD2B] rounded-[12px] font-bold text-base text-[#0D4883] hover:bg-yellow-400 transition">
            Open in Maps
          </button>
        </div>

        {/* CTA Section Bottom */}
        <div className="w-full px-4 py-14 bg-white text-center">
          <div className="max-w-screen-md mx-auto">
            <h2 className="font-poppins font-medium text-2xl md:text-4xl text-black mb-2">Ready to Apply?</h2>
            <p className="text-sm md:text-base text-black mb-6">
              Learn more about how our innovative projects can benefit your business or explore partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="w-full sm:w-auto min-w-[180px] h-12 rounded-lg bg-gradient-to-r from-[#0D4883] to-[#1B6EC1] text-white font-poppins font-semibold hover:brightness-110">
                Get Pre-Approved
              </button>
              <button className="w-full sm:w-auto min-w-[150px] h-12 rounded-lg border border-[#0A4076] font-poppins font-bold text-[#0A4076] hover:bg-[#0A4076] hover:text-white transition">
                Talk to Expert
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
