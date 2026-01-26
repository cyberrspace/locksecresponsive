"use client";


import { useState } from "react";

export default function AddNewDue(){
 

  const [] = useState("Business Owner");

 return(
   <main className="fixed inset-[0px] flex mx-auto my-auto items-center justify-center  bg-[#000000]/40 z-[9999] h-[744px]">

 
     <section className="relative bg-[#FFFFFF] h-[680px] w-[722px]  px-[15px]  items-center justify-center mx-auto shadow-[0px_4px_10px_rgba(0,0,0,0.08)] ">
       
       <button
         className="absolute top-[16px] right-[16px] text-[#C0C0C0] hover:text-gray-800 text-2xl font-bold border-none bg-transparent text-[32px] mb-[10px]"
         onClick={() => window.dispatchEvent(new Event("closeOverlay"))}
       >
         ×
       </button>

    

       <form className="flex flex-col gap-[15px] max-w-[373px] mx-auto my-[20px]">
        
         <div>
           <h2 className="text-[#282A2F] text-[14px] font-semibold">
             Create New Dues
           </h2>
         </div>

         {/* First and Last Name */}
       
          <label htmlFor="">
             <p className="mb-[5px] text-[12px]  text-[#2A224F]">Name of Due</p>
             <input
               type="text"
               placeholder="Estate Dues"
               className="w-[373px] h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px]  text-[14px] placeholder:text-[#2A224F] placeholder:text-[10px] focus:outline-none placeholder:p-[10px] px-[12px]"
             />

          </label>
         
          {/* Amount */}
         <label htmlFor="">
           <p className="mb-[5px] text-[12px]  text-[#2A224F]">Amount</p>
           <input
             type="number"
             placeholder="₦0"
             className="w-[373px] h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#2A224F] placeholder:text-[10px] focus:outline-none"
           />
         </label>

         {/* Phone */}
         <label htmlFor="" className="">
           <p className="text-[12px]">Periodic</p>
           <select className="w-full h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] text-[#555555] focus:outline-none">
             <option value="" disabled selected className="text-[5px] font-sm">
               Daily, weekly, Monthly, Yearly.
             </option>

             <option value="">Select your Duration</option>
             <option value="tech">Daily</option>
             <option value="fashion">Weekly</option>
             <option value="food">Monthly</option>
             <option value="education">Yearly</option>
           </select>
         </label>
         <div className="text-[#2A224F] text-[12px]">Settlement Account for this Bills</div>

         {/* Email */}
         <label htmlFor="">
           <p className="mb-[5px] text-[12px]  text-[#2A224F]">Account Name</p>
           <input
             type="text"
             placeholder="Enter Account Name"
             className="w-[373px] h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#2A224F] placeholder:text-[10px] focus:outline-none"
           />
         </label>

         <label htmlFor="">
           <p className="mb-[5px] text-[12px]  text-[#2A224F]">Account Number</p>
           <input
             type="text"
             placeholder="0000000000"
             className="w-[373px] h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#2A224F] placeholder:text-[10px] focus:outline-none"
           />
         </label>
         
         {/* Industry */}
         <label htmlFor="" className="">
           <p className="text-[12px]">Bank Name</p>
         <select className="w-[373px] h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] text-[#555555] focus:outline-none">
           
           <option value="">Select your Bank</option>
           <option value="tech">Access bank</option>
           <option value="fashion">Zenith Bank</option>
           <option value="food">Stanbic IBTC</option>
           <option value="education">Eco Bank</option>
         </select>
         </label>
         {/* Password */}
       
         {/* Submit Button */}
         <button
           type="submit"
           className="flex items-center justify-center mx-auto w-[373px]  h-[43px] bg-[#102DC8] text-[#FFFFFF] text-[12px] font-medium rounded-[5px] hover:bg-[#1548b5] mb-[10px] border-[#102DC8]"
         >
           Create Dues
         </button>
       </form>
      
 </section>
   </main>
 )

}