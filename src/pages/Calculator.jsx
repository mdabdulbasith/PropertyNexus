import React, { useState } from 'react';
import Footer from '../components/Footer'
const Calculator = () => {
    const [homePrice, setHomePrice] = useState(100000);
    const [downPayment, setDownPayment] = useState(20000);
    const [interestRate, setInterestRate] = useState(6.5);
    const [loanTerm, setLoanTerm] = useState(30);
    const [propertyTax, setPropertyTax] = useState(5000);
    const [insurance, setInsurance] = useState(1200);
    const [pmi, setPmi] = useState(200);

    const loanAmount = homePrice - downPayment;
    const monthlyInterest = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const principalAndInterest = loanAmount > 0
        ? (loanAmount * monthlyInterest) /
        (1 - Math.pow(1 + monthlyInterest, -numberOfPayments))
        : 0;

    const monthlyPropertyTax = propertyTax / 12;
    const monthlyInsurance = insurance / 12;

    const totalMonthlyPayment = (
        principalAndInterest +
        monthlyPropertyTax +
        monthlyInsurance +
        pmi
    ).toFixed(2);
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
                        Mortgage Calculator
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
                        Calculate your monthly mortgage payments and explore different loan scenarios to find the perfect fit for your budget.
                    </p>
                </div>
            </div>
            <div className="mt-8 px-4 lg:px-20 mb-10 flex flex-col lg:flex-row gap-8">
                {/* Left - Loan Details */}
                <div className="w-full lg:w-1/2 p-6 bg-white rounded-xl border border-[#2B8CED]">
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800 font-poppins">Loan Details</h3>
                    <p className="text-sm text-gray-500 mb-6">Adjust the values below to calculate your monthly payment</p>


                    {/* Home Price */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Home Price ($)</label>
                        <input
                            type="number"
                            value={homePrice}
                            onChange={(e) => setHomePrice(Number(e.target.value))}
                            className="w-full border rounded px-3 py-2 mb-2"
                        />
                        <input
                            type="range"
                            min={100000}
                            max={2000000}
                            step={10000}
                            value={homePrice}
                            onChange={(e) => setHomePrice(Number(e.target.value))}
                            className="w-full"
                            style={{
                                WebkitAppearance: 'none',
                                height: '6px',
                                borderRadius: '5px',
                                background: `linear-gradient(to right, #0A4076 ${(homePrice - 100000) / 1900000 * 100}%, #EEBD2B ${(homePrice - 100000) / 1900000 * 100}%)`,
                                outline: 'none',
                                cursor: 'pointer',
                            }}
                        />
                        <div className="text-xs text-gray-500 flex justify-between mt-1">
                            <span>$100K</span>
                            <span>$2M</span>
                        </div>
                    </div>

                    {/* Down Payment */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Down Payment ($)</label>
                        <input
                            type="number"
                            value={downPayment}
                            onChange={(e) => setDownPayment(Number(e.target.value))}
                            className="w-full border rounded px-3 py-2 mb-2"
                        />
                        <input
                            type="range"
                            min={10000}
                            max={2000000}
                            step={10000}
                            value={downPayment}
                            onChange={(e) => setDownPayment(Number(e.target.value))}
                            className="w-full"
                            style={{
                                WebkitAppearance: 'none',
                                height: '6px',
                                borderRadius: '5px',
                                background: `linear-gradient(to right, #0A4076 ${(downPayment - 10000) / 1990000 * 100}%, #EEBD2B ${(downPayment - 10000) / 1990000 * 100}%)`,
                                outline: 'none',
                                cursor: 'pointer',
                            }}
                        />
                        <div className="text-xs text-gray-500 flex justify-between mt-1">
                            <span>$100K</span>
                            <span>$2M</span>
                        </div>
                    </div>

                    {/* Interest Rate */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
                        <input
                            type="number"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full border rounded px-3 py-2 mb-2"
                        />
                        <input
                            type="range"
                            min={1}
                            max={15}
                            step={0.1}
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full"
                            style={{
                                WebkitAppearance: 'none',
                                height: '6px',
                                borderRadius: '5px',
                                background: `linear-gradient(to right, #0A4076 ${(interestRate - 1) / 14 * 100}%, #EEBD2B ${(interestRate - 1) / 14 * 100}%)`,
                                outline: 'none',
                                cursor: 'pointer',
                            }}
                        />
                        <div className="text-xs text-gray-500 flex justify-between mt-1">
                            <span>1%</span>
                            <span>15%</span>
                        </div>
                    </div>

                    {/* Loan Term */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Loan Term (Years)</label>
                        <input
                            type="number"
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(Number(e.target.value))}
                            className="w-full border rounded px-3 py-2 mb-2"
                        />
                        <input
                            type="range"
                            min={5}
                            max={40}
                            step={1}
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(Number(e.target.value))}
                            className="w-full"
                            style={{
                                WebkitAppearance: 'none',
                                height: '6px',
                                borderRadius: '5px',
                                background: `linear-gradient(to right, #0A4076 ${(loanTerm - 5) / 35 * 100}%, #EEBD2B ${(loanTerm - 5) / 35 * 100}%)`,
                                outline: 'none',
                                cursor: 'pointer',
                            }}
                        />
                        <div className="text-xs text-gray-500 flex justify-between mt-1">
                            <span>5 Yrs</span>
                            <span>40 Yrs</span>
                        </div>
                    </div>

                    {/* Property Tax, Insurance, PMI */}
                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Property Tax ($)</label>
                            <input
                                type="number"
                                value={propertyTax}
                                onChange={(e) => setPropertyTax(Number(e.target.value))}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Insurance ($)</label>
                            <input
                                type="number"
                                value={insurance}
                                onChange={(e) => setInsurance(Number(e.target.value))}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">PMI ($)</label>
                            <input
                                type="number"
                                value={pmi}
                                onChange={(e) => setPMI(Number(e.target.value))}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                    </div>
                </div>
                {/* Right - Monthly Breakdown */}
                <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#0D4883] to-[#1B6EC1] text-white rounded-xl p-6 shadow-xl flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Monthly Payment Breakdown</h2>
                        <p className="text-sm text-white/80 mb-6">Your estimated monthly costs</p>

                        <div className="text-4xl font-bold mb-4">${Number(totalMonthlyPayment).toLocaleString()}</div>
                        <div className="text-base font-medium text-white mb-6">Total Monthly Payment</div>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span>Principal & Interest:</span>
                                <span>${principalAndInterest.toFixed(0)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Property Tax:</span>
                                <span>${monthlyPropertyTax.toFixed(0)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Insurance:</span>
                                <span>${monthlyInsurance.toFixed(0)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>PMI:</span>
                                <span>${pmi.toFixed(0)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center py-16 px-4">
                <h2 className="text-[48px] font-medium text-black mb-4">Ready to Apply?</h2>
                <p className="text-[16px] text-black max-w-xl mx-auto mb-8">
                    Take the next step and get pre-approved for your mortgage today.
                </p>

                <div className="flex justify-center space-x-4">
                    <button className="px-6 py-3 text-white text-[16px] font-bold rounded-xl hover:bg-[#08325d] transition btn-gradient">
                        Get Pre-Approved
                    </button>
                    <button className="px-6 py-3 bg-white text-[16px] border border-[#0A4076] font-bold text-[#0A4076] rounded-xl transition">
                        Talk to Expert
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Calculator
