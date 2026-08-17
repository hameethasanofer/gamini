"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [counts, setCounts] = useState({ years: 0, solutions: 0, divisions: 0 });
  const [activeTab, setActiveTab] = useState(0);
  const [currentHeroImageIdx, setCurrentHeroImageIdx] = useState(0);

  const heroImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCSvQLHUvSv7j1kUMJbB_S1qhaacH9ENVJ230oWhOSeigZaAXjudzH5RnWiT4Yb42QXWcIVOwlrGn0wh_277_jiZlKXbB8bmpxZcPr3Y6gP3gk8d9cATe0lupbHowITHULVfBz6JS_XNi7IgYNZJ7-Z_Wj4EU0kYhTHwAyqF2F260W9QSukt0KJEdC8WCAKYKZVkYOP453OeXibQEC6UJkbAFRq_xkZDHGm5sG2UQsEKwTQZb_1Nulf",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuArtstmpJYc7DdBoFiSVbEc4WuI5oQ2xQA2Z4We9C_bg7zC6gLtkRRYCKYeI9XY-ARIyiNHBzjLHxdOGRi_b3Q6ReqP-oUlI6JTeWKUk1dqR7DIvbxd8IS-klSn3P7oBC3HvmhK0z-0bsdh5c7YrB3f4HrHmL4WkZcFhSsiafiuyOUX_danhSN3DEvdyuZIxPNLZi2vAIswFFuLzJlaHQadeC71d83so38MR0MjSVqjuXmig4W0_qYt",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDRIme5sRwsCGJntUOsDE__fiaH9n7TxmIH8mezuwLx1kchlLpp7R9HxjVw8b3txYtFC2Vwzj7cVWf_qDhFZPElLM_lFzPA4V9m4LpEbxvMNGSjhnhZPTuNSflHy4fEcsFA8NTmWpPEPonopxIB26Pk5YejuCsyb1FaXUQZjrH6_xhGTDKPQlW0XTwpzN-amlC8N7ynzO5JOa07HTWITXi1j69d_8MdGroBEtLlU28Z6a8gL2spB4RS",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBsDv-AIB2vONEibOoB1fYjOFQEzJDnnP4ev85bgXig_1njCzkDSSZ2tsjl2JmTtiqwq0pwKCLt4cqu-_lmfmf89Cy3SJd2IhHB2KNkKpinTlXV7Pf6R3StPE36hKNXmv8K2RUnXkcMY64FlP6p6jWOazrfntMNhm5G_3pQz_fHkwiZAOVHZO7ScSuHpZaRnlB0yLpO6XldhBQ8FFixYfOkv6kuIQID_DrHZ7Okeagv5d1UEUlWf4Yl"
  ];

  // SLIDESHOW INTERVAL SETUP TIME (Change this value to alter the transition speed in ms)
  const SLIDESHOW_INTERVAL = 4000;

  useEffect(() => {
    if (loading) return;
    const slideshowTimer = setInterval(() => {
      setCurrentHeroImageIdx((prev) => (prev + 1) % heroImages.length);
    }, SLIDESHOW_INTERVAL);
    return () => clearInterval(slideshowTimer);
  }, [loading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // IntersectionObserver for Scroll Animations
  useEffect(() => {
    if (loading) return;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  // Counter animation
  useEffect(() => {
    if (loading) return;
    const duration = 1200;
    const steps = 25;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        years: Math.min(45, Math.floor(progress * 45)),
        solutions: Math.min(100, Math.floor(progress * 100)),
        divisions: Math.min(4, Math.floor(progress * 4)),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [loading]);

  const lifecyclePhases = [
    {
      step: "01",
      title: "Blueprint & FEA Simulation",
      icon: "architecture",
      tag: "COMPUTER AIDED DESIGN",
      desc: "Our CAD engineers generate parametric 3D models and Finite Element Analysis (FEA) load simulations tailored to your factory layout.",
      deliverable: "3D CAD Schematics & FEA Stress Load Report",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      stats: "±0.001mm Tolerance FEA"
    },
    {
      step: "02",
      title: "Sub-Micron Precision Fabrication",
      icon: "precision_manufacturing",
      tag: "FOUNDRY & CNC MACHINING",
      desc: "Chilled cast iron, phosphor bronze, and 304 grade stainless steel parts milled on heavy 5-axis CNC machines.",
      deliverable: "ISO 9001:2015 Metallurgical & Machining Log",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80",
      stats: "72 HRC Hardened Rolls"
    },
    {
      step: "03",
      title: "72-Hour Full Load Factory Testing",
      icon: "verified",
      tag: "SYSTEM INTEGRATION",
      desc: "Every tea roller, rubber mill, and bulk conveyor undergoes a continuous 72-hour full load vibration and thermal test before dispatch.",
      deliverable: "Certified 72-Hr Stress-Run Test Report",
      image: "/images/cropped-fully-automated-tea-roller.jpg",
      stats: "100% Zero-Defect Guarantee"
    },
    {
      step: "04",
      title: "Turnkey Plant Setup & 24/7 OEM Support",
      icon: "build",
      tag: "FIELD DEPLOYMENT",
      desc: "Senior Gamini field engineers manage complete factory installation, operator calibration, and 24/7 OEM spare parts dispatch.",
      deliverable: "Turnkey Signoff & Lifetime Spare Guarantee",
      image: "/images/cropped-automated-system.jpg",
      stats: "24/7 On-Site Response"
    }
  ];

  const caseStudies = [
    {
      client: "Highland Plantation Estate",
      location: "Central Tea Belt",
      metric: "+38% Processing Output",
      quote: "Gamini Engineering overhauled our complete continuous tea leaf rolling line. The precision of their heavy rollers reduced leaf degradation by 40% while raising throughput significantly.",
      author: "Senior Estate Manager"
    },
    {
      client: "Apex Polymer Compounding",
      location: "Industrial Zone 4",
      metric: "99.4% Operational Uptime",
      quote: "Our rubber compounding mills operate 24 hours a day under extreme torque. Gamini's chilled iron rolls and hydraulic safety drop systems have proven virtually bulletproof.",
      author: "Chief Plant Engineer"
    }
  ];

  const divisions = [
    {
      title: "Tea Machinery",
      icon: "precision_manufacturing",
      desc: "Comprehensive manufacturing and servicing of high-efficiency equipment for the global tea processing industry.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCSvQLHUvSv7j1kUMJbB_S1qhaacH9ENVJ230oWhOSeigZaAXjudzH5RnWiT4Yb42QXWcIVOwlrGn0wh_277_jiZlKXbB8bmpxZcPr3Y6gP3gk8d9cATe0lupbHowITHULVfBz6JS_XNi7IgYNZJ7-Z_Wj4EU0kYhTHwAyqF2F260W9QSukt0KJEdC8WCAKYKZVkYOP453OeXibQEC6UJkbAFRq_xkZDHGm5sG2UQsEKwTQZb_1Nulf",
    },
    {
      title: "Rubber Machinery",
      icon: "conveyor_belt",
      desc: "Robust mills, presses, and extruders engineered to withstand the demanding environments of rubber compounding.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuArtstmpJYc7DdBoFiSVbEc4WuI5oQ2xQA2Z4We9C_bg7zC6gLtkRRYCKYeI9XY-ARIyiNHBzjLHxdOGRi_b3Q6ReqP-oUlI6JTeWKUk1dqR7DIvbxd8IS-klSn3P7oBC3HvmhK0z-0bsdh5c7YrB3f4HrHmL4WkZcFhSsiafiuyOUX_danhSN3DEvdyuZIxPNLZi2vAIswFFuLzJlaHQadeC71d83so38MR0MjSVqjuXmig4W0_qYt",
    },
    {
      title: "Conveyor Systems",
      icon: "factory",
      desc: "Custom-designed material handling solutions ensuring seamless flow and operational efficiency across sectors.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDRIme5sRwsCGJntUOsDE__fiaH9n7TxmIH8mezuwLx1kchlLpp7R9HxjVw8b3txYtFC2Vwzj7cVWf_qDhFZPElLM_lFzPA4V9m4LpEbxvMNGSjhnhZPTuNSflHy4fEcsFA8NTmWpPEPonopxIB26Pk5YejuCsyb1FaXUQZjrH6_xhGTDKPQlW0XTwpzN-amlC8N7ynzO5JOa07HTWITXi1j69d_8MdGroBEtLlU28Z6a8gL2spB4RS",
    },
    {
      title: "Local Agency",
      icon: "handshake",
      desc: "Exclusive representation and support for world-leading industrial equipment manufacturers in the local market.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBsDv-AIB2vONEibOoB1fYjOFQEzJDnnP4ev85bgXig_1njCzkDSSZ2tsjl2JmTtiqwq0pwKCLt4cqu-_lmfmf89Cy3SJd2IhHB2KNkKpinTlXV7Pf6R3StPE36hKNXmv8K2RUnXkcMY64FlP6p6jWOazrfntMNhm5G_3pQz_fHkwiZAOVHZO7ScSuHpZaRnlB0yLpO6XldhBQ8FFixYfOkv6kuIQID_DrHZ7Okeagv5d1UEUlWf4Yl",
    },
  ];

  return (
    <div className="pb-20 lg:pb-0">
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-[#f7faf8] z-[99999] flex items-center justify-center transition-opacity duration-500">
          <div className="font-['Manrope'] text-8xl font-extrabold text-[#1b6c3b] animate-pulse-monogram">
            G
          </div>
        </div>
      )}

      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* ULTRA-LUXURY SPLIT ALIGNMENT HERO SECTION */}
      <section className="relative min-h-[90vh] py-24 lg:py-0 flex items-center overflow-hidden bg-black text-white">
        {/* Carousel Background Images with Cross-fade */}
        {heroImages.map((imgUrl, idx) => (
          <div
            key={imgUrl}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${
              currentHeroImageIdx === idx ? "opacity-35" : "opacity-0"
            }`}
          >
            <img
              src={imgUrl}
              alt="Machinery Background"
              className="w-full h-full object-cover scale-105"
            />
          </div>
        ))}

        {/* Sophisticated Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020b05] via-[#020b05]/85 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020b05] via-transparent to-black/40"></div>

        {/* 2-Column Split Content Container */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-12 w-full relative z-20 pt-10 reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: High-Impact Left-Aligned Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Gold Beacon Pill */}
              <div className="inline-flex items-center gap-2.5 bg-[#00220e]/90 border border-[#c8a951]/70 px-5 py-2 rounded-full backdrop-blur-xl mb-6 shadow-2xl">
                <span className="w-2 h-2 rounded-full bg-[#c8a951] animate-ping"></span>
                <span className="font-['Inter'] text-xs font-extrabold text-[#c8a951] uppercase tracking-[0.25em]">
                  PRECISION INDUSTRIAL ENGINEERING • EST. 1977
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-['Manrope'] text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 text-white drop-shadow-2xl">
                Mastering Heavy Machinery. <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#a4f5b6] via-[#6faf2d] to-[#c8a951] bg-clip-text text-transparent">
                  Forging Global Industry.
                </span>
              </h1>

              {/* Description */}
              <p className="font-['Inter'] text-base sm:text-lg text-[#eef1ef] max-w-xl mb-8 leading-relaxed font-normal opacity-90 drop-shadow-md">
                Gamini Engineering manufactures heavy tea processing machinery, rubber compounding mills, and custom conveyor systems engineered for sub-micron precision and zero downtime.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/products"
                  className="bg-[#1b6c3b] hover:bg-[#14532d] text-white px-8 py-4 rounded-lg font-['Manrope'] font-bold text-base transition-all shadow-2xl flex items-center justify-center gap-2.5 border border-[#a4f5b6]/40 transform hover:-translate-y-0.5"
                >
                  Explore Machinery Catalog
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </Link>
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="bg-[#171b1a]/80 hover:bg-[#c8a951] text-[#c8a951] hover:text-[#00220e] border-2 border-[#c8a951] px-8 py-4 rounded-lg font-['Manrope'] font-bold text-base transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-md shadow-xl"
                >
                  <span className="material-symbols-outlined text-xl">request_quote</span>
                  Request Technical Quote
                </button>
              </div>

              {/* Live Metric Highlights Bar */}
              <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-[#a4f5b6]/20 w-full">
                <div>
                  <div className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold text-[#a4f5b6]">45+</div>
                  <div className="font-['Inter'] text-xs text-[#eef1ef] opacity-75 uppercase tracking-wider font-semibold">Years Heritage</div>
                </div>
                <div>
                  <div className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold text-[#c8a951]">100+</div>
                  <div className="font-['Inter'] text-xs text-[#eef1ef] opacity-75 uppercase tracking-wider font-semibold">Plant Deployments</div>
                </div>
                <div>
                  <div className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold text-[#6faf2d]">±0.002mm</div>
                  <div className="font-['Inter'] text-xs text-[#eef1ef] opacity-75 uppercase tracking-wider font-semibold">CNC Tolerance</div>
                </div>
              </div>
            </div>

            {/* Right Column: Glassmorphic Machinery Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="bg-gradient-to-b from-[#0d1a12]/95 to-[#040e07]/95 border-2 border-[#1b6c3b]/60 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,51,23,0.7)] relative overflow-hidden group">
                
                {/* Gold Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c8a951]/20 rounded-full blur-3xl group-hover:bg-[#c8a951]/30 transition-all pointer-events-none"></div>

                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#003317] text-[#a4f5b6] text-[10px] font-['Inter'] font-extrabold uppercase px-3 py-1 rounded-full border border-[#1b6c3b] tracking-wider">
                    FLAGSHIP MODEL
                  </span>
                  <span className="font-['Inter'] text-xs text-[#c8a951] font-bold">
                    GEW-47-AUT-2024
                  </span>
                </div>

                {/* Machine Video Display */}
                <div className="h-64 sm:h-72 w-full relative rounded-2xl overflow-hidden border border-[#1b6c3b]/40 shadow-inner bg-black">
                  <video
                    src="/videos/rolling-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Tech Grid / Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20 pointer-events-none"></div>
                  {/* Live Demo badge */}
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                    <span>OPERATIONAL PREVIEW</span>
                  </div>
                </div>

                {/* Machine Info & Quick Action */}
                <div className="pt-4 border-t border-[#1b6c3b]/40">
                  <h3 className="font-['Manrope'] font-extrabold text-lg text-white mb-1">
                    Gamini 47&quot; Fully Automated Tea Roller
                  </h3>
                  <p className="font-['Inter'] text-xs text-[#eef1ef] opacity-80 mb-0">
                    Electro-Pneumatic Pressure Application & Rettie Cone System
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INSTITUTIONAL TELEMETRY DECK */}
      <section className="relative bg-[#020b05] py-20 text-white border-y border-[#174a2a]/30 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#1b6c3b]/20 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-5 md:px-12 relative z-10 reveal-on-scroll">
          <div className="bg-gradient-to-b from-[#0a180e]/95 to-[#040e07]/95 backdrop-blur-2xl border border-[#a4f5b6]/25 rounded-3xl p-8 sm:p-12 shadow-[0_25px_60px_-15px_rgba(0,51,23,0.6)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c8a951]/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#a4f5b6]/40 to-transparent"></div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 mb-8 border-b border-[#a4f5b6]/15 gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#c8a951] text-2xl">insights</span>
                <span className="font-['Manrope'] font-bold text-base text-white tracking-wide uppercase">
                  Institutional Performance Telemetry
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[11px] text-[#a4f5b6] bg-[#003317]/80 px-3.5 py-1.5 rounded-full border border-[#1b6c3b]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6faf2d] animate-ping"></span>
                <span>FACILITY METRICS • LIVE</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative">
              <div className="flex flex-col justify-between group">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#c8a951] tracking-widest uppercase">METRIC // 01</span>
                  <span className="material-symbols-outlined text-[#c8a951] text-xl opacity-80 group-hover:scale-110 transition-transform">history_edu</span>
                </div>
                <div className="font-['Manrope'] text-5xl sm:text-6xl font-extrabold text-white mb-2 tracking-tight">
                  {counts.years}<span className="text-[#c8a951]">+</span>
                </div>
                <div className="font-['Manrope'] text-lg font-bold text-[#a4f5b6] mb-2">Years of Industry Heritage</div>
                <p className="font-['Inter'] text-xs text-[#eef1ef] opacity-75 leading-relaxed">
                  Established in 1977, pioneering heavy industrial machinery design and sub-micron fabrication.
                </p>
                <div className="w-full bg-[#00220e] h-1.5 rounded-full mt-6 overflow-hidden border border-[#1b6c3b]/40">
                  <div className="bg-gradient-to-r from-[#c8a951] to-[#e6ca75] h-full w-[90%] rounded-full"></div>
                </div>
              </div>

              <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#a4f5b6]/20 to-transparent"></div>

              <div className="flex flex-col justify-between group">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#a4f5b6] tracking-widest uppercase">METRIC // 02</span>
                  <span className="material-symbols-outlined text-[#a4f5b6] text-xl opacity-80 group-hover:scale-110 transition-transform">precision_manufacturing</span>
                </div>
                <div className="font-['Manrope'] text-5xl sm:text-6xl font-extrabold text-white mb-2 tracking-tight">
                  {counts.solutions}<span className="text-[#a4f5b6]">+</span>
                </div>
                <div className="font-['Manrope'] text-lg font-bold text-[#a4f5b6] mb-2">Turnkey Solutions Deployed</div>
                <p className="font-['Inter'] text-xs text-[#eef1ef] opacity-75 leading-relaxed">
                  High-capacity tea processing lines, rubber mills, and heavy-duty conveyor plants across regional markets.
                </p>
                <div className="w-full bg-[#00220e] h-1.5 rounded-full mt-6 overflow-hidden border border-[#1b6c3b]/40">
                  <div className="bg-gradient-to-r from-[#1b6c3b] to-[#a4f5b6] h-full w-[95%] rounded-full"></div>
                </div>
              </div>

              <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#a4f5b6]/20 to-transparent"></div>

              <div className="flex flex-col justify-between group">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#6faf2d] tracking-widest uppercase">METRIC // 03</span>
                  <span className="material-symbols-outlined text-[#6faf2d] text-xl opacity-80 group-hover:scale-110 transition-transform">domain</span>
                </div>
                <div className="font-['Manrope'] text-5xl sm:text-6xl font-extrabold text-white mb-2 tracking-tight">
                  0{counts.divisions}
                </div>
                <div className="font-['Manrope'] text-lg font-bold text-[#a4f5b6] mb-2">Specialized Machine Divisions</div>
                <p className="font-['Inter'] text-xs text-[#eef1ef] opacity-75 leading-relaxed">
                  Dedicated engineering units for Tea Processing, Rubber Compounding, Heavy Conveyors & OEM Spares.
                </p>
                <div className="w-full bg-[#00220e] h-1.5 rounded-full mt-6 overflow-hidden border border-[#1b6c3b]/40">
                  <div className="bg-gradient-to-r from-[#6faf2d] to-[#a4f5b6] h-full w-[100%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW CORPORATE-GRADE TURNKEY MACHINERY LIFECYCLE SECTION */}
      <section className="py-24 bg-gradient-to-b from-[#f7faf8] to-white border-b border-[#c1c9bf]/60 relative overflow-hidden reveal-on-scroll" id="about">
        {/* Subtle decorative radial grid line overlay */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#1b6c3b]/5 to-transparent rounded-full pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-5 md:px-12 relative z-10">
          
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-['Inter'] text-xs font-bold text-[#c8a951] uppercase tracking-widest block mb-3">
              END-TO-END METHODOLOGY
            </span>
            <h2 className="font-['Manrope'] text-3xl md:text-4.5xl font-extrabold text-[#003317] tracking-tight">
              The Turnkey Machinery Lifecycle
            </h2>
            <p className="font-['Inter'] text-base text-[#414941] mt-3 max-w-2xl mx-auto">
              From computer-aided stress simulation to 24/7 on-site emergency field support.
            </p>
          </div>

          {/* Clean Light-Theme Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Stepper Column */}
            <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
              {lifecyclePhases.map((phase, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-6 rounded-xl border text-left transition-all duration-300 flex items-start gap-4 relative ${
                    activeTab === idx
                      ? "bg-white text-[#003317] border-[#1b6c3b] shadow-[0_8px_30px_rgba(0,0,0,0.06)] translate-x-2"
                      : "bg-[#fcfdfd] text-[#414941] border-[#c1c9bf]/55 hover:bg-white hover:border-[#1b6c3b]/60"
                  }`}
                >
                  <span className={`font-mono font-bold text-sm px-2.5 py-1.5 rounded transition-colors ${
                    activeTab === idx ? "bg-[#1b6c3b] text-white" : "bg-[#f1f4f2] text-[#1b6c3b]"
                  }`}>
                    {phase.step}
                  </span>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-['Manrope'] font-bold text-base text-[#003317]">
                        {phase.title}
                      </h3>
                      {activeTab === idx && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c8a951]"></span>
                      )}
                    </div>
                    <p className={`font-['Inter'] text-xs leading-relaxed line-clamp-2 ${
                      activeTab === idx ? "text-[#414941]" : "text-[#414941]/80"
                    }`}>
                      {phase.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Display Card Frame */}
            <div className="lg:col-span-7 bg-white border border-[#c1c9bf]/60 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="font-mono text-xs font-bold text-[#c8a951] uppercase tracking-widest">
                    PHASE {lifecyclePhases[activeTab].step} SPECIFICATION
                  </span>
                  <span className="font-['Inter'] text-[10px] font-bold text-[#1b6c3b] bg-[#ecefec] px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {lifecyclePhases[activeTab].tag}
                  </span>
                </div>

                {/* Main Visual Image frame */}
                <div className="relative rounded-xl overflow-hidden h-64 sm:h-80 border border-[#c1c9bf]/40 mb-6 bg-[#f1f4f2]">
                  <img
                    key={lifecyclePhases[activeTab].image}
                    src={lifecyclePhases[activeTab].image}
                    alt={lifecyclePhases[activeTab].title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003317]/10 to-transparent"></div>
                </div>

                <h3 className="font-['Manrope'] text-2xl font-extrabold text-[#003317] mb-3">
                  {lifecyclePhases[activeTab].title}
                </h3>
                <p className="font-['Inter'] text-sm text-[#414941] leading-relaxed mb-6">
                  {lifecyclePhases[activeTab].desc}
                </p>
              </div>

              {/* Verified Deliverable highlight box */}
              <div className="bg-[#f7faf8] border-l-4 border-[#1b6c3b] p-4 rounded-r-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="font-['Inter'] text-[10px] font-bold text-[#1b6c3b] uppercase tracking-wider block">
                    Verified Deliverable
                  </span>
                  <span className="font-['Manrope'] font-bold text-sm text-[#003317]">
                    {lifecyclePhases[activeTab].deliverable}
                  </span>
                </div>
                <div className="bg-white border border-[#c1c9bf]/60 px-3 py-1 rounded text-[11px] font-['Inter'] font-semibold text-[#414941] uppercase tracking-wider shrink-0">
                  {lifecyclePhases[activeTab].stats}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Core Engineering Divisions */}
      <section className="py-24 bg-[#f7faf8] reveal-on-scroll">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-['Inter'] text-xs font-bold text-[#c8a951] uppercase tracking-widest block mb-3">
              CORE CAPABILITIES
            </span>
            <h2 className="font-['Manrope'] text-3xl md:text-4xl font-bold text-[#003317]">
              Specialized Engineering Divisions
            </h2>
            <p className="font-['Inter'] text-sm text-[#414941] mt-3">
              Purpose-built manufacturing and maintenance infrastructure designed for demanding industrial operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((div, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#c1c9bf] rounded-lg overflow-hidden technical-shadow-hover group flex flex-col h-full reveal-on-scroll"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="h-48 relative overflow-hidden bg-[#ecefec]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={div.image}
                    alt={div.title}
                  />
                  <div className="absolute inset-0 bg-[#003317]/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="material-symbols-outlined text-[#1b6c3b] text-3xl mb-3 block">
                    {div.icon}
                  </span>
                  <h3 className="font-['Manrope'] text-xl font-bold text-[#003317] mb-2">
                    {div.title}
                  </h3>
                  <p className="font-['Inter'] text-sm text-[#414941] leading-relaxed mb-4 flex-grow">
                    {div.desc}
                  </p>
                  <Link
                    href="/products"
                    className="text-xs font-bold text-[#1b6c3b] hover:text-[#003317] inline-flex items-center gap-1 group/link mt-auto"
                  >
                    View Catalog
                    <span className="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: INDUSTRIAL CASE STUDIES & CLIENT TRUST */}
      <section className="py-24 bg-[#0a180e] text-white border-t border-[#1b6c3b]/40 reveal-on-scroll">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-['Inter'] text-xs font-bold text-[#c8a951] uppercase tracking-widest block mb-3">
              VERIFIED PLANT METRICS
            </span>
            <h2 className="font-['Manrope'] text-3xl md:text-4xl font-extrabold text-white">
              Trusted by Leading Industrial Plants
            </h2>
            <p className="font-['Inter'] text-sm text-[#a4f5b6] mt-3">
              Real operational feedback from tea estates and heavy compounding mills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#171b1a] border border-[#a4f5b6]/20 p-8 rounded-2xl shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#a4f5b6]/15">
                    <div>
                      <h3 className="font-['Manrope'] font-bold text-lg text-white">{item.client}</h3>
                      <span className="font-['Inter'] text-xs text-[#a4f5b6]">{item.location}</span>
                    </div>
                    <span className="font-mono text-xs font-bold bg-[#c8a951]/20 text-[#c8a951] border border-[#c8a951]/40 px-3 py-1 rounded-full">
                      {item.metric}
                    </span>
                  </div>

                  <p className="font-['Inter'] text-sm text-[#eef1ef] opacity-90 leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10 text-xs font-['Inter'] text-[#c8a951]">
                  <span className="material-symbols-outlined text-base">verified_user</span>
                  <span>{item.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-[#171b1a] text-white py-20 relative overflow-hidden reveal-on-scroll">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8">
            <span className="text-[#c8a951] font-bold text-xs uppercase tracking-widest block mb-2">
              Turnkey Facility Design & Maintenance
            </span>
            <h2 className="font-['Manrope'] text-3xl md:text-4xl font-bold mb-4">
              Need custom machinery or line overhaul?
            </h2>
            <p className="font-['Inter'] text-base text-[#eef1ef] opacity-85 max-w-2xl leading-relaxed">
              Our application engineers conduct thorough plant audits and specify custom heavy machinery tailored to your output metrics and factory floor layout.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-[#1b6c3b] hover:bg-[#174a2a] text-white font-bold px-8 py-4 rounded text-base transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Request Engineering Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <MobileBottomNav onOpenQuote={() => setIsQuoteOpen(true)} />

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
