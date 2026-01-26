"use client";


import ContentWrapper from "@/components/common/ContentWrapper";

import SignNav from "@/components/NavOne/SignNav";
import ResetForm from "@/components/ResetPage/ResetForm";

export default function resetPage() {
  return (
    <ContentWrapper>
      <section
        className="
          flex flex-col 
          w-full 
          relative"
      >
        {/* Navbar */}
        <div className="w-full max-w-[100vw] overflow-x-hidden">
          <SignNav/>
        </div>

        {/* Forgot Password Form Section */}
        <div className="flex flex-col items-center space-y-[16px] sm:space-y-[24px] w-full max-w-[512px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/9 mx-auto justify-center">
          
          <ResetForm/>
          </div>
        
      </section>
    </ContentWrapper>
  );
}
