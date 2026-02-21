"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");
  const router = useRouter();

  const sendOtp = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
    });

    if (error) {
      alert("في خطأ أثناء الإرسال 😢");
    } else {
      setStep("otp");
      alert("تم إرسال رمز التحقق لبريدك 💜");
    }
  };

  const verifyOtp = async () => {
    const { error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: "email",
    });

    if (error) {
      alert("رمز غير صحيح 😢");
    } else {
      alert("تم تسجيل الدخول 🎉");
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gradient-to-br from-purple-900 to-black p-8 rounded-2xl w-96 shadow-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-purple-400">
          Nexora AI
        </h1>

        {step === "email" && (
          <>
            <input
              type="email"
              placeholder="ادخلي ايميلك"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-900 border border-purple-700 mb-4"
            />
            <button
              onClick={sendOtp}
              className="w-full bg-purple-600 hover:bg-purple-700 transition p-3 rounded-lg"
            >
              إرسال رمز التحقق
            </button>
          </>
        )}

        {step === "otp" && (
          <>
            <input
              type="text"
              placeholder="ادخلي رمز التحقق"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-900 border border-purple-700 mb-4"
            />
            <button
              onClick={verifyOtp}
              className="w-full bg-purple-600 hover:bg-purple-700 transition p-3 rounded-lg"
            >
              تحقق ودخول
            </button>
          </>
        )}
      </div>
    </div>
  );
}
