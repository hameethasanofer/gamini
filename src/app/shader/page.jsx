"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShaderBackground from "@/components/ShaderBackground";
import QuoteModal from "@/components/QuoteModal";

export default function ShaderPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("preview");

  const fragmentShaderCode = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

void main() {
    vec2 uv = v_texCoord;
    
    // Create a subtle technical grid pattern
    vec2 grid = fract(uv * 40.0);
    float line = smoothstep(0.02, 0.0, grid.x) + smoothstep(0.02, 0.0, grid.y);
    
    // Create slow-moving dark green industrial waves
    float noise = sin(uv.x * 3.0 + u_time * 0.2) * cos(uv.y * 2.0 - u_time * 0.15);
    vec3 color1 = vec3(0.09, 0.29, 0.16); // #174A2A Primary Dark Green
    vec3 color2 = vec3(0.05, 0.10, 0.08); // Deep Charcoal
    
    vec3 finalColor = mix(color1, color2, noise * 0.5 + 0.5);
    finalColor += line * 0.05; // Add subtle grid lines
    
    gl_FragColor = vec4(finalColor, 1.0);
}`;

  return (
    <>
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      <main className="pt-24 pb-16 bg-[#171b1a] min-h-screen text-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12">
          {/* Header */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[#c8a951] font-bold text-xs uppercase tracking-widest block mb-1">
                Stitch Screen 2 • ID: 4ae0d247b8964b6598804aafdee1ea34
              </span>
              <h1 className="font-['Manrope'] text-3xl md:text-4xl font-extrabold text-white">
                Industrial WebGL Shader Animation
              </h1>
              <p className="font-['Inter'] text-sm text-[#eef1ef] opacity-80 mt-1">
                Real-time GPU-accelerated fragment shader rendering dark green industrial waves and technical grid overlays.
              </p>
            </div>

            <div className="flex bg-[#2d3130] p-1 rounded-lg border border-[#717971]">
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-4 py-1.5 rounded text-xs font-bold transition-colors ${activeTab === "preview" ? "bg-[#1b6c3b] text-white" : "text-[#e0e3e1] hover:text-white"
                  }`}
              >
                Live Canvas
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`px-4 py-1.5 rounded text-xs font-bold transition-colors ${activeTab === "code" ? "bg-[#1b6c3b] text-white" : "text-[#e0e3e1] hover:text-white"
                  }`}
              >
                GLSL Code
              </button>
            </div>
          </div>

          {/* Interactive Stage */}
          {activeTab === "preview" ? (
            <div className="relative w-full h-[600px] rounded-xl overflow-hidden border border-[#c1c9bf]/30 shadow-2xl">
              <ShaderBackground className="absolute inset-0 w-full h-full" />
              <div className="absolute bottom-6 left-6 right-6 bg-[#171b1a]/80 backdrop-blur-md p-4 rounded border border-[#717971] flex flex-col md:flex-row items-center justify-between gap-4 z-10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#a4f5b6]">auto_awesome</span>
                  <div>
                    <h4 className="font-['Manrope'] font-bold text-sm text-white">Interactive WebGL Shader</h4>
                    <p className="font-['Inter'] text-xs text-[#eef1ef] opacity-80">
                      Move your cursor across the canvas to interact with mouse coordinate uniforms.
                    </p>
                  </div>
                </div>
                <div className="text-xs font-mono text-[#a4f5b6] bg-[#003317] px-3 py-1.5 rounded border border-[#1b6c3b]">
                  60 FPS • WebGL 1.0 Context
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#003317] p-6 rounded-xl border border-[#1b6c3b] font-mono text-sm overflow-x-auto text-[#a4f5b6] shadow-2xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1b6c3b]">
                <span className="text-white text-xs font-bold font-sans">Fragment Shader (GLSL ES 1.0)</span>
                <span className="text-xs text-[#c8a951] font-sans">Source: shader.html</span>
              </div>
              <pre>{fragmentShaderCode}</pre>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
