"use client"

import BackButton from "../common/BackButton"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function VerificationPage(){

 

  const router = useRouter();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move to next input automatically
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  // Handle verify
  const handleVerify = () => {
    const enteredCode = code.join("");
    if (enteredCode === "000000") {
      setError("");
      router.push("/token");
    } else {
      setError("Invalid PIN");
    }
  };


  return(
    <main className="w-full max-w-[512px] sm:min-h-[692px]  min-h-screen flex flex-col justify-center        items-center bg-black  px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px] overflow-hidden">
          {/* Back Button */}
          <div className="w-full max-w-full sm:max-w-[512px] mb-[8px] sm:mb-[5px]">
            <BackButton  href="/forgotpassword"/>
          </div>
    
          {/* Form Card */}
          <section className="w-full max-w-full sm:max-w-[90%] md:max-w-[612px] bg-[#2C2C2C] rounded-[12px] p-[55px] py-[16px] sm:py-[10px] px-[16px] sm:px-[20px] md:px-[32px] flex flex-col items-center text-center space-y-[22px] sm:space-y-[21px] md:space-y-[33px]">
          
            {/* Title */}
        <h1 className="text-[32px] xs:text-[36px] sm:text-[42px] md:text-[26px] lg:text-[30px] font-bold text-[#F5F5F5] leading-tight  pt-[20px]">
              Verify your Email
            </h1>
    
            {/* Subtitle */}
            <p className="text-[14px] xs:text-[16px] sm:text-[18px] md:text-[14px] lg:text-[15px] text-[#D1D1D1] leading-[20px] sm:leading-[22px]">
              A Token has been sent to your Email
            </p>
    
            {/* Verification Input */}
             <div className="flex justify-center items-center w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] gap-[10px]">
             {code.map((digit, index) => (
              <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="
                w-[39.146px] h-[39.146px]
                bg-[#353535]
                border-[0.89px] border-[#515151]
                rounded-[5.34px]
                text-center text-[#F5F5F5] text-[16px] font-medium
                outline-none focus:border-[#1D61E7]
                transition
              "
            />
            ))}
          </div>

             {/* Error Message */}
              {error && (
             <p className="text-[#FF4D4D] text-[13px] mt-3">{error}</p>
                )}

    
            <div className="w-full max-w-[306px] sm:max-w-[306px] h-[40px] mt-[20px] mb-[20px] ">
              <Button 
                onClick={handleVerify}
                className="w-full bg-[#102DC8] text-[#FFFFFF] h-[38px] xs:h-[40px] sm:h-[43px] text-[14px] xs:text-[16px] rounded-[10px]">
                Verify
              </Button>
            </div>
    
          </section>
        </main>
  )
}