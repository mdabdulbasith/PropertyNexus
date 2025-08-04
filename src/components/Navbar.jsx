import { useState } from 'react';
import {
  Menu, X, Home, Building2, Banknote, Calculator, ClipboardList,
  FolderKanban, Phone, ArrowRight
} from 'lucide-react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: <Home size={16} /> },
    { name: 'Buy & Sell', href: '/buy-sell', icon: <Building2 size={16} /> },
    { name: 'Loans', href: '/loans', icon: <Banknote size={16} /> },
    { name: 'Calculator', href: '/calculator', icon: <Calculator size={16} /> },
    { name: 'Apply', href: '/apply', icon: <ClipboardList size={16} /> },
    { name: 'Projects', href: '/projects', icon: <FolderKanban size={16} /> },
    { name: 'Contact', href: '/contact', icon: <Phone size={16} /> },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="h-10 w-10 object-contain" />
            <h3 className="text-[#0A4076] font-semibold font-poppins text-xl">
              PropertyNexus
            </h3>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-1 text-[#7D7D7D] hover:text-blue-600 transition font-medium text-sm"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#get-started"
              className="text-white px-4 py-2 rounded-xl text-sm font-semibold hover:opacity-90 flex items-center gap-1 transition btn-gradient"
            >
              Get Started <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white px-4 py-4 space-y-4 shadow-lg transition-all">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium text-base transition"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
          <a
            href="#get-started"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#0A4076] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#1458a4] transition w-full"
          >
            Get Started <ArrowRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
