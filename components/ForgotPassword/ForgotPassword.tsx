"use client";
import { useRouter } from "next/navigation";
import BackButton from "../common/BackButton";
import { Mail } from "lucide-react";
import { Button } from "../ui/button";

export default function ForgotPassword() {
  const router = useRouter();
   
  return (
    <main className="w-full max-w-[512px] sm:min-h-[692px]  min-h-screen flex flex-col justify-center items-center bg-black px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px]">
      {/* Back Button */}
      <div className="w-full max-w-full sm:max-w-[512px] mb-[8px] sm:mb-[5px]">
        <BackButton href="/signup"  />
      </div>

      {/* Form Card */}
      <section className="w-full max-w-full sm:max-w-[90%] md:max-w-[612px] bg-[#2C2C2C] rounded-[12px] py-[16px] sm:py-[10px] px-[16px] sm:px-[20px] md:px-[32px] flex flex-col items-center text-center space-y-[22px] sm:space-y-[21px] md:space-y-[33px] ">
      
        {/* Title */}
        <h1 className="text-[32px] xs:text-[36px] sm:text-[42px] md:text-[26px] lg:text-[30px] font-bold text-[#F5F5F5] leading-tight pt-[10px]">
          Forgot Password
        </h1>

        {/* Subtitle */}
        <p className="text-[14px] xs:text-[16px] sm:text-[18px] md:text-[14px] lg:text-[15px] text-[#D1D1D1] leading-[20px] sm:leading-[22px]">
          Enter your email address to reset your <br className="hidden xs:block sm:block" />
          password
        </p>

        {/* Email Input */}
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[426px] sm:max-w-[426px] text-left">
            <label
              htmlFor="email"
              className=" block mb-[4px] sm:mb-[4px] text-[#BDBDBD] text-[12px] xs:text-[13px] sm:text-[14px]"
            >
              Email address
            </label>

            <div className="relative w-full flex justify-center">
              <Mail
                className="absolute left-[16px] xs:left-[18px] sm:left-[20px] top-1/2 -translate-y-1/2 text-[#BDBDBD] pointer-events-none"
                width={14}
                height={14}
                style={{ width: 'clamp(14px, 4vw, 16px)', height: 'clamp(14px, 4vw, 16px)' }}
              />
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="
          w-full max-w-[426px]
          h-[35px] xs:h-[37px] sm:h-[39px]
          bg-[#2C2C2C]
          border-[0.89px] border-[#515151]
          rounded-[5.34px]
          py-[8px] xs:py-[10.68px]
          pl-[40px] xs:pl-[42px] sm:pl-[44px]
          pr-[16px]
          text-white placeholder:text-[#BDBDBD]
          text-[14px] xs:text-[16px]
          outline-none focus:border-[#1D61E7]
          transition
        "
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-full sm:max-w-[426px] h-[40px] mt-[20px] mb-[20px] ">
          <Button 
            onClick={() => router.push("/verify")}
            className="w-full max-w-[426px] text-[#FFFFFF] bg-[#102DC8] h-[38px] xs:h-[40px] sm:h-[43px] text-[14px] xs:text-[16px] rounded-[10px]">
            Verify
          </Button>
        </div>

      </section>
    </main>
  );
}