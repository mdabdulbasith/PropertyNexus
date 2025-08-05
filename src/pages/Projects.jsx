import React, { useEffect } from "react";
import Footer from "../components/Footer";
import {
    Users,
    TrendingUp,
    Bot,
    ShoppingCart,
} from "lucide-react";

const impactMetrics = [
    { icon: <Users size={32} color="black" />, value: "100,000+", label: "Active Users" },
    { icon: <TrendingUp size={32} color="black" />, value: "$3.2B+", label: "Assets Managed" },
    { icon: <Bot size={32} color="black" />, value: "2M+", label: "AI Interactions" },
    { icon: <ShoppingCart size={32} color="black" />, value: "25,000+", label: "Transactions" },
];

const projectData = [
    {
        title: "Real Estate Loan–Mortgage Platform",
        status: "Production",
        description:
            "Comprehensive digital platform for mortgage lending with automated underwriting, document verification, and real-time loan tracking. Features include AI-powered risk assessment and seamless integration with credit bureaus.",
        features: [
            "Automated loan underwriting",
            "Real-time credit monitoring",
            "Document digitization",
        ],
        technologies: ["React", "NodeJS", "MongoDB"],
        metrics: [
            { value: "50,000+", label: "Users" },
            { value: "80% Faster", label: "Processing Time" },
            { value: "$2.5B+", label: "Loans" },
        ],
        statusColor: "#FFB800",
        buttons: ["More Details", "View Live Demo"],
    },
    {
        title: "Digital Marketing Co-registration Engine",
        status: "Active",
        description:
            "Advanced lead generation and co-registration platform that matches potential customers with relevant financial products. Utilizes machine learning for optimal lead scoring and qualification.",
        features: [
            "Real-time lead matching",
            "Multi-channel integration",
            "Advanced analytics",
        ],
        technologies: ["Python", "React", "Redis"],
        metrics: [
            { value: "1M+ monthly", label: "Leads" },
            { value: "200+ integrated", label: "Partners" },
            { value: "35% higher", label: "Conversion" },
        ],
        statusColor: "#80FF66",
        buttons: ["More Details", "View Live Demo"],
    },
    {
        title: "Wealth Management & Finance Platform",
        status: "Production",
        description:
            "Sophisticated wealth management system offering portfolio optimization, risk analysis, and automated investment strategies. Includes real-time market data integration and personalized financial planning tools.",
        features: [
            "Automated loan underwriting",
            "Real-time credit monitoring",
            "Document digitization",
        ],
        technologies: ["Python", "React", "Redis"],
        metrics: [
            { value: "50,000+", label: "Users" },
            { value: "80% Faster", label: "Processing Time" },
            { value: "$2.5B+", label: "Loans" },
        ],
        statusColor: "#FFB800",
        buttons: ["More Details", "View Live Demo"],
    },
    {
        title: "E-commerce Real Estate Marketplace",
        status: "Production",
        description:
            "Full-featured e-commerce platform for buying and selling real estate properties, featuring virtual tours, mortgage calculators, and integrated financing options. Supports both residential and commercial properties.",
        features: [
            "Automated loan underwriting",
            "Real-time credit monitoring",
            "Document digitization",
        ],
        technologies: ["React", "NodeJS", "Redis"],
        metrics: [
            { value: "50,000+", label: "Users" },
            { value: "80% Faster", label: "Processing Time" },
            { value: "$2.5B+", label: "Loans" },
        ],
        statusColor: "#FFB800",
        buttons: ["More Details", "View Live Demo"],
    },
    {
        title: "AI Financial Chatbot",
        status: "Production",
        description:
            "Intelligent conversational AI that provides personalized financial advice, loan guidance, and real estate market insights. Uses natural language processing to understand complex financial queries.",
        features: [
            "Automated loan underwriting",
            "Real-time credit monitoring",
            "Document digitization",
        ],
        technologies: ["Python", "React", "Redis"],
        metrics: [
            { value: "50,000+", label: "Users" },
            { value: "80% Faster", label: "Processing Time" },
            { value: "$2.5B+", label: "Loans" },
        ],
        statusColor: "#FFB800",
        buttons: ["More Details", "View Live Demo"],
    },
    {
        title: "AI Financial Advisor",
        status: "Development",
        description:
            "Intelligent conversational AI that provides personalized financial advice, loan guidance, and real estate market insights. Uses natural language processing to understand complex financial queries.",
        features: [
            "Automated loan underwriting",
            "Real-time credit monitoring",
            "Document digitization",
        ],
        technologies: ["Python", "React", "Redis"],
        metrics: [
            { value: "50,000+", label: "Users" },
            { value: "80% Faster", label: "Processing Time" },
            { value: "$2.5B+", label: "Loans" },
        ],
        statusColor: "#B0BEC5",
        buttons: ["More Details", "View Live Demo"],
    },
];


