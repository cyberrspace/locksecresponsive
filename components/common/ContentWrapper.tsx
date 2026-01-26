"use client";

import { ReactNode } from "react";

export default function ContentWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        w-full h-screen 
        bg-cover bg-center bg-no-repeat 
        flex flex-col
        px-[15px]
        box-border
        overflow-hidden
      "
      style={{
        backgroundImage: "url('/icon/lastframe.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full flex flex-col">{children}</div>
    </div>
  );
}