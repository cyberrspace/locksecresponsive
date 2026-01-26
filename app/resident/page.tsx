"use client";

import DashboardWrapper from "@/components/common/DashboardWrapper";
import ResidentSide from "@/components/Resident/ResidentSide";
import ResidentNav from "@/components/Resident/ResidentNav";
import ResidentBody from "@/components/Resident/ResidentBody";
import { useState, useEffect } from "react";
import AddNew from "@/components/Resident/AddNew";
import PastPayment from "@/components/Resident/PastPayment";

export default function Resident() {
  const [showAddNew, setShowAddNew] = useState(false);
  const [showPastPayment, setShowPastPayment] = useState(false);

  useEffect(() => {
    const handleClose = () => {
      setShowAddNew(false);
      setShowPastPayment(false);
    };
    window.addEventListener("closeOverlay", handleClose);
    return () => window.removeEventListener("closeOverlay", handleClose);
  }, []);

  const openAddNew = () => setShowAddNew(true);
  const openPastPayment = () => setShowPastPayment(true);

  const closeOverlay = () => {
    setShowAddNew(false);
    setShowPastPayment(false);
  };

  return (
    <DashboardWrapper>
      {/* POPUP OVERLAY — should be here */}
      {(showAddNew || showPastPayment) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center"
          onClick={closeOverlay}
        >
          <div
            className="relative z-50 w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {showAddNew && <AddNew />}
            {showPastPayment && <PastPayment />}
          </div>
        </div>
      )}

      <main className="flex overflow-hidden">
        {/* Sidebar */}
        <aside className="fixed top-0 left-0 w-[250px] bg-white shadow-md z-30">
          <ResidentSide />
        </aside>

        {/* Main Content */}
        <div className="ml-[250px] flex flex-col flex-1 h-full overflow-y-auto">
          <header className="fixed w-[1220px] z-30 bg-white shadow-sm">
            <ResidentNav />
          </header>

          <section className="flex-[4px] p-[16px] lg:p-[24px] mt-[8rem]">
            <ResidentBody
              onResidentClick={openAddNew}
              onViewPastPayment={openPastPayment}
            />
          </section>
        </div>
      </main>
    </DashboardWrapper>
  );
}
