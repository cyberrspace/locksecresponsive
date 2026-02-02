"use client";

import { useRouter, useSearchParams } from "next/navigation";
import BackButton from "./common/BackButton";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

import { resendVerificationCode } from "@/lib/api/estate";
import { getApiErrorMessage } from "@/lib/api/handleApiError";

export default function ResetForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ✅ DYNAMIC EMAIL FROM URL
  const email = searchParams.get("email");

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      password: "",
      confirmPassword: "",
    };

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return !newErrors.password && !newErrors.confirmPassword;
  };

  /* =========================
     RESEND VERIFICATION CODE
  ========================= */
  const handleResendCode = async () => {
    if (!email) {
      setApiError("Email is missing. Please restart the process.");
      return;
    }

    try {
      setLoading(true);
      setApiError("");

      await resendVerificationCode({ email });
    } catch (err: unknown) {
      setApiError(getApiErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);
      setApiError("");

      // 🔒 Reset password API will go here

      router.push("/dashboard");
    } catch (err: unknown) {
      setApiError(getApiErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full max-w-[512px] sm:min-h-[692px] min-h-screen flex flex-col justify-center items-center bg-black px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px]">
      {/* Back Button */}
      <div className="w-full max-w-full sm:max-w-[512px] mb-[8px] sm:mb-[5px]">
        <BackButton href="/signup" />
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-full sm:max-w-[90%] md:max-w-[612px] bg-[#2C2C2C] rounded-[12px] py-[16px] sm:py-[10px] px-[16px] sm:px-[20px] md:px-[32px] flex flex-col items-center text-center space-y-[22px] sm:space-y-[21px] md:space-y-[33px]"
      >
        {/* Title */}
        <h1 className="text-[32px] xs:text-[36px] sm:text-[42px] md:text-[26px] lg:text-[30px] font-bold text-[#F5F5F5] leading-tight pt-[10px]">
          Reset password
        </h1>

        {/* Subtitle */}
        <p className="text-[14px] xs:text-[16px] sm:text-[18px] md:text-[14px] lg:text-[15px] text-[#D1D1D1] leading-[20px] sm:leading-[22px]">
          Create a new password
        </p>

        {/* API Error */}
        {apiError && (
          <p className="text-[#FF4D4D] text-[13px]">{apiError}</p>
        )}

        {/* New Password Input */}
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[426px] text-left">
            <label className="block mb-[4px] text-[#BDBDBD] text-[14px]">
              New Password
            </label>

            <div className="relative">
              <Lock className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#BDBDBD]" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                className="w-full h-[39px] bg-[#2C2C2C] border border-[#515151] rounded pl-[44px] pr-[40px] text-[#BDBDBD]"
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-[12px] mt-1">
                {errors.password}
              </p>
            )}
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[426px] text-left">
            <label className="block mb-[4px] text-[#BDBDBD] text-[14px]">
              Re-enter Password
            </label>

            <div className="relative">
              <Lock className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#BDBDBD]" />
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full h-[39px] bg-[#2C2C2C] border border-[#515151] rounded pl-[44px] pr-[40px] text-[#BDBDBD]"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-[12px] mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="w-full max-w-[426px] space-y-3">
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#102DC8] text-white h-[40px] rounded-[10px]"
          >
            {loading ? "Processing..." : "Reset Password"}
          </Button>

          <button
            type="button"
            onClick={handleResendCode}
            disabled={loading}
            className="text-[#1D61E7] text-[14px] underline"
          >
            Resend verification code
          </button>
        </div>
      </form>
    </main>
  );
}

export { };
