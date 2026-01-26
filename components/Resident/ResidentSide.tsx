"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ResidentSideProps {
  onDashboardClick?: () => void;
  onResidentClick?: () => void;
}

export default function ResidentSide({ onResidentClick }: ResidentSideProps) {
  const router = useRouter(); 

  return (
    <main className="bg-[#FFFFFF] w-full max-w-[258px] px-[15px] max-h-full flex flex-col space-y-[1rem]">
      <section className="flex">
        <div className="flex items-center gap-[10px] sm:gap-4">
          <Image
            src="/icon/locksec-bg.png"
            alt="locksec logo"
            width={40}
            height={40}
            className="object-contain w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px]"
          />
          <h1 className="text-[32px] sm:text-[26px] md:text-[30px] font-bold text-black">
            Loc<span className="text-[#1D61E7]">Sec</span>
          </h1>
        </div>
      </section>


      <div className="space-y-[3rem]">


        <section className="space-y-[10px]">
          <div 
           onClick={()=>router.push("/dashboard")}
          className="flex items-center gap-[10px] max-w-[200px] cursor-pointer rounded-[4.45px] bg-white hover:shadow-[0px_2.28px_22.75px_0px_#00000014] transition-all duration-300 group">
            <Image
              src="/icon/dashboard-i.png"
              alt="locksec logo"
              width={11}
              height={11}
              className="object-contain w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px] brightness-0 invert-[70%] group-hover:invert-0 group-hover:brightness-100 transition-all duration-300"
            />
            <a className="text-[#A3AED0] font-bold text-[14px] group-hover:text-[#2164E7] transition-colors duration-300">
              Dashboard
            </a>
          </div>

          <div 
            onClick={onResidentClick} 
           
          className="flex items-center gap-[10px] max-w-[200px] cursor-pointer rounded-[4.45px] bg-white hover:shadow-[0px_2.28px_22.75px_0px_#00000014] transition-all duration-300 group">
            <Image
              src="/icon/resident-i.png"
              alt="locksec logo"
              width={11}
              height={11}
              className="object-contain w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px] brightness-0 invert-[70%] group-hover:invert-0 group-hover:brightness-100 transition-all duration-300"
            />
            <p className="text-[#A3AED0] font-bold text-[14px] group-hover:text-[#2164E7] transition-colors duration-300">
              Resident Management
            </p>
          </div>

          <div
            onClick={() => router.push("/paymentdues")}
          className="flex items-center gap-[10px] max-w-[200px] cursor-pointer rounded-[4.45px] bg-white hover:shadow-[0px_2.28px_22.75px_0px_#00000014] transition-all duration-300 group">
            <Image
              src="/icon/Payment-i.png"
              alt="locksec logo"
              width={11}
              height={11}
              className="object-contain w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px] brightness-0 invert-[70%] group-hover:invert-0 group-hover:brightness-100 transition-all duration-300"
            />
            <p className="text-[#A3AED0] font-bold text-[14px] group-hover:text-[#2164E7] transition-colors duration-300">
              Payment & Dues
            </p>
          </div>

          <div
            onClick={() => router.push("/security")}
          className="flex items-center gap-[10px] max-w-[200px] cursor-pointer rounded-[4.45px] bg-white hover:shadow-[0px_2.28px_22.75px_0px_#00000014] transition-all duration-300 group">
            <Image
              src="/icon/security-i.png"
              alt="locksec logo"
              width={11}
              height={11}
              className="object-contain w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px] brightness-0 invert-[70%] group-hover:invert-0 group-hover:brightness-100 transition-all duration-300"
            />
            <p className="text-[#A3AED0] font-bold text-[14px] group-hover:text-[#2164E7] transition-colors duration-300">
              Security Management
            </p>
          </div>

          <div
            onClick={() => router.push("/settings")}
          className="flex items-center gap-[10px] max-w-[200px] cursor-pointer rounded-[4.45px] bg-white hover:shadow-[0px_2.28px_22.75px_0px_#00000014] transition-all duration-300 group">
            <Image
              src="/icon/settings-i.png"
              alt="locksec logo"
              width={11}
              height={11}
              className="object-contain w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px] brightness-0 invert-[70%] group-hover:invert-0 group-hover:brightness-100 transition-all duration-300"
            />
            <p className="text-[#A3AED0] font-bold text-[14px] group-hover:text-[#2164E7] transition-colors duration-300">
              Settings
            </p>
          </div>
        </section>


        <section className="max-h-screen">
          <div className="w-full">
            <div className="flex  gap-[4rem] items-center">
              <p className="font-normal text-[14px] text-[#2C2C2C]">Security app</p>
              <p className="font-normal text-[11px] text-[#6E8AFC] italic">Copy link</p>

            </div>

            <div className="font-normal text-[14px] text-[#2C2C2C] max-w-[200px] break-words italic">
              <a href="">www.locksec.app/56373securityiffuvyffugddgkjlnkgdyffhgjbkob</a>
            </div>
          </div>

          <div className="w-full">
            <div className="flex  gap-[4rem] items-center">
              <p className="font-normal text-[14px] text-[#2C2C2C]">Resident app</p>
              <p className="font-normal text-[11px] text-[#6E8AFC] italic">Copy link</p>

            </div>

            <div className="font-normal text-[14px] text-[#2C2C2C] max-w-[200px] break-words italic">
              <a href="">www.locksec.app/56373securityiffuvyffugddgkjlnkgdyffhgjbkob</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}