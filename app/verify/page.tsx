"use client"

import ContentWrapper from "@/components/common/ContentWrapper"
import SignNav from "@/components/NavOne/SignNav"
import VerificationPage from "@/components/Verification/VerificationPage"

export default function verifypage(){
 return(
  <ContentWrapper>
    <section
            className="
              flex flex-col 
              w-full 
              relative h-screen"
          >
            {/* Navbar */}
            <div className="w-full max-w-[100vw]">
              <SignNav/>
            </div>
    
            {/* Forgot Password Form Section */}
            <div className="flex flex-col items-center space-y-[16px] sm:space-y-[24px] w-full max-w-[512px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto justify-center ">
              
              <VerificationPage />
              </div>
            
          </section>
  </ContentWrapper>
  
 )

}