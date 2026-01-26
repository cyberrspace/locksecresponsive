"use client";



export default function PastPayment(){
 return(
   <main className="fixed inset-[0px] flex items-center justify-center bg-[#000000]/40 z-[8000] h-screen">
   <section className="relative bg-[#FFFFFF] h-[700px] w-[604px] rounded-[10px] px-[15px] shadow-[0px_4px_10px_rgba(0,0,0,0.08)]">
     <div>
         <h2 className="font-bold text-[20px] text-[#2C2C2C]">Chike past payment</h2>
         <button
           className="absolute top-[16px] right-[16px] text-[#C0C0C0] hover:text-gray-800 text-2xl font-bold border-none bg-transparent text-[32px] mb-[10px]"
           onClick={() => window.dispatchEvent(new Event("closeOverlay"))}
         >
           ×
         </button>
       <div className="w-[656px] h-[0.8px]" ></div>
     </div>
     <div>
         <p className="font-normal text-[#2C2C2C] text-[20px]">Payment percentage:</p>
         <p>72/75 (96% capacity)</p>
     </div>
   </section>

 </main>

 )

}