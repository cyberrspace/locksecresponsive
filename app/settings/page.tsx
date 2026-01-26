"use client";

import DashboardWrapper from "@/components/common/DashboardWrapper";


import { useState, useEffect } from "react";

import PastPayment from "@/components/Resident/PastPayment";


import AddNewDue from "@/components/Settings/AddNewDue";
import SettingsBody from "@/components/Settings/SettingsBody";
import SettingsNav from "@/components/Settings/SettingsNav";
import SettingsSide from "@/components/Settings/SettingsSide";

export default function Resident() {
  const [showAddNewDue, setShowAddNewDue] = useState(false);
  const [showPastPayment, setShowPastPayment] = useState(false);

  useEffect(() => {
    const handleClose = () => {
      setShowAddNewDue(false);
      setShowPastPayment(false);
    };
    window.addEventListener("closeOverlay", handleClose);
    return () => window.removeEventListener("closeOverlay", handleClose);
  }, []);

  const openAddNew = () => setShowAddNewDue(true);
  const openPastPayment = () => setShowPastPayment(true);

  const closeOverlay = () => {
    setShowAddNewDue(false);
    setShowPastPayment(false);
  };

  return (
    <DashboardWrapper>
      {/* POPUP OVERLAY — should be here */}
      {(showAddNewDue || showPastPayment) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center"
          onClick={closeOverlay}
        >
          <div
            className="relative z-50 w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {showAddNewDue && <AddNewDue />}
            {showPastPayment && <PastPayment />}
          </div>
        </div>
      )}

      <main className="flex overflow-hidden">
        {/* Sidebar */}
        <aside className="fixed top-0 left-0 w-[250px] bg-white shadow-md z-30">
          <SettingsSide />
        </aside>

        {/* Main Content */}
        <div className="ml-[250px] flex flex-col flex-1 h-full overflow-y-auto px-[10px]">
          <header className="fixed w-[1200px] z-30 bg-white shadow-sm">
            <SettingsNav />
          </header>
          
          <section className="flex-[4px] p-[16px] lg:p-[24px] mt-[8rem]">
              <SettingsBody
                onResidentClick={openAddNew}
                onViewPastPayment={openPastPayment}
              />
          </section>
        </div>
      </main>
    </DashboardWrapper>
  );
}
