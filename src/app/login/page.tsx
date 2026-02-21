"use client";

export default function LoginPage() {
  return (
    <div
      style={{
        background: "#0F0F1A",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          background: "#1A1A2E",
          padding: "40px",
          borderRadius: "16px",
          width: "320px",
          border: "1px solid #6D28D9",
        }}
      >
        <h2 style={{ color: "#8B5CF6", marginBottom: "20px" }}>
          تسجيل الدخول إلى نكسورا 🚀
        </h2>

        <input
          placeholder="البريد الإلكتروني"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <button
          style={{
            width: "100%",
            background: "#6D28D9",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          تسجيل الدخول
        </button>
      </div>
    </div>
  );
}
