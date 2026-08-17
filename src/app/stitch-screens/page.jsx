"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function StitchScreensPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedScreenId, setSelectedScreenId] = useState("74c28669bde040f392531be27da4efdd");
  const [viewMode, setViewMode] = useState("screenshot"); // "screenshot" | "html"

  const stitchProject = {
    title: "Gamini Engineering Premium Redesign",
    id: "5839272847274354685",
  };

  const screens = [
    {
      index: 1,
      title: "Design System",
      id: "asset-stub-assets_c75dea4202d3449ba7541d8afc3af7cb",
      deviceType: "AGNOSTIC",
      imageLocal: "/stitch_screens/design_system_thumb.png",
      imageUrl: "https://lh3.googleusercontent.com/aida/AP1WRLsnOqQIYG_e755xn1_MW5BC5WgN4xelSBgTB3mHg-wntANXRVE4uHzQayxlP91IjWtbzkvRRltYCP2lVLX7lHXlo0vGHyC3MUdYFOhdgx5OXVBz_unj8U6JbVIAoQhhPHIZLL4Aon_rS7SZZin-6RFK-2B7exkLktXskaVcGrl8X-EUbWNBHS4HRFamu3237FI8P1YsCoVvWGzVtlKLnSAmDISBUiHmwfNxq-oPUHSQLVc7vgb4S16GTio",
      htmlFile: null,
      htmlUrl: null,
      description: "Industrial Excellence Framework specifying colors, typography, layout grid, elevation layers, and component styles."
    },
    {
      index: 2,
      title: "Shader",
      id: "4ae0d247b8964b6598804aafdee1ea34",
      deviceType: "AGNOSTIC",
      imageLocal: null,
      imageUrl: null,
      htmlFile: "/stitch_screens/shader.html",
      htmlUrl: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1OTNiYjI0MDllODEwN2M0YzU4NzU0MGY1ZTM5EgsSBxDzlrmLvAcYAZIBIwoKcHJvamVjdF9pZBIVQhM1ODM5MjcyODQ3Mjc0MzU0Njg1&filename=&opi=89354086",
      description: "Custom WebGL GLSL fragment shader rendering smooth dark green industrial wave animations with grid lines."
    },
    {
      index: 3,
      title: "Home Page (Mobile)",
      id: "8da5727ac2b143d9bb3ce95ec62694f5",
      deviceType: "MOBILE",
      imageLocal: "/stitch_screens/home_mobile.png",
      imageUrl: "https://lh3.googleusercontent.com/aida/AP1WRLv9hZkmJ28GQ_bv0SF2NFptcrp90ZOb4Sqvxag__SmVjNk9Vzxy_DSDAf1iDbmQtQUFVVwm-bSl3UIHb-X58xnvqZZDX-YXp3l8RukyyXXAFa4B7qNU02aPRVW4hTc2iOq_5sK8hYnO5AclObG-Y6LzoLeERRVDmC96SrVlu2yfrvEY9ndaVYRePvdYn75bBPTCnbzLQA5Q_9PK77gWoMpbXCSH9DH9zODpqSAl6h-O45m3V9UXV93N1ks",
      htmlFile: "/stitch_screens/home_mobile.html",
      htmlUrl: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1OTNiYzY1MTZiMWQwN2M0ZTJkMzgzMzYwMGI1EgsSBxDzlrmLvAcYAZIBIwoKcHJvamVjdF9pZBIVQhM1ODM5MjcyODQ3Mjc0MzU0Njg1&filename=&opi=89354086",
      description: "Mobile viewport layout for the main homepage featuring responsive touch navbar, hero section, and vertical cards."
    },
    {
      index: 4,
      title: "Products & Services Page",
      id: "65552036b48248f7b65d8d6290de1fb6",
      deviceType: "DESKTOP",
      imageLocal: "/stitch_screens/products_desktop.png",
      imageUrl: "https://lh3.googleusercontent.com/aida/AP1WRLsw8JdU_7MiI9_mxJyPoIRW3GstdU0DD-jmp47Z2Uf-LzH1BbPOngLAnH7yMgWOgGL07H5bBuihxSToweV-TigFgl-rHKjccB6MpbiaSIdqaifWU5e_KDfQWcQwkWqgEvsVMTd5uE8XZOOQbLfIcm8tSQs1XnatOWQIE_d6aifFng_MAFew1b8mhQD9lr_jje-OscOJcWJE7wYGjPpBMv8YgzQGu-jcqirQaGgUhCoVnUWKx9YnfGdhiwk",
      htmlFile: "/stitch_screens/products_desktop.html",
      htmlUrl: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1OTNiYzVhMDliZWYwMWE2MmY3MjZhMmZjN2MxEgsSBxDzlrmLvAcYAZIBIwoKcHJvamVjdF9pZBIVQhM1ODM5MjcyODQ3Mjc0MzU0Njg1&filename=&opi=89354086",
      description: "Desktop view for products catalog with sticky filter toolbar, search input, 3-column product grid, and helpline CTA."
    },
    {
      index: 5,
      title: "Products & Services (Mobile)",
      id: "60b69b09c69e4151baedb62fb7fd2a86",
      deviceType: "MOBILE",
      imageLocal: "/stitch_screens/products_mobile.png",
      imageUrl: "https://lh3.googleusercontent.com/aida/AP1WRLt7ZBIZFgdAgMWBdjUcUkYOd9Am2cbbA6pWV4_58H_Elh91spMInW18EIhxq2ZGul4USzNuFf6vjOZCBj_kHc_Uh0HoCbbzj27YfGAvZQDBeo_ewkbq9Hto7us0hOz-XvAamwGvyUML9SofidM1twt57RIjS8iks9KIL1ZxhWQpMQ52nfB5yXlpjmZ8focXcqw1mU2cH73PjcVyVPyvEQy9BQi0xocLqG9wAtt1d-5mLPdhWZPTPOFisw",
      htmlFile: "/stitch_screens/products_mobile.html",
      htmlUrl: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1OTNiYzYxMmMwN2YwMWVlNjg5NTBmMTY1ZThjEgsSBxDzlrmLvAcYAZIBIwoKcHJvamVjdF9pZBIVQhM1ODM5MjcyODQ3Mjc0MzU0Njg1&filename=&opi=89354086",
      description: "Mobile viewport layout for the products catalog with horizontal scroll filter pills and single-column product cards."
    },
    {
      index: 6,
      title: "Home Page",
      id: "74c28669bde040f392531be27da4efdd",
      deviceType: "DESKTOP",
      imageLocal: "/stitch_screens/home_desktop.png",
      imageUrl: "https://lh3.googleusercontent.com/aida/AP1WRLv2fdZ0G_upVxCeIiD_6LSIDGjED2crSMsDhYguppLGXSdoM8KTp2LXn8OeG7sul-YHHFHP0Issddq4jXOXCA011B2kPoBhwvkVxD4X87y8jzZEw9rUC_Pf2M9sanvovaR3ETCmhx_QGFZhOBTamTK15e1a8JxelO2hAz6olHhiBD7T8aLS1JXDpQamJ94VS4TkLDiQITr2rfAWRIcq9gI8BBRDuqJMml9Xq9rayup4zNHdjzJfRS9w7h4",
      htmlFile: "/stitch_screens/home_desktop.html",
      htmlUrl: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1OTNiYzVkNmM5ZDMwMzMyZmE3MzU5MTlkYjNiEgsSBxDzlrmLvAcYAZIBIwoKcHJvamVjdF9pZBIVQhM1ODM5MjcyODQ3Mjc0MzU0Njg1&filename=&opi=89354086",
      description: "Desktop view for main homepage featuring high-contrast hero image, stat counters, 4-column engineering division grid, and footer."
    }
  ];

  const currentScreen = screens.find((s) => s.id === selectedScreenId) || screens[5];

  return (
    <>
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      <main className="pt-28 pb-20 bg-[#f7faf8] min-h-screen text-[#181c1b]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12">
          {/* Header Metadata */}
          <div className="mb-8 p-6 bg-white border border-[#c1c9bf] rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[#c8a951] font-bold text-xs uppercase tracking-widest block mb-1">
                  Stitch Project Inspector
                </span>
                <h1 className="font-['Manrope'] text-2xl md:text-3xl font-extrabold text-[#003317]">
                  {stitchProject.title}
                </h1>
                <p className="font-mono text-xs text-[#414941] mt-1">
                  Project ID: <span className="text-[#1b6c3b] font-bold">{stitchProject.id}</span> • Total Screens: 6
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-[#717971]">Download Status:</span>
                <span className="bg-[#a4f5b6] text-[#003317] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">cloud_done</span>
                  All Assets Cached via curl -L
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Screen List Sidebar */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="font-['Manrope'] text-lg font-bold text-[#003317] mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1b6c3b]">devices</span>
                Project Screens ({screens.length})
              </h3>

              {screens.map((screen) => {
                const isSelected = screen.id === selectedScreenId;
                return (
                  <button
                    key={screen.id}
                    onClick={() => {
                      setSelectedScreenId(screen.id);
                      if (!screen.imageLocal && viewMode === "screenshot") {
                        setViewMode("html");
                      }
                    }}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${isSelected
                        ? "bg-[#003317] text-white border-[#003317] shadow-md"
                        : "bg-white text-[#181c1b] border-[#c1c9bf] hover:border-[#1b6c3b] hover:shadow-sm"
                      }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-['Manrope'] font-bold text-sm">
                        {screen.index}. {screen.title}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase font-mono ${isSelected
                            ? "bg-[#a4f5b6] text-[#003317]"
                            : "bg-[#f1f4f2] text-[#414941]"
                          }`}
                      >
                        {screen.deviceType}
                      </span>
                    </div>
                    <p
                      className={`text-xs truncate ${isSelected ? "text-[#eef1ef] opacity-80" : "text-[#414941]"
                        }`}
                    >
                      ID: {screen.id}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Screen Detail Preview Area */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-[#c1c9bf] rounded-lg overflow-hidden shadow-md">
                {/* Screen Header Bar */}
                <div className="p-5 border-b border-[#c1c9bf] bg-[#f1f4f2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="font-['Manrope'] text-xl font-bold text-[#003317]">
                      {currentScreen.title}
                    </h2>
                    <p className="font-['Inter'] text-xs text-[#414941] mt-0.5">
                      {currentScreen.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {currentScreen.imageLocal && (
                      <button
                        onClick={() => setViewMode("screenshot")}
                        className={`px-3 py-1.5 rounded text-xs font-bold transition-colors ${viewMode === "screenshot"
                            ? "bg-[#1b6c3b] text-white"
                            : "bg-white text-[#414941] border border-[#c1c9bf]"
                          }`}
                      >
                        Screenshot
                      </button>
                    )}
                    {currentScreen.htmlFile && (
                      <button
                        onClick={() => setViewMode("html")}
                        className={`px-3 py-1.5 rounded text-xs font-bold transition-colors ${viewMode === "html"
                            ? "bg-[#1b6c3b] text-white"
                            : "bg-white text-[#414941] border border-[#c1c9bf]"
                          }`}
                      >
                        HTML Frame
                      </button>
                    )}
                  </div>
                </div>

                {/* Resource URLs */}
                <div className="p-4 bg-[#ecefec] border-b border-[#c1c9bf] text-xs space-y-1.5 font-mono">
                  {currentScreen.imageUrl && (
                    <div className="flex items-center justify-between gap-2 overflow-hidden">
                      <span className="text-[#414941] font-bold">Screenshot Hosted URL:</span>
                      <a
                        href={currentScreen.imageUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#1b6c3b] underline truncate hover:text-[#003317]"
                      >
                        {currentScreen.imageUrl}
                      </a>
                    </div>
                  )}
                  {currentScreen.htmlUrl && (
                    <div className="flex items-center justify-between gap-2 overflow-hidden">
                      <span className="text-[#414941] font-bold">HTML Hosted URL:</span>
                      <a
                        href={currentScreen.htmlUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#1b6c3b] underline truncate hover:text-[#003317]"
                      >
                        {currentScreen.htmlUrl}
                      </a>
                    </div>
                  )}
                </div>

                {/* Main Preview Container */}
                <div className="p-6 bg-[#f7faf8] flex items-center justify-center min-h-[500px]">
                  {viewMode === "screenshot" && currentScreen.imageLocal ? (
                    <div className="max-w-full overflow-auto max-h-[700px] border border-[#c1c9bf] rounded shadow-lg bg-white p-2">
                      <img
                        src={currentScreen.imageLocal}
                        alt={currentScreen.title}
                        className="w-full object-contain mx-auto"
                      />
                    </div>
                  ) : currentScreen.htmlFile ? (
                    <div className="w-full h-[650px] border border-[#c1c9bf] rounded overflow-hidden shadow-lg bg-white">
                      <iframe
                        src={currentScreen.htmlFile}
                        className="w-full h-full border-none"
                        title={currentScreen.title}
                      />
                    </div>
                  ) : (
                    <div className="text-center py-20">
                      <span className="material-symbols-outlined text-5xl text-[#c8a951] mb-2">style</span>
                      <h3 className="font-['Manrope'] text-lg font-bold text-[#003317]">Design System Asset Token</h3>
                      <p className="font-['Inter'] text-sm text-[#414941] mt-1 max-w-md mx-auto">
                        This item represents the global design system token asset (Industrial Excellence Framework). View the full interactive specifications on the Design System page.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
