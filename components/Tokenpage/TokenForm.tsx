"use client";

import BackButton from "../common/BackButton";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

export default function TokenForm() {
  const router = useRouter();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendMessage, setResendMessage] = useState("");

  // Keep refs for inputs
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // Handle input change
  const handleChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      setError("");

      // Move to next input if a number was entered
      if (value && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  // Handle backspace navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  // Handle verify
  const handleVerify = async () => {
    const enteredCode = code.join("");
    if (enteredCode.length < 6) {
      setError("Please enter the 6-digit token");
      return;
    }

    setLoading(true);
    setError("");

    // Simulate server verification (you can replace with API call)
    setTimeout(() => {
      setLoading(false);
      if (enteredCode === "000000") {
        router.push("/reset"); // <-- change this route to your actual reset password page
      } else {
        setError("Invalid or expired token. Try again.");
      }
    }, 1500);
  };

  // Handle resend token
  const handleResend = () => {
    setResendMessage("Resending token...");
    setTimeout(() => {
      setResendMessage("A new token has been sent to your email.");
      setTimeout(() => setResendMessage(""), 4000);
    }, 1500);
  };

  return (
    <main className="w-full max-w-[512px] sm:min-h-[692px] min-h-screen flex flex-col justify-center items-center bg-black px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px] overflow-hidden">
      {/* Back Button */}
      <div className="w-full max-w-full sm:max-w-[512px] mb-[8px] sm:mb-[5px]">
        <BackButton href="/verify"/>
      </div>

      {/* Form Card */}
      <section className="w-full max-w-full sm:max-w-[90%] md:max-w-[612px] bg-[#2C2C2C] rounded-[12px] py-[16px] sm:py-[10px] px-[16px] sm:px-[20px] md:px-[32px] flex flex-col items-center text-center space-y-[22px] sm:space-y-[21px] md:space-y-[33px]">
        {/* Title */}
        <h1 className="text-[32px] xs:text-[36px] sm:text-[42px] md:text-[26px] lg:text-[30px] font-bold text-[#F5F5F5] leading-tight pt-[20px]">
          Reset Password Token
        </h1>

        {/* Subtitle */}
        <p className="text-[14px] xs:text-[16px] sm:text-[18px] md:text-[14px] lg:text-[15px] text-[#D1D1D1] leading-[20px] sm:leading-[22px]">
          A token has been sent to your email.
        </p>

        {/* Verification Inputs */}
        <div className="flex justify-center items-center w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] gap-[10px]">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) =>{ (inputsRef.current[index] = el)}}
              className="w-[39.146px] h-[39.146px] bg-[#353535] border-[0.89px] border-[#515151] rounded-[5.34px] text-center text-white text-[16px] font-medium outline-none focus:border-[#1D61E7] transition"
            />
          ))}
        </div>

        {/* Error Message */}
        {error && <p className="text-[#FF4D4D] text-[13px] mt-3">{error}</p>}

        {/* Verify Button */}
        <div className="w-full max-w-[306px] sm:max-w-[426px] h-[40px] mt-[20px] mb-[10px]">
          <Button
            onClick={handleVerify}
            disabled={loading}
            className="w-full bg-[#102DC8] text-[#FFFFFF] h-[43px] text-[14px] xs:text-[16px] rounded-[10px]"
          >
            {loading ? "Verifying..." : "Verify"}
          </Button>
        </div>

        {/* Resend Link */}
        <div className="mb-[20px] cursor-pointer">
          <a
            onClick={handleResend}
            className="text-[#FFFFFF] underline hover:text-[#1D61E7] transition"
          >
            Resend
          </a>
          {resendMessage && (
            <p className="text-[#A0A0A0] text-[12px] mt-2">{resendMessage}</p>
          )}
        </div>
      </section>
    </main>
  );
}
