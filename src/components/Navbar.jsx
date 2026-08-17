"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ onOpenQuote }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products & Services", href: "/products" },
    { name: "About Us", href: "/#about" },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f7faf8]/95 backdrop-blur-md shadow-md border-b border-[#c1c9bf]"
          : "bg-[#f7faf8] border-b border-[#c1c9bf]/60 shadow-sm"
      }`}
    >
      <div
        className={`max-w-[1280px] mx-auto px-5 md:px-12 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <img
            src="/images/gamini-logo.jpeg"
            alt="Gamini Engineering Logo"
            className="h-10 w-auto rounded object-contain border border-[#c1c9bf]/30"
          />
          <span className="font-['Manrope'] text-lg md:text-2xl font-extrabold text-[#003317] tracking-tight">
            Gamini Engineering
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`font-['Inter'] text-sm md:text-base transition-colors duration-200 py-1 ${
                  isActive
                    ? "text-[#1b6c3b] font-bold border-b-2 border-[#1b6c3b]"
                    : "text-[#414941] hover:text-[#1b6c3b] font-medium"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenQuote}
            className="bg-[#1b6c3b] text-white px-6 py-2.5 rounded font-semibold text-sm hover:bg-[#174a2a] transition-all shadow-sm hover:shadow transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">request_quote</span>
            Request Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#181c1b] p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f7faf8] border-b border-[#c1c9bf] px-6 py-6 space-y-4 shadow-xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-['Inter'] text-lg py-2 border-b border-[#ecefec] ${
                  isActive
                    ? "text-[#1b6c3b] font-bold"
                    : "text-[#181c1b] hover:text-[#1b6c3b]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full bg-[#1b6c3b] text-white py-3 rounded font-bold text-center block shadow"
            >
              Request Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
