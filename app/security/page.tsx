"use client";

import DashboardWrapper from "@/components/common/DashboardWrapper";


import { useState, useEffect } from "react";

import PastPayment from "@/components/Resident/PastPayment";
import SecurityNav from "@/components/Security/SecurityNav";
import SecuritySide from "@/components/Security/SecuritySide";
import SecurityBody from "@/components/Security/SecurityBody";
import AddNewSecurity from "@/components/Security/AddNewSecurity";

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
            {showAddNew && <AddNewSecurity />}
            {showPastPayment && <PastPayment />}
          </div>
        </div>
      )}

      <main className="flex overflow-hidden">
        {/* Sidebar */}
        <aside className="fixed top-0 left-0 w-[250px] bg-white shadow-md z-30">
          <SecuritySide />
        </aside>

        {/* Main Content */}
        <div className="ml-[250px] flex flex-col flex-1 h-full overflow-y-auto">
          <header className="fixed w-[1220px] z-30 bg-white shadow-sm">
            <SecurityNav />
          </header>
          
          <section className="flex-[4px] p-[16px] lg:p-[24px] mt-[8rem]">
              <SecurityBody
              onResidentClick={openAddNew}
              onViewPastPayment={openPastPayment}
            />
          </section>
        </div>
      </main>
    </DashboardWrapper>
  );
}
