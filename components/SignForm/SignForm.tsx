"use client";

import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { loginEstate } from "@/lib/api/estate"; 
import type { LoginEstatePayload } from "@/lib/api/estate";

export default function SignForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<LoginEstatePayload>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await loginEstate(formData); // ✅ use estate.ts API
      const { token, estate } = response.data;

      // ✅ Store auth data safely
      localStorage.setItem("estateToken", token);
      localStorage.setItem("estate", JSON.stringify(estate));

      // ✅ Redirect to dashboard after successful login
      router.push("/dashboard");
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to login. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-[544px] max-w-[512px] sm:min-h-[692px] flex justify-center items-center bg-[#2C2C2C] rounded-[12px] px-[54px] sm:px-[64px] md:px-[40px] lg:px-0">
      <main className="w-full max-w-full sm:max-w-[500px] border-[#3D3D3D] sm:px-[24px] md:px-[32px] lg:px-[40px] py-[32px] sm:py-[40px] flex flex-col items-center justify-center space-y-[20px] sm:space-y-[20px]">

        {/* Title */}
        <div className="flex flex-col items-center text-center text-[#F5F5F5] space-y-[12px] sm:space-y-[14px] md:space-y-[18px] lg:space-y-[20px] w-full max-w-full sm:max-w-[426px]">
          <span className="text-[36px] xs:text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[38px] font-bold leading-tight">
            Sign in
          </span>
          <span className="text-[36px] xs:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold leading-tight">
            to your estate account
          </span>
          <span className="text-[18px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-[#D1D1D1]">
            Enter your details to proceed
          </span>
        </div>

        {/* Form */}
        <form className="space-y-[16px] sm:space-y-[16px] md:space-y-[20px] w-full flex flex-col">

          {/* Email */}
          <div className="w-full max-w-full sm:max-w-[426px]">
            <div className="pb-[8px] sm:pb-[8px] md:pb-[10px] text-[#FFFFFF] text-[12px] xs:text-[13px] sm:text-[14px]">
              Email Address
            </div>
            <div className="relative mt-[4px] sm:mt-[8px]">
              <Mail
                className="absolute left-[12px] xs:left-[10px] sm:left-[12px] top-1/2 -translate-y-1/2 pointer-events-none z-[40px]"
                width={14}
                height={14}
                style={{ width: 'clamp(14px, 4vw, 16px)', height: 'clamp(14px, 4vw, 16px)' }}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email Address"
                className="w-full h-[40px] xs:h-[42px] sm:h-[44px] xs:pl-[38px] sm:pl-[41px] bg-transparent text-white border border-gray-600 rounded-[8px] text-[12px] xs:text-[13px] sm:text-[14px] focus:border-[#1D61E7] outline-none indent-[38px]"
              />
            </div>
          </div>

          {/* Password */}
          <div className="w-full max-w-full sm:max-w-[426px]">
            <div className="pb-[8px] sm:pb-[8px] md:pb-[10px] text-[#FFFFFF] text-[12px] xs:text-[13px] sm:text-[14px]">
              Your Password
            </div>
            <div className="relative mt-[4px] sm:mt-[8px]">
              <Lock
                className="absolute left-[12px] xs:left-[10px] sm:left-[12px] top-1/2 -translate-y-1/2 pointer-events-none z-[40px]"
                width={16}
                height={16}
                style={{ width: 'clamp(16px, 4vw, 18px)', height: 'clamp(16px, 4vw, 18px)' }}
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full h-[40px] xs:h-[42px] sm:h-[44px]  xs:pl-[38px] sm:pl-[41px]  bg-[#3D3D3D] text-white border border-gray-600 rounded-[8px] text-[12px] xs:text-[13px] sm:text-[14px] focus:border-[#1D61E7] outline-none indent-[38px]"
              />
              <a
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[8px] xs:right-3 sm:right-[12px] top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff width={16} height={16} style={{ width: 'clamp(16px, 4vw, 18px)', height: 'clamp(16px, 4vw, 18px)' }} />
                ) : (
                  <Eye width={16} height={16} style={{ width: 'clamp(16px, 4vw, 18px)', height: 'clamp(16px, 4vw, 18px)' }} />
                )}
              </a>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-[#FF4D4D] text-[13px] text-center">{error}</p>
          )}

          {/* Remember / Forgot */}
          <div className="w-full flex flex-row justify-between items-center text-[11px] xs:text-[12px] sm:text-[13px] mt-[-4px] sm:mt-[-6px] md:mt-[-10px] gap-2 text-center">
            <label className="flex items-center text-[#D1D1D1]">
              <input type="checkbox" className="accent-[#1D61E7]" />
              <span className="ml-2">Remember me</span>
            </label>

            <a
              type="button"
              onClick={() => router.push("/forgotpassword")}
              className="text-[#1D61E7] cursor-pointer"
            >
              Forgot password?
            </a>
          </div>

          {/* Buttons */}
          <div className="w-full space-y-[20px] sm:space-y-[35px] mx-auto mt-[20px]">
            <Button
              type="button"
              onClick={handleLogin}
              disabled={loading}
              className="max-w-full sm:max-w-[465px] w-full h-[42px] xs:h-[44px] sm:h-[46px] bg-[#1D61E7] text-white text-[13px] xs:text-[14px] sm:text-[15px] rounded-[10px] hover:bg-[#1548b5]"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>

            <Button
              type="button"
              onClick={() => router.push("/auth/register")}
              className="text-[12px] xs:text-[13px] sm:text-[14px] flex flex-col justify-center items-center text-[#FFFFFF] hover:underline bg-transparent border-none p-0 mx-auto"
            >
              Create Account
            </Button>
          </div>
        </form>
      </main>
    </section>
  );
}
