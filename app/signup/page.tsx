"use client";

import ContentWrapper from "@/components/common/ContentWrapper";
import EstateForm from "@/components/EstateForm/EstateForm";
import SignNav from "@/components/NavOne/SignNav";


export default  function signupPage(){
 return(
<ContentWrapper>
  <main
          className="  
            flex flex-col 
            min-h-screen 
            w-full 
            relative 
          "
        >
          {/* Navbar */}
          <div
            className="
             w-full max-w-[100vw]  mx-auto
            "
          >
          <SignNav/>
          </div>
           <div className="mt-[20px] flex items-center justify-center">
            <EstateForm/>
           </div>
         
        </main>


</ContentWrapper>


 )

}