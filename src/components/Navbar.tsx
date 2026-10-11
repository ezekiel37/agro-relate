// Navbar Component
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useAuth } from "@/context/AuthContext";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { status } = useAuth();
  const cta =
    status === "authenticated"
      ? { to: "/dashboard", label: "Dashboard" }
      : { to: "/welcome", label: "Get Started" };
  const navItems = [
    { label: "About", to: "/about" },
    { label: "How it Works", to: "/how-it-works" },
    { label: "Farmers", to: "/farmers" },
    { label: "Investors", to: "/investors" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link
            to={cta.to}
            className="rounded-full bg-[#1E3C14] px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#162B0E] transition-colors"
          >
            {cta.label}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2">
          <div className="flex flex-col gap-3 text-sm text-gray-700">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={cta.to}
              className="mt-2 inline-flex w-fit rounded-full bg-[#1E3C14] px-6 py-2 text-sm font-semibold text-white shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              {cta.label}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
