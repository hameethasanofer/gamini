"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const categories = ["All Products", "Tea Machinery", "Automation Systems", "Rubber Machinery", "Conveyors", "Local Agency"];

  const productsList = [
    {
      id: "p1",
      name: "Gamini 47\" Modified Fully Automated Tea Roller",
      category: "Tea Machinery",
      subtitle: "Sri Lanka's No. 1 Tea Roller with Electro-Pneumatic Pressure Application & Auto Door Systems",
      description: "Sri Lanka's flagship tea rolling machinery featuring phosphor bronze crescent battens, Rettie cone, and integrated PLC control for precision leaf cell disruption.",
      specs: [
        "Size: 47\" Heavy Duty",
        "Battens: Full / Half Kithul Crescent (Phosphor Bronze Tips)",
        "Automation: Electro-Pneumatic Pressure & Door System",
        "Cone System: Boltless Door Ring & Rettie Cone"
      ],
      image: "/images/cropped-fully-automated-tea-roller.jpg"
    },
    {
      id: "p2",
      name: "Gamini 47\" Heavy Duty Charge Tea Roller",
      category: "Tea Machinery",
      subtitle: "Award Winning Plantation Engineering - 350 Kgs Withered Leaf Charge Capacity",
      description: "Heavy-duty 47 inch charge roller with Class 01 Timber base, Kitulwood lining, and 20 HP Teco motor for continuous high-yield processing.",
      specs: [
        "Capacity: 350 Kgs per charge",
        "Power: 20 HP 6-Pole 960 RPM Motor (Star Delta Starter)",
        "Jacket: 4' Extended 304 Grade Stainless Steel",
        "Table: Kitulwood Lining & Hardwood Surrounds"
      ],
      image: "/images/cropped-charge-tea-roller.jpg"
    },
    {
      id: "p3",
      name: "Gamini Electro-Mechanical Tea Roller Automation System",
      category: "Automation Systems",
      subtitle: "Programmable Logic Control (PLC) for Pressure Application & Auto Door Operating",
      description: "Retrofit or OEM automation system featuring SEW/Sumitomo geared motor drives, digital pressure indicators, and auto-locking door mechanisms.",
      specs: [
        "Control: User Programmable Logic Control (PLC)",
        "Drive Motors: SEW or Sumitomo Geared Motors",
        "Pressure: Independent Dual Pressure Controls (1 & 2)",
        "Safety: Memory Pause on Power Interruption & Manual Override"
      ],
      image: "/images/cropped-automated-system.jpg"
    },
    {
      id: "p4",
      name: "Gamini Heavy Duty Crepe Rubber Mill",
      category: "Rubber Machinery",
      subtitle: "Chilled Cast Iron Roll Milling with Internal Dual-Spiral Cooling Channels",
      description: "Precision-milled chilled iron rolls (68-72 HRC) for latex mastication and sheet creping with hydraulic emergency safety drop.",
      specs: [
        "Roll Diameter: 660 mm (26 inches)",
        "Roll Hardness: 68-72 HRC Chilled Cast Iron",
        "Drive Power: 75 kW Heavy Duty Gear Motor",
        "Cooling: Internal Dual-Spiral Liquid Circulation"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_ml4ATRkI_qF2TljCKKA39pdon3kjY0_eqT-3X9rO02njVv9xzh5sfJIHlQMJNCAGqXCQZOzpCKslItIzqmo547kmNXaI7RcNFd4zgUcbaJkLPQVzBjdA2bcbbhYB3ZskBUSvot2FX4CkVMLuryvWafQ_bqJ49Y5S4qdYCDiNmnOTKexPeZKrcdJb1qKKn4bRNcKF7avenNd5HtPe20ojhnqB-s4dNnlueZMNmsyqojxlL8_pjJ0W"
    },
    {
      id: "p5",
      name: "Gamini Modular Trough Bulk Conveyor",
      category: "Conveyors",
      description: "Heavy C-channel structural steel conveyer systems with triple-sealed idlers designed for raw agricultural and bulk material transport.",
      specs: [
        "Belt Width: 600 - 1400 mm custom",
        "Belt Speed: 0.5 - 3.5 m/s Variable Speed Drive",
        "Structure: Heavy Powder Coated Structural Steel",
        "Idlers: Maintenance-free Triple Labyrinth Sealed"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdnR3qT3V9zcUeBZaN8XuAGMNq3sHQSvH5XfBzw8tCCKIT8YcAAozcrLfiBX5LH9PmbCafR6ImBCUXTky9Q2pUaIe2TOw6d5TZ6OTpVJN06_kTE_S0qc1nZWlNA58eOuVnngv9jZ4EZ8JsZYxLe9ZY12wefVAMqD0Zb54Jgn4pHXcszPWP5PDZN6GgmlRQ7NqOdA4OtaNv-uniQ_jVEERvWje5-gqj-iEUT9NMjLLUF6jNrefhy3pL"
    },
    {
      id: "p6",
      name: "Industrial OEM Agency & Genuine Spares",
      category: "Local Agency",
      description: "Exclusive Sri Lankan representation for international machinery OEMs, supplying genuine replacement parts and on-site engineering calibration.",
      specs: [
        "OEM Parts: 100% Genuine Factory Direct",
        "Support: 24/7 Rapid Regional Dispatch",
        "Technical: Factory Trained Engineers",
        "Warranty: Full OEM Manufacturer Warranty"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsDv-AIB2vONEibOoB1fYjOFQEzJDnnP4ev85bgXig_1njCzkDSSZ2tsjl2JmTtiqwq0pwKCLt4cqu-_lmfmf89Cy3SJd2IhHB2KNkKpinTlXV7Pf6R3StPE36hKNXmv8K2RUnXkcMY64FlP6p6jWOazrfntMNhm5G_3pQz_fHkwiZAOVHZO7ScSuHpZaRnlB0yLpO6XldhBQ8FFixYfOkv6kuIQID_DrHZ7Okeagv5d1UEUlWf4Yl"
    }
  ];

  const filteredProducts = productsList.filter((p) => {
    const matchesCategory = selectedCategory === "All Products" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (p.subtitle && p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pb-20 lg:pb-0">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Hero Header */}
      <header className="pt-32 pb-20 bg-[#171b1a] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPXAcns3qKLq0hPkX_hPlAuiz4WuSRCpcrsKcOtK-HOwLK-HIuJAiztapisJlkY4riQZhN2tOyDfJW0VB2gYL46HdHmcTgn0OaqKc0UXm1irgdHmm7GkDAQisOyMZ3bzb0Q755VcsoHFbRtjUHbLpwc1QK1EhvTMmyDG2pI6v-GQuQlh4yMWsZhXJAlj7nzGZr1KqRWo_aHLRJg-pSeCPF7cYPKzpk7tVpeLvLvraIp1PfgvQVxhjc')",
          }}
        ></div>
        <div className="max-w-[1280px] mx-auto px-5 md:px-12 relative z-10 text-center">
          <span className="font-['Inter'] text-xs font-bold uppercase tracking-widest text-[#c8a951] mb-3 block">
            Official Machinery Portfolio
          </span>
          <h1 className="font-['Manrope'] text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Products & Engineering Solutions
          </h1>
          <p className="font-['Inter'] text-base md:text-lg text-[#eef1ef] opacity-90 max-w-2xl mx-auto leading-relaxed">
            Gamini Engineering Works (Private) Limited — Sri Lanka&apos;s No. 1 Plantation Engineering & Automated Tea Processing Machinery Manufacturer Since 1977.
          </p>
        </div>
      </header>

      {/* Filter & Search Toolbar */}
      <section className="py-6 bg-[#f7faf8] border-b border-[#c1c9bf] sticky top-20 z-40 shadow-sm backdrop-blur-md">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-2 w-full md:w-auto scrollbar-hide overflow-x-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-['Inter'] text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#1b6c3b] text-white shadow"
                    : "bg-white text-[#414941] border border-[#c1c9bf] hover:border-[#1b6c3b] hover:text-[#1b6c3b]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#717971] text-xl">
              search
            </span>
            <input
              type="text"
              placeholder="Search machinery models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-[#c1c9bf] rounded text-sm focus:outline-none focus:border-[#1b6c3b]"
            />
          </div>
        </div>
      </section>

      {/* Main Product Catalog */}
      <main className="py-16 bg-[#f7faf8] min-h-[500px]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded border border-[#c1c9bf]">
              <span className="material-symbols-outlined text-4xl text-[#717971] mb-2">search_off</span>
              <h3 className="font-['Manrope'] text-xl font-bold text-[#003317]">No machinery found</h3>
              <p className="font-['Inter'] text-sm text-[#414941] mt-1">
                Try adjusting your search terms or selecting another category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All Products");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 bg-[#1b6c3b] text-white rounded text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="bg-white border border-[#c1c9bf] rounded-xl overflow-hidden technical-shadow-hover hover:border-[#1b6c3b] group flex flex-col h-full shadow-md"
                >
                  {/* Clean Cropped Machine Image Container */}
                  <div className="w-full bg-[#f1f5f2] relative p-4 flex items-center justify-center border-b border-[#c1c9bf]/40">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[320px] sm:h-[360px] object-contain group-hover:scale-[1.03] transition-transform duration-500 rounded"
                    />
                    <div className="absolute top-4 left-4 bg-[#003317]/95 text-white px-3 py-1 rounded text-xs font-bold border border-[#1b6c3b] shadow-md">
                      {product.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow bg-white">
                    <h3 className="font-['Manrope'] text-xl font-bold text-[#003317] mb-1 group-hover:text-[#1b6c3b] transition-colors">
                      {product.name}
                    </h3>
                    {product.subtitle && (
                      <p className="font-['Inter'] text-xs font-bold text-[#1b6c3b] mb-3">
                        {product.subtitle}
                      </p>
                    )}
                    <p className="font-['Inter'] text-sm text-[#414941] mb-4 leading-relaxed flex-grow">
                      {product.description}
                    </p>

                    <div className="space-y-1.5 mb-6 pt-2 border-t border-[#ecefec]">
                      {product.specs.slice(0, 2).map((spec, i) => (
                        <div key={i} className="flex items-center text-xs text-[#414941]">
                          <span className="material-symbols-outlined text-[#1b6c3b] text-sm mr-2">check_circle</span>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-[#ecefec] mt-auto">
                      <Link
                        href={`/products/${product.id}`}
                        className="text-xs font-bold text-[#1b6c3b] hover:text-[#003317] inline-flex items-center gap-1 group/link"
                      >
                        View Full Specs
                        <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </Link>

                      <button
                        onClick={() => setIsQuoteOpen(true)}
                        className="bg-[#ecefec] hover:bg-[#1b6c3b] hover:text-white text-[#003317] px-3.5 py-1.5 rounded text-xs font-semibold transition-colors"
                      >
                        Get Price
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />

      <MobileBottomNav onOpenQuote={() => setIsQuoteOpen(true)} />

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
