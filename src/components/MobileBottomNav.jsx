"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBottomNav({ onOpenQuote }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: "home" },
    { name: "Products", href: "/products", icon: "precision_manufacturing" },
    { name: "Quote", isQuoteButton: true, icon: "request_quote" },
    { name: "About", href: "/#about", icon: "info" },
    { name: "Contact", href: "/#contact", icon: "mail" },
  ];

  return (
    <nav className="lg:hidden fixed bottom-4 left-4 right-4 z-50 bg-[#0a1f12]/95 text-white flex justify-around items-center h-[68px] rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.6)] border border-[#a4f5b6]/30 backdrop-blur-xl px-2">
      {navItems.map((item, idx) => {
        if (item.isQuoteButton) {
          return (
            <button
              key={idx}
              onClick={onOpenQuote}
              className="flex flex-col items-center justify-center w-full h-full text-white relative group"
            >
              <div className="absolute -top-4 bg-[#c8a951] text-[#003317] rounded-full p-3 shadow-xl flex items-center justify-center border-4 border-[#0a1f12] hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">request_quote</span>
              </div>
              <span className="font-['Inter'] text-[10px] font-bold mt-7 tracking-wider text-[#c8a951]">
                Quote
              </span>
            </button>
          );
        }

        const isActive = pathname === item.href;

        return (
          <Link
            key={idx}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              isActive ? "text-[#a4f5b6] font-bold" : "text-white/70 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined text-xl mb-0.5">{item.icon}</span>
            <span className="font-['Inter'] text-[10px] font-medium tracking-wider">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
