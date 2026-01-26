"use client";

export default function UpdatePassword(){
 return(

   <div className="w-full h-[506px] bg-[#FFFFFF] px-[15px] space-y-[10px] pl-[20px] ">
     <div className="pt-[20px]">
       <h2 className="text-[16px] text-[#2A224F] font-bold ">Update password</h2>
       <div className="w-[600px] text-[#E6E6E6] border-[1px]"></div>
     </div>
     <div className="w-[574px] border-[#E6E6E6] text-[#E6E6E6]"></div>
     <section className="space-y-[5rem]">
       <div className="space-y-[20px]">
         <div className="">
           <label htmlFor="" className="space-y-[10px]">
             <div> <span className="text-[12px] text-[#2C2C2C] font-normal">Old password</span></div>
             <input type="text"
               placeholder="Enter your old password"
               className="w-[372px] h-[39px] rounded-[5px] placeholder:pl-[10px] border-[#D8DAE5]"
             />
           </label>
         </div>

         <div className="">
           <label htmlFor="" className="space-y-[10px]">
             <div> <span className="text-[12px] text-[#2C2C2C] font-normal">New password</span></div>
             <input type="text"
               placeholder="Enter your new password"
               className="w-[372px] h-[39px] rounded-[5px] placeholder:pl-[10px] border-[#D8DAE5]"
             />
           </label>
         </div>

         <div className="">
           <label htmlFor="" className="space-y-[10px]">
             <div> <span className="text-[12px] text-[#2C2C2C] font-normal">New password</span></div>
             <input type="text"
               placeholder=" Re-enter your new password"
               className="w-[372px] h-[39px] rounded-[5px] placeholder:pl-[10px] border-[#D8DAE5]"
             />
           </label>
         </div>
       </div>

       <button className="w-[372px] h-[43px] text-[14px] font-medium text-[#FFFFFF] bg-[#102DC8] border-[#1018280D] rounded-[5px]">
         Updated Password
       </button>

     </section>


   </div>

 )

}