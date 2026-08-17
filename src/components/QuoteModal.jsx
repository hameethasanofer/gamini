"use client";

import { useState } from "react";

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Tea Machinery",
    requirements: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 md:p-8 relative border border-[#c1c9bf]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#717971] hover:text-[#181c1b] p-1"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <span className="material-symbols-outlined text-5xl text-[#1b6c3b] mb-4">check_circle</span>
            <h3 className="font-['Manrope'] text-2xl font-bold text-[#003317] mb-2">Quote Request Received!</h3>
            <p className="font-['Inter'] text-sm text-[#414941]">
              Our engineering team will review your specifications and contact you shortly.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-[#c8a951] font-bold text-xs uppercase tracking-widest block mb-1">
                Precision Engineering Consultation
              </span>
              <h3 className="font-['Manrope'] text-2xl font-bold text-[#003317]">
                Request a Custom Technical Quote
              </h3>
              <p className="font-['Inter'] text-xs text-[#414941] mt-1">
                Provide details about your industrial equipment or facility requirements.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-['Inter']">
              <div>
                <label className="block text-xs font-semibold text-[#181c1b] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarath Perera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 border border-[#c1c9bf] rounded text-sm focus:outline-none focus:border-[#1b6c3b]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#181c1b] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 border border-[#c1c9bf] rounded text-sm focus:outline-none focus:border-[#1b6c3b]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#181c1b] mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+94 77 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 border border-[#c1c9bf] rounded text-sm focus:outline-none focus:border-[#1b6c3b]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#181c1b] mb-1">Engineering Division</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2 border border-[#c1c9bf] rounded text-sm focus:outline-none focus:border-[#1b6c3b] bg-white"
                >
                  <option>Tea Machinery</option>
                  <option>Rubber Machinery</option>
                  <option>Conveyor Systems</option>
                  <option>Local Agency & Parts</option>
                  <option>Custom Turnkey Engineering</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#181c1b] mb-1">Project Specifications</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your machinery needs, throughput capacity, or technical requirements..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full px-3.5 py-2 border border-[#c1c9bf] rounded text-sm focus:outline-none focus:border-[#1b6c3b]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-[#414941] hover:text-[#181c1b]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#1b6c3b] hover:bg-[#174a2a] text-white font-semibold text-sm rounded shadow transition-all"
                >
                  Submit Quote Request
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
