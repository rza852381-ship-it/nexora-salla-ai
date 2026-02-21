"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function AICampaign() {
  const [loading, setLoading] = useState(false);
  const [campaign, setCampaign] = useState<string | null>(null);

  const generateCampaign = () => {
    setLoading(true);

    setTimeout(() => {
      setCampaign(`🔥 Headline:
Boost Your Store Sales with AI

📝 Description:
Nexora AI analyzes your Salla store and creates high-converting ads automatically.

🎯 Target:
Smart segmentation based on customer behavior.

🚀 CTA:
Launch Campaign Now`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ display: "flex", background: "#0F0F1A", color: "white", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "40px" }}>
        <h1 style={{ fontSize: "28px", color: "#8B5CF6", marginBottom: "30px" }}>
          AI Campaign Generator
        </h1>

        <button
          onClick={generateCampaign}
          style={{
            background: "#6D28D9",
            padding: "12px 24px",
            borderRadius: "12px",
            border: "none",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {loading ? "Generating..." : "Generate AI Campaign"}
        </button>

        {campaign && (
          <div
            style={{
              marginTop: "30px",
              background: "rgba(139, 92, 246, 0.1)",
              padding: "20px",
              borderRadius: "16px",
              whiteSpace: "pre-line",
            }}
          >
            {campaign}
          </div>
        )}
      </div>
    </div>
  );
}
