"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function AICampaign() {
  const [loading, setLoading] = useState(false);
  const [campaign, setCampaign] = useState("");

  const generateCampaign = async () => {
    setLoading(true);

    setTimeout(() => {
      setCampaign(`
🔥 Headline:
Boost Your Sales in 7 Days with AI Optimization

📝 Description:
Our AI-powered system analyzes your store data and creates high-converting ads automatically.

🚀 CTA:
Start Scaling Now
      `);

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex bg-[#0F0F1A] text-white min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-purple-400 mb-8">
          AI Campaign Generator
        </h1>

        <button
          onClick={generateCampaign}
          className="bg-purple-600 hover:bg-purple-700 transition-all px-6 py-3 rounded-xl font-semibold"
        >
          {loading ? "Generating..." : "Generate AI Campaign"}
        </button>

        {campaign && (
          <div className="mt-8 bg-purple-900/20 p-6 rounded-2xl shadow-lg whitespace-pre-line">
            {campaign}
          </div>
        )}
      </div>
    </div>
  );
}
