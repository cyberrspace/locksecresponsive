"use client";

import Image from "next/image";

export default function SignNav() {
  return (
    <nav
      className="
        flex items-center justify-between 
        w-full max-w-[100vw]
        px-[20px] sm:px-[4px] md:px-8 
        py-4 sm:py-5 md:py-6 
        box-border 
        overflow-x-hidden
      "
    >
      {/* Logo + Text */}
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

      {/* Nav Links */}
      <div className="flex items-center gap-3 sm:gap-6 md:gap-8 flex-shrink-0">
        <button
          className="
            text-[14px] sm:text-[16px] md:text-[18px]
            font-semibold text-gray-800 
            hover:text-[#1D61E7] 
            bg-transparent border-none focus:outline-none
          "
        >
          Home
        </button>

        <button
          className="
            bg-[#244779] text-white 
            w-[110px] sm:w-[130px] md:w-[150px]
            h-[32px] sm:h-[36px] md:h-[40px]
            text-[12px] sm:text-[14px]
            rounded-[10px] 
            hover:bg-[#1548b5] 
            transition-colors
            px-2 sm:px-3 md:px-4
          "
        >
          Create Account
        </button>
      </div>
    </nav>
  );
}
