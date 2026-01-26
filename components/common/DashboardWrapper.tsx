"use client";

import { ReactNode } from "react";

export default function DashboardWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className="
       w-full min-h-screen
        flex flex-col
        bg-cover bg-center bg-no-repeat
        box-border
        overflow-x-hidden overflow-y-auto
        sm:min-h-screen md:min-h-screen lg:min-h-screen xl:min-h-screen
         sm:px-[24px] md:px-[32px] lg:px-[40px]
      "
        style={{
        backgroundImage: "url('/icon/Screen-b.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="
          w-full h-auto flex flex-col flex-grow
          sm:h-auto md:h-auto lg:h-auto
        ">
        {children}
      </div>
    </div>
  );
}
