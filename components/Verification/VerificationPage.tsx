"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
  verifyEstateEmail,
  resendVerificationCode,
} from "@/lib/api/estate";
import { getApiErrorMessage } from "@/lib/api/handleApiError";

export default function VerificationPage() {
  const router = useRouter();

  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState<number>(600); // 10 minutes

  // Load email from sessionStorage
  useEffect(() => {
    const savedEmail = sessionStorage.getItem("estateEmail");
    if (savedEmail) setEmail(savedEmail);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (secondsLeft <= 0) return;
    const interval = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;
    const updated = [...code];
    updated[index] = value;
    setCode(updated);
    if (value && index < 5) document.getElementById(`code-${index + 1}`)?.focus();
  };

  const handleVerify = async () => {
    const verificationToken = code.join("");
    if (verificationToken.length !== 6) {
      setError("Enter the 6-digit verification code");
      return;
    }
    if (secondsLeft <= 0) {
      setError("Verification code expired. Please resend.");
      return;
    }
    try {
      setLoading(true);
      setError("");
      await verifyEstateEmail({ verificationToken, });

      sessionStorage.removeItem("estateEmail");
      router.push("/dashboard");
    } catch (err: unknown) {
      setError(getApiErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      setError("Email not found. Please register again.");
      return;
    }
    try {
      setResending(true);
      setError("");
      await resendVerificationCode({ email });
      setSecondsLeft(600); // reset 10 min timer
      alert("A new verification code has been sent to your email.");
    } catch (err: unknown) {
      setError(getApiErrorMessage(err));
    } finally {
      setResending(false);
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-black px-[16px]">
      <section className="bg-[#2C2C2C] rounded-[12px] p-[32px] text-center">
        <h1 className="text-[32px] font-bold text-[#F5F5F5]">Verify your Email</h1>
        <p className="text-[#D1D1D1]">A token has been sent to your email</p>

        <div className="flex gap-[10px] justify-center mt-[20px]">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-[40px] h-[40px] text-center bg-[#353535] text-white rounded"
            />
          ))}
        </div>

        {error && <p className="text-[#FF4D4D] text-[13px] mt-3">{error}</p>}
        {secondsLeft > 0 && (
          <p className="text-[#D1D1D1] text-[13px] mt-2">
            Code expires in: {Math.floor(secondsLeft / 60)}:
            {String(secondsLeft % 60).padStart(2, "0")}
          </p>
        )}

        <Button
          onClick={handleVerify}
          disabled={loading || secondsLeft <= 0}
          className="w-full bg-[#102DC8] text-white mt-[20px]"
        >
          {loading ? "Verifying..." : "Verify"}
        </Button>

        <p
          onClick={handleResend}
          className="text-[#1D61E7] text-sm mt-[14px] cursor-pointer"
        >
          {resending ? "Resending..." : "Resend code"}
        </p>
      </section>
    </main>
  );
}
