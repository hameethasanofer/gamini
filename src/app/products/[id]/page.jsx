"use client";

import { useState, use } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import MobileBottomNav from "@/components/MobileBottomNav";

const productsDatabase = {
  p1: {
    id: "p1",
    modelCode: "GAMINI-47-AUT",
    docRef: "GEW-47-AUT-2024",
    name: "Gamini 47\" Modified Fully Automated Tea Roller",
    category: "Tea Machinery",
    badgeLabel: "SRI LANKA'S NO. 1 TEA ROLLER",
    subtitle: "Electro-Pneumatic Pressure Application & Door Operating Systems",
    description: "Sri Lanka's premier tea leaf processing roller. Manufactured by Gamini Engineering Works (Private) Limited, featuring phosphor bronze crescent battens, Rettie cones, and automated pressure application logic.",
    mainImage: "/images/cropped-fully-automated-tea-roller.jpg",
    gallery: [
      {
        title: "Fully Automated Tea Roller Unit",
        url: "/images/cropped-fully-automated-tea-roller.jpg"
      },
      {
        title: "Full Kithul Crescent Battens & Rettie Cone",
        url: "/images/tea-roller-batten-1.jpg"
      },
      {
        title: "1/2 Kithul Crescent Battens with Inserts",
        url: "/images/tea-roller-batten-2.jpg"
      },
      {
        title: "1/2 Kithul Crescent Battens with Tips",
        url: "/images/tea-roller-batten-3.jpg"
      },
      {
        title: "Boltless Door Ring & Rettie Cone",
        url: "/images/tea-roller-rettie-cone.jpg"
      }
    ],
    specs: [
      { label: "Roller Size", value: "47\" Modified Heavy Duty" },
      { label: "Batten System", value: "Full / 1/2 Kithul Crescent Battens with Inserts" },
      { label: "Batten & Tips Material", value: "Phosphor Bronze Tips & Edgings" },
      { label: "Cone & Door Ring", value: "Boltless Door Ring & Rettie Cone" },
      { label: "Automation System", value: "Electro-Pneumatic Pressure & Door System" },
      { label: "Control Panel", value: "Digital Timer, Pressure Display & Manual Override" },
      { label: "Drive Motor", value: "20 HP Heavy Duty 3-Phase Engine" },
      { label: "Certification", value: "ISO 9001:2015 / Sri Lanka's No. 1 Plantation OEM" }
    ],
    benefits: [
      {
        icon: "workspace_premium",
        title: "Phosphor Bronze Components",
        desc: "Batten tips, edgings, door & cone crafted from premium Phosphor Bronze for non-contaminating, high-durability leaf cell disruption."
      },
      {
        icon: "settings_suggest",
        title: "Electro-Pneumatic Automation",
        desc: "Precision programmable pressure application with preset timing cycles and automatic door opening/locking."
      },
      {
        icon: "verified",
        title: "Boltless Door Ring & Rettie Cone",
        desc: "Optimized leaf circulation pattern ensuring uniform twisted curl with zero leaf damage or charring."
      }
    ]
  },
  p2: {
    id: "p2",
    modelCode: "GAMINI-47-CHG",
    docRef: "GEW-47-CHG-2024",
    name: "Gamini 47\" Heavy Duty Charge Tea Roller",
    category: "Tea Machinery",
    badgeLabel: "350 KGS CAPACITY PER CHARGE",
    subtitle: "Award Winning Plantation Engineering — Class 01 Timber & Kitulwood Base",
    description: "Designed for continuous heavy-duty leaf rolling across intensive plantation factory schedules. Features a 350 Kg withered leaf capacity per charge, SKF bearings, and 304 Grade stainless steel leaf jacket.",
    mainImage: "/images/cropped-charge-tea-roller.jpg",
    gallery: [
      {
        title: "Charge Tea Roller Machine",
        url: "/images/cropped-charge-tea-roller.jpg"
      }
    ],
    specs: [
      { label: "Size & Capacity", value: "47\" Roller / 350 Kgs Per Charge" },
      { label: "Table Construction", value: "Class 01 Timber Base, Kitulwood Lining & Hardwood" },
      { label: "Leaf Jacket", value: "4' Extended 304 Grade Stainless Steel Re-enforced" },
      { label: "Gear Drive", value: "Machine-Cut Case-Hardened Hypoid Bevel Crown & Pinion" },
      { label: "Bearings", value: "SKF Ball & Roller Bearings" },
      { label: "Motor Power", value: "20 HP, 06 Pole, 960 RPM Teco Motor with Star Delta Starter" },
      { label: "Weight & Installation", value: "Approx. 2000 Kgs / 12' x 12' Area" },
      { label: "Inching Wheel", value: "Aluminum Casted, Machine Finished" }
    ],
    benefits: [
      {
        icon: "forest",
        title: "Kitulwood Table Lining",
        desc: "Class 01 Timber base with Kitulwood lining offers natural leaf friction and zero chemical reaction during rolling."
      },
      {
        icon: "settings_power",
        title: "20 HP Teco Heavy Motor",
        desc: "6-pole 960 RPM Teco motor with Star-Delta starter provides high startup torque for heavy charges."
      },
      {
        icon: "precision_manufacturing",
        title: "SKF Ball & Roller Bearings",
        desc: "Equipped exclusively with premium SKF bearings for maximum uptime and smooth mechanical operation."
      }
    ]
  },
  p3: {
    id: "p3",
    modelCode: "GAMINI-AUT-SYS",
    docRef: "GEW-AUT-SYS-2024",
    name: "Gamini Electro-Mechanical Tea Roller Automation System",
    category: "Automation Systems",
    badgeLabel: "PLC AUTOMATED PRESSURE & DOOR SYSTEM",
    subtitle: "User Programmable Logic Control (PLC) for Auto Pressure & Door Operating Mechanisms",
    description: "Advanced automation unit easily retrofitted or integrated into any Auto Pressure or Charge Tea Roller. Powered by SEW/Sumitomo geared motor drives with digital time & pressure readouts.",
    mainImage: "/images/cropped-automated-system.jpg",
    gallery: [
      {
        title: "Automation System & Control Panel",
        url: "/images/cropped-automated-system.jpg"
      }
    ],
    specs: [
      { label: "Control System", value: "User Programmable Logic Control (PLC)" },
      { label: "Geared Motor Drive", value: "SEW or Sumitomo Geared Motor with Pulley Drive" },
      { label: "Pressure Control", value: "Independent Dual Pressure Controls 1 & 2" },
      { label: "Displays & Indicators", value: "Digital Time Indicator & Pressure Readout" },
      { label: "Power Interruption", value: "System Memory Pause & Automatic Resume" },
      { label: "Operation Modes", value: "Automatic, Electrical & Manual Override Modes" },
      { label: "Door Mechanism", value: "Electrically Operated Up-Down Push Buttons" },
      { label: "Compatibility", value: "Fits all 47\", 45\" & Standard Tea Rollers" }
    ],
    benefits: [
      {
        icon: "touch_app",
        title: "Programmable Logic Control (PLC)",
        desc: "Allows factory supervisors to program unlimited leaf rolling pressure cycles with digital accuracy."
      },
      {
        icon: "memory",
        title: "Power Interruption Memory",
        desc: "Retains program state and pressure position during power failures, resuming automatically when power restores."
      },
      {
        icon: "lock",
        title: "Automated Door Operating & Locking",
        desc: "Geared motor powered door opening and locking eliminates manual labor and prevents discharge spills."
      }
    ]
  },
  p4: {
    id: "p4",
    modelCode: "CRM-660",
    docRef: "GEW-CRM-2024",
    name: "Gamini Heavy Duty Crepe Rubber Mill",
    category: "Rubber Machinery",
    badgeLabel: "CHILLED CAST IRON ROLLS",
    subtitle: "Internal Dual-Spiral Liquid Cooling Channels & Hydraulic Release",
    description: "Designed for heavy rubber latex compounding, featuring chilled cast iron rolls with spiral cooling channels to maintain exact thermal balance during extreme shear friction mastication.",
    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_ml4ATRkI_qF2TljCKKA39pdon3kjY0_eqT-3X9rO02njVv9xzh5sfJIHlQMJNCAGqXCQZOzpCKslItIzqmo547kmNXaI7RcNFd4zgUcbaJkLPQVzBjdA2bcbbhYB3ZskBUSvot2FX4CkVMLuryvWafQ_bqJ49Y5S4qdYCDiNmnOTKexPeZKrcdJb1qKKn4bRNcKF7avenNd5HtPe20ojhnqB-s4dNnlueZMNmsyqojxlL8_pjJ0W",
    gallery: [
      {
        title: "Crepe Rubber Mill Unit",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_ml4ATRkI_qF2TljCKKA39pdon3kjY0_eqT-3X9rO02njVv9xzh5sfJIHlQMJNCAGqXCQZOzpCKslItIzqmo547kmNXaI7RcNFd4zgUcbaJkLPQVzBjdA2bcbbhYB3ZskBUSvot2FX4CkVMLuryvWafQ_bqJ49Y5S4qdYCDiNmnOTKexPeZKrcdJb1qKKn4bRNcKF7avenNd5HtPe20ojhnqB-s4dNnlueZMNmsyqojxlL8_pjJ0W"
      }
    ],
    specs: [
      { label: "Roll Diameter", value: "660 mm (26 inches)" },
      { label: "Working Length", value: "1800 mm (70 inches)" },
      { label: "Roll Hardness", value: "68 - 72 HRC Chilled Cast Iron" },
      { label: "Cooling System", value: "Internal Dual-Spiral Flow" },
      { label: "Motor Power", value: "75 kW Gear Motor" }
    ],
    benefits: [
      {
        icon: "shield",
        title: "Hydraulic Emergency Safety",
        desc: "Equipped with automated emergency roll drop triggers that split the nip gap instantly in safety situations."
      }
    ]
  },
  p5: {
    id: "p5",
    modelCode: "MTC-1200",
    docRef: "GEW-MTC-2024",
    name: "Gamini Modular Trough Bulk Conveyor",
    category: "Conveyors",
    badgeLabel: "HEAVY STRUCTURAL STEEL",
    subtitle: "Heavy Bulk Material Transport System with Triple-Sealed Idlers",
    description: "Modular heavy-duty trough belt conveyor system constructed with C-channel structural steel, triple-sealed idlers, and anti-tear vulcanized rubber belting.",
    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdnR3qT3V9zcUeBZaN8XuAGMNq3sHQSvH5XfBzw8tCCKIT8YcAAozcrLfiBX5LH9PmbCafR6ImBCUXTky9Q2pUaIe2TOw6d5TZ6OTpVJN06_kTE_S0qc1nZWlNA58eOuVnngv9jZ4EZ8JsZYxLe9ZY12wefVAMqD0Zb54Jgn4pHXcszPWP5PDZN6GgmlRQ7NqOdA4OtaNv-uniQ_jVEERvWje5-gqj-iEUT9NMjLLUF6jNrefhy3pL",
    gallery: [
      {
        title: "Bulk Conveyor Unit",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdnR3qT3V9zcUeBZaN8XuAGMNq3sHQSvH5XfBzw8tCCKIT8YcAAozcrLfiBX5LH9PmbCafR6ImBCUXTky9Q2pUaIe2TOw6d5TZ6OTpVJN06_kTE_S0qc1nZWlNA58eOuVnngv9jZ4EZ8JsZYxLe9ZY12wefVAMqD0Zb54Jgn4pHXcszPWP5PDZN6GgmlRQ7NqOdA4OtaNv-uniQ_jVEERvWje5-gqj-iEUT9NMjLLUF6jNrefhy3pL"
      }
    ],
    specs: [
      { label: "Belt Width", value: "600 mm - 1400 mm" },
      { label: "Conveyor Speed", value: "0.5 - 3.5 m/s" },
      { label: "Structural Steel", value: "Powder Coated C-Channel" }
    ],
    benefits: [
      {
        icon: "view_module",
        title: "Modular Expansion",
        desc: "Bolted frame segments allow fast length adjustments and easy factory line integration."
      }
    ]
  },
  p6: {
    id: "p6",
    modelCode: "GEW-AGENCY",
    docRef: "GEW-AGENCY-2024",
    name: "Industrial OEM Agency & Genuine Spares",
    category: "Local Agency",
    badgeLabel: "AUTHORIZED OEM REPRESENTATIVE",
    subtitle: "Genuine Spares, Factory Calibration & Emergency Technical Support",
    description: "Gamini Engineering acts as exclusive local agent for world-renowned international machinery brands, supplying genuine replacement parts, factory calibration, and emergency site repairs.",
    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsDv-AIB2vONEibOoB1fYjOFQEzJDnnP4ev85bgXig_1njCzkDSSZ2tsjl2JmTtiqwq0pwKCLt4cqu-_lmfmf89Cy3SJd2IhHB2KNkKpinTlXV7Pf6R3StPE36hKNXmv8K2RUnXkcMY64FlP6p6jWOazrfntMNhm5G_3pQz_fHkwiZAOVHZO7ScSuHpZaRnlB0yLpO6XldhBQ8FFixYfOkv6kuIQID_DrHZ7Okeagv5d1UEUlWf4Yl",
    gallery: [
      {
        title: "OEM Agency & Spares",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsDv-AIB2vONEibOoB1fYjOFQEzJDnnP4ev85bgXig_1njCzkDSSZ2tsjl2JmTtiqwq0pwKCLt4cqu-_lmfmf89Cy3SJd2IhHB2KNkKpinTlXV7Pf6R3StPE36hKNXmv8K2RUnXkcMY64FlP6p6jWOazrfntMNhm5G_3pQz_fHkwiZAOVHZO7ScSuHpZaRnlB0yLpO6XldhBQ8FFixYfOkv6kuIQID_DrHZ7Okeagv5d1UEUlWf4Yl"
      }
    ],
    specs: [
      { label: "Representation Scope", value: "Tea, Rubber & Conveyor OEM Brands" },
      { label: "Parts Availability", value: "24/7 Rapid Regional Dispatch" }
    ],
    benefits: [
      {
        icon: "verified_user",
        title: "Factory Backed Warranty",
        desc: "100% genuine replacement components imported directly from original equipment manufacturers."
      }
    ]
  }
};

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id || "p1";
  const product = productsDatabase[productId] || productsDatabase["p1"];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", company: "", email: "", details: "" });

  const galleryList = product.gallery && product.gallery.length > 0 ? product.gallery : [{ url: product.mainImage, title: product.name }];
  const activeImage = galleryList[activeImageIndex] || galleryList[0];

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    setIsQuoteOpen(true);
  };

  return (
    <div className="bg-[#f7faf8] text-[#181c1b] antialiased selection:bg-[#174a2a] selection:text-white min-h-screen">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      <main className="pt-24 pb-16">
        {/* Breadcrumb Bar */}
        <div className="bg-[#f1f4f2] border-b border-[#c1c9bf]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-12 py-4 flex items-center gap-2 font-['Inter'] text-sm text-[#414941]">
            <Link className="hover:text-[#003317] transition-colors" href="/">Home</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <Link className="hover:text-[#003317] transition-colors" href="/products">Products</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-[#1b6c3b] font-semibold">{product.category}</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-[#003317] font-bold">{product.name}</span>
          </div>
        </div>

        {/* Hero Product Detail Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Product Gallery Stage */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Main Product Image */}
              <div className="bg-[#0d1a12] rounded-xl overflow-hidden relative min-h-[480px] sm:min-h-[560px] flex items-center justify-center group border-8 border-[#003317]/20 shadow-2xl p-4">
                <img
                  className="object-contain w-full h-full max-h-[520px] transition-transform duration-700 group-hover:scale-[1.02]"
                  src={activeImage.url}
                  alt={activeImage.title}
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded font-['Inter'] text-xs font-bold tracking-widest border border-white/20 bg-[#003317]/90 border-l-4 border-l-[#1b6c3b] shadow-lg">
                  {product.badgeLabel || "SRI LANKA'S NO. 1 TEA ROLLER"}
                </div>

                <div className="absolute bottom-4 right-4 bg-black/80 text-[#a4f5b6] px-3 py-1.5 rounded text-xs font-mono border border-white/20">
                  {activeImage.title}
                </div>
              </div>

              {/* Render gallery thumbnails grid IF there are multiple photos */}
              {galleryList.length > 1 && (
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {galleryList.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`bg-[#0d1a12] rounded-lg overflow-hidden relative h-24 cursor-pointer group border-2 transition-all shadow p-1 flex items-center justify-center ${
                        activeImageIndex === idx ? "border-[#a4f5b6] scale-105" : "border-transparent hover:border-[#1b6c3b]"
                      }`}
                    >
                      <img
                        className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                        src={img.url}
                        alt={img.title}
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Meta & Actions */}
            <div className="lg:col-span-5 flex flex-col justify-start lg:pt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-[#003317]"></div>
                <div className="font-['Inter'] text-xs font-bold text-[#1b6c3b] tracking-widest uppercase">
                  {product.category}
                </div>
              </div>

              <h1 className="font-['Manrope'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003317] mb-3 leading-tight">
                {product.name}
              </h1>

              {product.subtitle && (
                <p className="font-['Inter'] text-sm font-bold text-[#1b6c3b] mb-4">
                  {product.subtitle}
                </p>
              )}

              <p className="font-['Inter'] text-base text-[#414941] mb-10 leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="bg-[#003317] text-white px-8 py-4 rounded-lg hover:bg-[#174a2a] transition-all duration-300 font-['Manrope'] font-bold text-base shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Request Technical Quote
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <a
                  href="#blueprint-specifications"
                  className="bg-white border-2 border-[#c1c9bf] text-[#181c1b] px-8 py-4 rounded-lg hover:border-[#003317] hover:text-[#003317] transition-all duration-300 font-['Manrope'] font-bold text-base flex items-center justify-center gap-2 group text-center"
                >
                  <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform">download</span>
                  Technical Specs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Blueprint Design Technical Specifications */}
        <section id="blueprint-specifications" className="bg-[#0d1a12] text-white py-20 border-y border-[#174a2a]/30 relative overflow-hidden">
          {/* Blueprint Watermark */}
          <div className="absolute top-0 right-0 p-8 opacity-15 pointer-events-none">
            <span className="font-['Manrope'] text-[140px] text-[#b9f0c3] font-extrabold leading-none">
              {product.modelCode || "GEW-47"}
            </span>
          </div>

          <div className="max-w-[1280px] mx-auto px-5 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <div className="font-['Inter'] text-xs font-bold text-[#b9f0c3] tracking-widest mb-3 uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">memory</span> Official Factory Leaflet Data
                </div>
                <h2 className="font-['Manrope'] text-3xl md:text-4xl font-bold text-white">
                  System Specifications
                </h2>
              </div>
              <div className="text-right">
                <span className="font-['Inter'] text-xs text-[#b9f0c3]/80 block">Doc Ref: {product.docRef}</span>
                <span className="font-['Inter'] text-xs text-[#b9f0c3]/80 block">Standard: Gamini Engineering Works (Pvt) Ltd</span>
              </div>
            </div>

            {/* High-Density Blueprint Data Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-l border-[#1b6c3b]/40 bg-[#0d1a12]/90 backdrop-blur-sm">
              {product.specs.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 border-b border-r border-[#1b6c3b]/40 flex justify-between items-center hover:bg-[#1b6c3b]/10 transition-colors"
                >
                  <span className="font-['Inter'] text-sm text-[#b9f0c3]/80 font-medium">
                    {item.label}
                  </span>
                  <span className="font-['Manrope'] font-bold text-sm text-white tracking-tight text-right ml-4">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operational Impact Benefits */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-20">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="font-['Inter'] text-xs font-bold text-[#1b6c3b] uppercase tracking-widest block mb-3">
              OPERATIONAL IMPACT
            </span>
            <h2 className="font-['Manrope'] text-3xl md:text-4xl font-extrabold text-[#003317] mb-4">
              Engineering Excellence
            </h2>
            <p className="font-['Inter'] text-sm text-[#414941]">
              Designed from the ground up by Gamini Engineering Works (Private) Limited for heavy continuous plantation usage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#003317]/10 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:border-[#1b6c3b]"
              >
                <div className="w-14 h-14 rounded-xl bg-[#003317]/10 flex items-center justify-center mb-6 text-[#1b6c3b] border border-[#1b6c3b]/20">
                  <span className="material-symbols-outlined text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="font-['Manrope'] text-xl font-bold text-[#003317] mb-3">
                  {benefit.title}
                </h3>
                <p className="font-['Inter'] text-sm text-[#414941] leading-relaxed flex-grow">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quote Request Form Section */}
        <section className="bg-[#f1f4f2] py-16 border-t border-[#c1c9bf]">
          <div className="max-w-[800px] mx-auto px-5 md:px-12 text-center">
            <span className="font-['Inter'] text-xs font-bold text-[#1b6c3b] uppercase tracking-widest block mb-3">
              NEXT STEPS
            </span>
            <h2 className="font-['Manrope'] text-3xl font-extrabold text-[#003317] mb-4">
              Request a Technical Quote
            </h2>
            <p className="font-['Inter'] text-sm text-[#414941] mb-10">
              Our engineering team is ready to discuss your specific operational requirements for {product.name}.
            </p>

            <form onSubmit={handleSubmitQuote} className="text-left bg-white p-8 sm:p-10 rounded-2xl border border-[#c1c9bf] shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-['Inter'] text-xs font-bold text-[#181c1b] mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-[#c1c9bf] rounded-lg px-4 py-3 text-sm focus:border-[#003317] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-['Inter'] text-xs font-bold text-[#181c1b] mb-2">Company Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Tea Estate"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full border border-[#c1c9bf] rounded-lg px-4 py-3 text-sm focus:border-[#003317] outline-none"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-['Inter'] text-xs font-bold text-[#181c1b] mb-2">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-[#c1c9bf] rounded-lg px-4 py-3 text-sm focus:border-[#003317] outline-none"
                />
              </div>

              <div className="mb-8">
                <label className="block font-['Inter'] text-xs font-bold text-[#181c1b] mb-2">Project Details</label>
                <textarea
                  rows="4"
                  placeholder={`Tell us about your factory capacity requirements for ${product.name}...`}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full border border-[#c1c9bf] rounded-lg px-4 py-3 text-sm focus:border-[#003317] outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#003317] hover:bg-[#174a2a] text-white py-4 rounded-lg font-['Manrope'] font-bold text-base transition-colors shadow-md"
              >
                Submit Request for {product.name}
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />

      <MobileBottomNav onOpenQuote={() => setIsQuoteOpen(true)} />

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
