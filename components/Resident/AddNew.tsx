"use client";


import { useState } from "react";

export default function AddNew(){
 

  const [role, setRole] = useState("Business Owner");

 return(
   <main className="fixed inset-[0px] flex items-center justify-center bg-[#000000]/40 z-[9999] h-screen">

 
   <section className="relative bg-[#FFFFFF] h-[700px] w-[604px] rounded-[10px] px-[15px] shadow-[0px_4px_10px_rgba(0,0,0,0.08)] ">
       
       <button
         className="absolute top-[16px] right-[16px] text-[#C0C0C0] hover:text-gray-800 text-2xl font-bold border-none bg-transparent text-[32px] mb-[10px]"
         onClick={() => window.dispatchEvent(new Event("closeOverlay"))}
       >
         ×
       </button>

    <div>
         <h2 className="text-[#282A2F] text-[14px] font-semibold">
      Add New Resident
    </h2>
  </div>

       <form className="flex flex-col gap-[15px]">
         {/* Move-In Date */}
         <div>
           <label className="block text-[#2A224F] text-[11px] mb-[5px]">
             Move-In Date?
           </label>
         <div className="relative">
             <input
               type="date"
               className="w-[562px] h-[35px] border border-[#D8DAE5] rounded-[10px] px-[12px] text-[14px] focus:outline-none"
             />
            </div>
         </div>

         {/* First and Last Name */}
         <div className="flex gap-[10px]">
          <label htmlFor="">
             <span className="mb-[5px] text-[11px]  text-[#2A224F]">First name</span>
             <input
               type="text"
               placeholder="Enter First Name"
               className="w-[258px] h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#2A224F] placeholder:text-[10px] focus:outline-none"
             />

          </label>
          <label htmlFor="">
             <span className="mb-[5px] text-[11px]  text-[#2A224F]">Last name</span>
             <input
               type="text"
               placeholder="Enter Last Name"
               className="w-[258px] h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#2A224F] placeholder:text-[10px] focus:outline-none"
             />

          </label>
          
         </div>

         {/* Phone */}
         <label htmlFor="">
           <span className="mb-[5px] text-[11px]  text-[#2A224F]">Phone</span>
           <input
             type="tel"
             placeholder="0000 000 0000"
             className="w-[562px] h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#2A224F] placeholder:text-[10px] focus:outline-none"
           />
         </label>
         

         {/* Email */}
         <label htmlFor="">
           <span className="mb-[5px] text-[11px]  text-[#2A224F]">Email</span>
           <input
             type="email"
             placeholder="Enter your email address"
             className="w-[562px] h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#2A224F] placeholder:text-[10px] focus:outline-none"
           />
         </label>
         

         {/* Home Address */}
         <label htmlFor="">
           <span className="mb-[5px] text-[11px]  text-[#2A224F]">Home Address</span>
           <input
             type="text"
             placeholder="Enter your Home address"
             className="w-[562px] h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#2A224F] placeholder:text-[10px] focus:outline-none"
           />

         </label>
         
         {/* Role Selection */}
         <div>
           <p className="text-[#000000] text-[11px] mb-[5px]">I Am A</p>
           <div className="flex items-center gap-[20px]">
             <label className="flex items-center gap-[6px]">
               <input
                 type="radio"
                 name="role"
                 checked={role === "Resident"}
                 onChange={() => setRole("Resident")}
               />
               <span className="text-[11px]">Resident</span>
             </label>

             <label className="flex items-center gap-[6px]">
               <input
                 type="radio"
                 name="role"
                 checked={role === "Business Owner"}
                 onChange={() => setRole("Business Owner")}
               />
               <span className="text-[11px]">Business Owner</span>
             </label>
           </div>
         </div>

         {/* Business Name */}
         <label>
          <span className="mb-[5px] text-[11px]">Business name</span>
           <input
             type="text"
             placeholder="What is the registered name"
             className="w-[562px] h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[11px] placeholder:text-[#2A224F] placeholder:text-[10px] focus:outline-none"
           />
         </label>
         

         {/* Industry */}
         <label htmlFor="">
           <span className="mb-[5px] text-[11px]">Industry</span>
         <select className="w-[585px] h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[11px] text-[#555555] focus:outline-none">
           
           <option value="">Select the industry the business belong</option>
           <option value="tech">Technology</option>
           <option value="fashion">Fashion</option>
           <option value="food">Food & Hospitality</option>
           <option value="education">Education</option>
         </select>
         </label>
         {/* Password */}
         <label htmlFor="">
           <span className="mb-[5px] text-[11px]">Create password</span>

         <input
           type="password"
           placeholder="Create Password for the resident"
             className="w-[562px] h-[35px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[11px] placeholder:text-[#2A224F] placeholder:text-[10px] focus:outline-none"
         />
         </label>
         {/* Submit Button */}
         <button
           type="submit"
           className="flex items-center justify-center mx-auto w-[202px] h-[35px] bg-[#1D61E7] text-[#FFFFFF] text-[11px] font-medium rounded-[10px] hover:bg-[#1548b5]"
         >
           Create Account
         </button>
       </form>
      
 </section>
   </main>
 )

}