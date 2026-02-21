"use client";

import { useState } from "react";

export default function AICampaignPage() {
  const [generatedText, setGeneratedText] = useState("");

  const generateAd = () => {
    setGeneratedText(
      "🚀 اكتشف أفضل الحلول التسويقية مع Nexora AI!\nضاعف مبيعاتك ووسع انتشارك الآن بطريقة ذكية ومبتكرة."
    );
  };

  return (
    <div
      style={{
        background: "#0F0F1A",
        minHeight: "100vh",
        padding: "40px",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ color: "#8B5CF6", fontSize: "32px" }}>
        Nexora AI Dashboard
      </h1>

      {/* Stats Section */}
      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        {["Active Campaigns: 4", "Clicks: 1,240", "Conversions: 87"].map(
          (stat, i) => (
            <div
