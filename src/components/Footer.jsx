"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#171b1a] text-white py-16 border-t border-[#414941] relative z-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand & Mission Statement */}
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-4 hover:opacity-90 transition-opacity">
            <img
              src="/images/gamini-logo.jpeg"
              alt="Gamini Engineering Logo"
              className="h-12 w-auto rounded object-contain bg-white p-1 border border-[#414941]"
            />
            <span className="font-['Manrope'] text-2xl font-extrabold text-white tracking-tight">
              Gamini Engineering
            </span>
          </Link>
          <p className="font-['Inter'] text-[#eef1ef] opacity-80 max-w-md text-sm mb-6 leading-relaxed">
            Sri Lanka&apos;s No. 1 Plantation Engineering & Industrial Machinery Manufacturer Since 1977. High-precision heavy machinery, tea leaf rollers, crepe rubber mills, and complete turnkey automation systems.
          </p>

          {/* Contact Details Card with Email & WhatsApp */}
          <div className="bg-[#0d1a12] p-5 rounded-xl border border-[#1b6c3b]/50 space-y-3 max-w-md">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#a4f5b6] text-xl">mail</span>
              <div>
                <span className="text-[11px] font-['Inter'] text-[#a4f5b6] uppercase font-bold tracking-wider block">Official Email</span>
                <a
                  href="mailto:info@gaminiengineering.com"
                  className="font-['Inter'] text-sm font-semibold text-white hover:text-[#a4f5b6] transition-colors underline decoration-[#1b6c3b] underline-offset-4"
                >
                  info@gaminiengineering.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 border-t border-[#1b6c3b]/30">
              <span className="material-symbols-outlined text-[#a4f5b6] text-xl">call</span>
              <div>
                <span className="text-[11px] font-['Inter'] text-[#a4f5b6] uppercase font-bold tracking-wider block">Office & WhatsApp</span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-['Inter'] text-sm text-[#eef1ef]">
                  <a href="tel:+94112578316" className="hover:text-[#a4f5b6] transition-colors">
                    (+94) 11 2578316
                  </a>
                  <span>•</span>
                  <a
                    href="https://wa.me/94777688655"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#a4f5b6] transition-colors font-bold text-[#25D366] inline-flex items-center gap-1"
                  >
                    (+94) 77 768 8655
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="font-['Inter'] text-xs text-[#a4f5b6] mt-6">
            © {new Date().getFullYear()} Gamini Engineering Works (Pvt) Ltd. Precision Engineering Since 1977.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-['Manrope'] font-bold text-[#a4f5b6] mb-4 text-base tracking-wide uppercase">Quick Links</h4>
          <ul className="space-y-3 text-sm font-['Inter']">
            <li>
              <Link href="/" className="text-[#eef1ef] opacity-80 hover:opacity-100 hover:text-[#a4f5b6] transition-all flex items-center gap-1.5">
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                Home Overview
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-[#eef1ef] opacity-80 hover:opacity-100 hover:text-[#a4f5b6] transition-all flex items-center gap-1.5">
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                Products & Services
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-[#eef1ef] opacity-80 hover:opacity-100 hover:text-[#a4f5b6] transition-all flex items-center gap-1.5">
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-[#eef1ef] opacity-80 hover:opacity-100 hover:text-[#a4f5b6] transition-all flex items-center gap-1.5">
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Corporate Details */}
        <div>
          <h4 className="font-['Manrope'] font-bold text-[#a4f5b6] mb-4 text-base tracking-wide uppercase">Corporate</h4>
          <ul className="space-y-3 text-sm font-['Inter'] text-[#eef1ef] opacity-80">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#a4f5b6] text-base">verified</span>
              ISO 9001:2015 Certified
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#a4f5b6] text-base">precision_manufacturing</span>
              Heavy Industrial Foundry
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#a4f5b6] text-base">location_on</span>
              Colombo, Sri Lanka
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#a4f5b6] text-base">public</span>
              Global Export Capabilities
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
