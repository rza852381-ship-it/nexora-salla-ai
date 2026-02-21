"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        background: "#0F0F1A",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "40px", color: "#8B5CF6" }}>
        Nexora AI 🚀
      </h1>

      <Link
        href="/ai-campaign"
        style={{
          marginTop: "30px",
          background: "#6D28D9",
          padding: "14px 28px",
          borderRadius: "12px",
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Launch AI Campaign
      </Link>
    </div>
  );
}
