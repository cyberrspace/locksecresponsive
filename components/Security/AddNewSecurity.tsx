"use client";


import { useState } from "react";

export default function AddNewSecurity(){
 

  const [] = useState("Business Owner");

 return(
   <main className="fixed inset-[0px] flex items-center justify-center bg-[#000000]/40 z-[9999] h-full">

 
   <section className="relative bg-[#FFFFFF] max-h-[620px] w-[604px] rounded-[10px] px-[15px] shadow-[0px_4px_10px_rgba(0,0,0,0.08)] ">
       
       <button
         className="absolute top-[16px] right-[16px] text-[#C0C0C0] hover:text-gray-800 text-2xl font-bold border-none bg-transparent text-[32px] mb-[10px]"
         onClick={() => window.dispatchEvent(new Event("closeOverlay"))}
       >
         ×
       </button>

    <div>
         <h2 className="text-[#282A2F] text-[14px] font-semibold">
      Add New Security
    </h2>
  </div>

       <form className="flex flex-col gap-[15px]">
        
        

         {/* First and Last Name */}
         <div className="flex  w-full">
          <label htmlFor="">
             <span className="mb-[5px] text-[12px]  text-[#2A224F]">First name</span>
             <input
               type="text"
               placeholder="Enter First Name"
               className="w-[170px] h-[39px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px]  text-[14px] placeholder:text-[#2A224F] placeholder:text-[10px] focus:outline-none placeholder:p-[12px]"
             />

          </label>
          <label htmlFor="">
             <span className="mb-[5px] text-[12px]  text-[#2A224F]">Middle Name</span>
             <input
               type="text"
               placeholder="Enter Last Name"
               className="w-[170px] h-[39px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px]  text-[14px] placeholder:text-[#2A224F] placeholder:text-[10px] focus:outline-none  placeholder:p-[12px]"
             />

          </label>
           <label htmlFor="">
             <span className="mb-[5px] text-[12px]  text-[#2A224F]">Last name</span>
             <input
               type="text"
               placeholder="Enter Last Name"
               className="w-[170px] h-[39px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] text-[14px] placeholder:text-[#2A224F] placeholder:text-[10px] focus:outline-none  placeholder:p-[12px]"
             />

           </label>
         </div>

         {/* Home Address */}
         <label htmlFor="">
           <span className="mb-[5px] text-[12px]  text-[#2A224F]">Home Address</span>
           <input
             type="text"
             placeholder="Enter your Home address"
             className="w-[562px] h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#2A224F] placeholder:text-[10px] focus:outline-none"
           />

         </label>

         {/* Phone */}
         <label htmlFor="">
           <span className="mb-[5px] text-[12px]  text-[#2A224F]">Phone</span>
           <input
             type="tel"
             placeholder="0000 000 0000"
             className="w-[562px] h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#2A224F] placeholder:text-[10px] focus:outline-none"
           />
         </label>
         

         {/* Email */}
         <label htmlFor="">
           <span className="mb-[5px] text-[12px]  text-[#2A224F]">Email Address(optional)</span>
           <input
             type="email"
             placeholder="Enter your email address"
             className="w-[562px] h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#2A224F] placeholder:text-[10px] focus:outline-none"
           />
         </label>
         
         {/* Industry */}
         <label htmlFor="">
           <span className="mb-[10px] text-[12px]">Security company</span>
         <select className="w-[585px] h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-    [12px] text-[11px] text-[#555555] focus:outline-none">
           
           <option value="">Select the industry the business belong</option>
           <option value="tech">Technology</option>
           <option value="fashion">Fashion</option>
           <option value="food">Food & Hospitality</option>
           <option value="education">Education</option>
         </select>
         </label>
         {/* Password */}
       
         {/* Submit Button */}
         <button
           type="submit"
           className="flex items-center justify-center mx-auto w-[202px] h-[28px] bg-[#102DC8] text-[#FFFFFF] text-[12px] font-medium rounded-[5px] hover:bg-[#1548b5] mb-[10px] border-[#102DC8]"
         >
           Create Account
         </button>
       </form>
      
 </section>
   </main>
 )

}