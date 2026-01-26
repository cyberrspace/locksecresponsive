"use client";

import DashboardWrapper from "@/components/common/DashboardWrapper";
import DashboardNav from "@/components/Dashboard/DashboardNav";
import DashboardSide from "@/components/Dashboard/DashboardSide";
import DashboardBody from "@/components/Dashboard/DashboardBody";
import SubscriptionOverlay from "@/components/Dashboard/SubscriptionOverlay";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const handleClose = () => setShowOverlay(false);
    window.addEventListener("closeOverlay", handleClose);
    return () => window.removeEventListener("closeOverlay", handleClose);
  }, []);

  const handleDashboardClick = () => {
    setShowOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  return (
    <DashboardWrapper>
      <main className="flex overflow-hidden ">
        {/* Sidebar - Fixed */}
        <aside className="fixed top-[0px] left-[0px] w-[250px] bg-white shadow-md z-30">
          <DashboardSide onDashboardClick={handleDashboardClick}/>
        </aside>
      
        {showOverlay && (
          <div
            className="fixed inset-[0px] bg-black bg-opacity-40 z-40 flex items-center justify-center transition-opacity duration-300"
            onClick={handleOverlayClose}
          >
            <div
              className="relative z-50 w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside the modal
            >
              <SubscriptionOverlay />
            </div>
          </div>
        )}


        {/* Main Content Area */}
        <div className="ml-[250px] flex flex-col flex-1 h-full overflow-y-auto">
          {/* Navbar (sticky) */}
          <header className="fixed  w-[1220px] z-30 bg-white shadow-sm">
            <DashboardNav />
          </header>

          {/* Body (scrollable) */}
          <section className="flex-[4px] p-[16px] lg:p-[24px] mt-[8rem]">
            <DashboardBody />
          </section>
        </div>
      </main>
    </DashboardWrapper>
  );
}