const Projects = () => {
    // ✅ Scroll to top on mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <div className="w-full mt-20">
                {/* Hero */}
                <section
                    className="w-full flex items-center justify-center"
                    style={{
                        background: "linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)",
                        height: 304,
                        minHeight: 220,
                    }}
                >
                    <div className="text-center px-4">
                        <h1 className="text-white font-poppins font-semibold text-[56px] leading-[84px] max-w-[346px] mx-auto">
                            Our Projects
                        </h1>
                        <p className="mt-4 text-white opacity-90 font-poppins text-[16px] max-w-[533px] mx-auto">
                            Explore our comprehensive portfolio of innovative solutions in real estate, finance, and technology.
                        </p>
                    </div>
                </section>

                {/* Portfolio */}
                <section className="w-full px-5 py-16 bg-white flex flex-col items-center">
                    <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
                        <h2 className="text-black font-poppins font-medium text-[40px] leading-[68px] text-center max-w-[315px] mx-auto">
                            Project Portfolio
                        </h2>
                        <p className="text-black font-poppins text-[16px] mt-1 mb-8 text-center max-w-[395px] mx-auto">
                            Cutting-edge solutions across multiple industries
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1440px]">
                            {projectData.map((p) => (
                                <div
                                    key={p.title}
                                    className="border border-[#0A4076] rounded-[16px] p-5 shadow hover:shadow-lg flex flex-col"
                                    style={{ height: 431, gap: 20 }}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[#0A4076] font-semibold text-lg">{p.title}</span>
                                        <span
                                            className="text-xs font-semibold border px-3 py-1 rounded-full"
                                            style={{
                                                background: p.statusColor,
                                                borderColor: p.statusColor,
                                                color: p.status === "Active" ? "#185A00" : "#0A4076",
                                            }}
                                        >
                                            {p.status}
                                        </span>
                                    </div>
                                    <p className="text-[#777777] text-[14px]">{p.description}</p>
                                    <div className="flex gap-7">
                                        <div>
                                            <div className="text-[#0A4076] font-semibold mb-1">Key Features</div>
                                            <ul className="list-disc pl-5 text-black text-[14px]">
                                                {p.features.map((f, i) => (
                                                    <li key={i}>{f}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <div className="text-[#0A4076] font-semibold mb-1">Technologies</div>
                                            <ul className="list-disc pl-5 text-[#454545] text-[14px] marker:text-[#0A4076]">
                                                {p.technologies.map((t, i) => (
                                                    <li key={i}>{t}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mt-auto mb-5">
                                        {p.metrics.map((met, i) => (
                                            <div key={i} className="flex flex-col items-center">
                                                <span className="text-[#2A2A2A] font-bold text-[18px]">{met.value}</span>
                                                <span className="text-[#777777] text-sm">{met.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-end gap-2 mt-auto">
                                        {p.buttons.map((b, i) => (
                                            <button
                                                key={i}
                                                className={`px-5 py-2 text-[15px] font-semibold rounded-md border ${i === 1
                                                    ? "text-white border-none"
                                                    : "border-[#0A4076] text-[#0A4076] bg-white hover:bg-[#f5fafd]"
                                                    }`}
                                                style={
                                                    i === 1
                                                        ? {
                                                            background: "linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)",
                                                        }
                                                        : {}
                                                }
                                            >
                                                {b}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact */}
                <section
                    className="w-full flex flex-col items-center justify-center"
                    style={{
                        background: "linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)",
                        height: 344,
                        paddingTop: 48,
                        paddingBottom: 48,
                    }}
                >
                    <h2 className="text-white text-[40px] font-poppins font-semibold">Project Impact</h2>
                    <p className="text-white opacity-90 text-[16px] mt-1 text-center max-w-[400px]">
                        Measurable results across our project portfolio
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 px-6 max-w-[1440px]">
                        {impactMetrics.map((m, i) => (
                            <div key={i} className="flex flex-col items-center text-center min-w-[120px]">
                                <div className="mb-3 bg-[#EEBD2B] rounded-full flex items-center justify-center" style={{ width: 56, height: 56 }}>
                                    {m.icon}
                                </div>
                                <div className="text-white text-[24px] font-semibold mb-1">{m.value}</div>
                                <div className="text-[#EBDD8B] text-[16px]">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="w-full min-h-[318px] flex items-center justify-center bg-white">
                    <div className="text-center">
                        <h2 className="text-black text-[48px] font-poppins font-medium leading-[68px] mb-2" style={{ width: 661 }}>
                            Interested in Our Solutions?
                        </h2>
                        <p className="text-black text-base font-normal max-w-[527px] mx-auto mb-8">
                            Learn more about how our innovative projects can benefit your business or explore partnership opportunities.
                        </p>
                        <div className="flex gap-3 flex-col sm:flex-row justify-center">
                            <button className="w-[180px] h-[48px] rounded-[12px] px-5 py-3 bg-[#0A4076] text-white font-poppins font-semibold hover:brightness-110">
                                Schedule Demo
                            </button>
                            <button className="w-[200px] h-[48px] rounded-[12px] px-5 py-3 border border-[#0A4076] bg-white text-[#0A4076] font-poppins font-semibold hover:bg-blue-50">
                                Partnership Inquiry
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Projects;
