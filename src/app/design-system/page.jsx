"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function DesignSystemPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [copiedHex, setCopiedHex] = useState(null);

  const colors = [
    { name: "Primary Dark Green", hex: "#003317", class: "bg-[#003317]", role: "High-level structure, headers & primary brand ground" },
    { name: "Primary Container", hex: "#174a2a", class: "bg-[#174a2a]", role: "Card highlights & secondary structural surfaces" },
    { name: "Engineering Green (Secondary)", hex: "#1b6c3b", class: "bg-[#1b6c3b]", role: "Interactive buttons, active tabs & CTAs" },
    { name: "Secondary Container", hex: "#a4f5b6", class: "bg-[#a4f5b6]", role: "Light accents, badges & status badges" },
    { name: "Accent Green (Tertiary)", hex: "#6faf2d", class: "bg-[#6faf2d]", role: "Success states & high-visibility graphical accents" },
    { name: "Gold Accent (Prestige)", hex: "#c8a951", class: "bg-[#c8a951]", role: "Exclusive heritage badges, 'Since 1977' markers & stat numbers" },
    { name: "Deep Charcoal", hex: "#171b1a", class: "bg-[#171b1a]", role: "Dark full-bleed sections, overlays & high-contrast text" },
    { name: "Surface Light", hex: "#f7faf8", class: "bg-[#f7faf8]", role: "Default page background" },
    { name: "Surface Container Low", hex: "#f1f4f2", class: "bg-[#f1f4f2]", role: "Card backgrounds & inset containers" },
    { name: "Surface Container Lowest", hex: "#ffffff", class: "bg-[#ffffff]", role: "Pure white surface cards" },
    { name: "Outline Variant", hex: "#c1c9bf", class: "bg-[#c1c9bf]", role: "Subtle borders and division lines" },
  ];

  const typography = [
    { token: "display-lg", font: "Manrope", size: "64px / 40px mobile", weight: "800 (ExtraBold)", sample: "Engineering Solutions Built for Performance." },
    { token: "headline-lg", font: "Manrope", size: "40px / 32px mobile", weight: "700 (Bold)", sample: "Specialized Engineering Divisions" },
    { token: "headline-md", font: "Manrope", size: "28px", weight: "600 (SemiBold)", sample: "Heavy Duty Charge Tea Roller" },
    { token: "body-lg", font: "Inter", size: "18px", weight: "400 (Regular)", sample: "Delivering high-precision industrial machinery and complete turnkey solutions." },
    { token: "body-md", font: "Inter", size: "16px", weight: "400 (Regular)", sample: "Robust mills, presses, and extruders engineered to withstand demanding environments." },
    { token: "label-caps", font: "Inter", size: "12px", weight: "700 (Bold Caps)", sample: "ENGINEERING EXCELLENCE SINCE 1977" },
    { token: "stat-number", font: "Manrope", size: "48px", weight: "800 (ExtraBold)", sample: "45+ YEARS" },
  ];

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  return (
    <>
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      <main className="pt-28 pb-20 bg-[#f7faf8] min-h-screen text-[#181c1b]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12">
          {/* Header */}
          <div className="mb-12 pb-6 border-b border-[#c1c9bf]">
            <span className="font-['Inter'] text-xs font-bold text-[#c8a951] uppercase tracking-widest block mb-1">
              Stitch Design System • Asset ID: c75dea4202d3449ba7541d8afc3af7cb
            </span>
            <h1 className="font-['Manrope'] text-3xl md:text-5xl font-extrabold text-[#003317]">
              Industrial Excellence Framework
            </h1>
            <p className="font-['Inter'] text-sm md:text-base text-[#414941] max-w-3xl mt-2 leading-relaxed">
              Design tokens, typography scales, color palettes, spacing rules, and component guidelines for Gamini Engineering Works UI applications.
            </p>
          </div>

          {/* Color Tokens Palette */}
          <section className="mb-16">
            <h2 className="font-['Manrope'] text-2xl font-bold text-[#003317] mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1b6c3b]">palette</span>
              Color Palette & Design Tokens
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {colors.map((c) => (
                <div
                  key={c.name}
                  className="bg-white border border-[#c1c9bf] rounded-lg overflow-hidden technical-shadow-hover flex flex-col justify-between"
                >
                  <div>
                    <div className={`h-28 ${c.class} border-b border-[#c1c9bf]/40 relative`}>
                      <button
                        onClick={() => copyToClipboard(c.hex)}
                        className="absolute bottom-2 right-2 bg-black/40 hover:bg-black/70 text-white text-[10px] px-2 py-1 rounded backdrop-blur font-mono"
                      >
                        {copiedHex === c.hex ? "COPIED!" : "COPY HEX"}
                      </button>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-['Manrope'] font-bold text-sm text-[#003317]">{c.name}</h4>
                        <span className="font-mono text-xs font-semibold text-[#1b6c3b]">{c.hex}</span>
                      </div>
                      <p className="font-['Inter'] text-xs text-[#414941] leading-normal">{c.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typography System */}
          <section className="mb-16">
            <h2 className="font-['Manrope'] text-2xl font-bold text-[#003317] mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1b6c3b]">text_fields</span>
              Typography System
            </h2>

            <div className="bg-white border border-[#c1c9bf] rounded-lg overflow-hidden divide-y divide-[#ecefec]">
              {typography.map((t) => (
                <div key={t.token} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="md:w-1/3">
                    <span className="font-mono text-xs font-bold text-[#1b6c3b] bg-[#a4f5b6]/30 px-2 py-0.5 rounded">
                      {t.token}
                    </span>
                    <div className="text-xs text-[#414941] mt-1">
                      {t.font} • {t.size} • {t.weight}
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p
                      className={`text-[#181c1b] ${t.token === "display-lg"
                          ? "font-['Manrope'] text-2xl md:text-3xl font-extrabold"
                          : t.token === "headline-lg"
                            ? "font-['Manrope'] text-xl md:text-2xl font-bold"
                            : t.token === "headline-md"
                              ? "font-['Manrope'] text-lg font-semibold"
                              : t.token === "body-lg"
                                ? "font-['Inter'] text-base"
                                : t.token === "label-caps"
                                  ? "font-['Inter'] text-xs font-bold text-[#c8a951] tracking-widest uppercase"
                                  : t.token === "stat-number"
                                    ? "font-['Manrope'] text-3xl font-extrabold text-[#c8a951]"
                                    : "font-['Inter'] text-sm"
                        }`}
                    >
                      {t.sample}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Spacing & Components Specs */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-[#c1c9bf] p-6 rounded-lg">
              <h3 className="font-['Manrope'] font-bold text-xl text-[#003317] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1b6c3b]">square_foot</span>
                Layout & Grid Tokens
              </h3>
              <ul className="space-y-3 font-['Inter'] text-sm text-[#414941]">
                <li className="flex justify-between border-b border-[#ecefec] pb-2">
                  <span className="font-semibold text-[#181c1b]">Max Container Width:</span>
                  <span className="font-mono text-[#1b6c3b]">1280px</span>
                </li>
                <li className="flex justify-between border-b border-[#ecefec] pb-2">
                  <span className="font-semibold text-[#181c1b]">Grid Column Count:</span>
                  <span className="font-mono text-[#1b6c3b]">12 Columns (Desktop) / 4 (Mobile)</span>
                </li>
                <li className="flex justify-between border-b border-[#ecefec] pb-2">
                  <span className="font-semibold text-[#181c1b]">Desktop Margin:</span>
                  <span className="font-mono text-[#1b6c3b]">64px</span>
                </li>
                <li className="flex justify-between border-b border-[#ecefec] pb-2">
                  <span className="font-semibold text-[#181c1b]">Section Gap Large:</span>
                  <span className="font-mono text-[#1b6c3b]">120px</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-[#181c1b]">Section Gap Medium:</span>
                  <span className="font-mono text-[#1b6c3b]">80px</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#c1c9bf] p-6 rounded-lg">
              <h3 className="font-['Manrope'] font-bold text-xl text-[#003317] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1b6c3b]">rounded_corner</span>
                Shape & Radius Language
              </h3>
              <ul className="space-y-3 font-['Inter'] text-sm text-[#414941]">
                <li className="flex justify-between border-b border-[#ecefec] pb-2">
                  <span className="font-semibold text-[#181c1b]">Small Base Radius (0.125rem / 2px):</span>
                  <span className="font-mono text-[#1b6c3b]">Checkboxes, badges</span>
                </li>
                <li className="flex justify-between border-b border-[#ecefec] pb-2">
                  <span className="font-semibold text-[#181c1b]">Component Radius (0.25rem / 4px):</span>
                  <span className="font-mono text-[#1b6c3b]">Buttons, input fields, cards</span>
                </li>
                <li className="flex justify-between border-b border-[#ecefec] pb-2">
                  <span className="font-semibold text-[#181c1b]">Large Component (0.5rem / 8px):</span>
                  <span className="font-mono text-[#1b6c3b]">Container cards, modals</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-[#181c1b]">Full Radius (9999px):</span>
                  <span className="font-mono text-[#1b6c3b]">Filter pill buttons</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
