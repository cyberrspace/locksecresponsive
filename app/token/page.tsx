"use client";

import ContentWrapper from "@/components/common/ContentWrapper";
import NavTwo from "@/components/NavTwo/NavTwo";
import TokenForm from "@/components/Tokenpage/TokenForm";

export default  function TokenPage(){
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
            <NavTwo/>
          </div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
           <TokenForm/>
           </div>
         
        </main>


</ContentWrapper>


 )

}