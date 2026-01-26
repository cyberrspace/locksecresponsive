"use client";

import { useState, useRef, useEffect } from "react";

import { Plus, FileSpreadsheet, FileText } from "lucide-react";
import UpdateCode from "./UpdateCode";
import DuesUpdate from "./DuesUpdate";

interface ResidentSideProps {
  onResidentClick?: () => void;
  onViewPastPayment?: () => void;
}

export default function SettingsBody({ onResidentClick, onViewPastPayment }: ResidentSideProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<"password" | "dues">("password"); // ADDED
  const [menuPosition] = useState({ top: 0, left: 0 });

  const filterRef = useRef<HTMLDivElement | null>(null);
  const exportRef = useRef<HTMLDivElement | null>(null);
  const dotsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        !filterRef.current?.contains(e.target as Node) &&
        !exportRef.current?.contains(e.target as Node) &&
        !dotsRef.current?.contains(e.target as Node)
      ) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => setActiveMenu(null);

  return (
    <>
      <div className="max-w-[1200px] rounded-[10px] overflow-auto mx-[16px]">

        {/* Table Section */}
        <section className="flex gap-[20px] px-[16px]">

          {/* LEFT MENU */}
          <div className="w-[290px] h-[506px] bg-[#FFFFFF] p-[5px]">

            {/* Updated Password */}
            <div className="my-[10px]">

              <p
                onClick={() => setSelectedTab("password")}
                className={`relative cursor-pointer p-3 pb-[10px]  items-start flex justify-between border-b border-[#EDEDED] ${selectedTab === "password" ? "text-blue-600 font-medium" : ""
                  }`}
              >
                {/* BLUE VERTICAL LINE */}
                {selectedTab === "password" && (
                  <span className="absolute left-0 h-full  top-0 bottom-0 w-[3px] bg-[#2563EB]"></span>
                )}
                Update Password
              </p>

              {/* DUES TAB */}
              <p
                onClick={() => setSelectedTab("dues")}
                className={`relative cursor-pointer space-x-[10px] mb-[10px]  pb-[10px]  items-start flex justify-between border-b border-[#EDEDED] ${selectedTab === "dues" ? "text-blue-600 font-medium" : ""
                  }`}
              >
                {/* BLUE VERTICAL LINE */}
                {selectedTab === "dues" && (
                  <span className="absolute left-0 top-0 bottom-0 h-full   w-[3px] bg-[#2563EB]"></span>
                )}
                <span>Dues</span> 
                <span>
                  <a
                    onClick={onResidentClick}
                    className="text-[#000000] text-[13px] font-medium"
                  >
                    <Plus size={16} className="mr-[4px]" />
                  </a>
                </span>

              </p>

            </div>
           
          </div>

          {/* RIGHT SIDE CONTENT — SHOW ONLY ONE AT A TIME */}
          {selectedTab === "password" && <UpdateCode />}
          {selectedTab === "dues" && <DuesUpdate />}

        </section>

        {/* Overlay Background */}
        {activeMenu && (
          <div
            className="fixed inset-0 bg-[#000000]/40 z-[9999]"
            onClick={closeMenu}
          ></div>
        )}

        {/* Popups */}
        {activeMenu === "export" && (
          <div
            className="absolute z-[10000] bg-white rounded-[8px] shadow-lg border border-[#E2E8F0] py-[8px] w-[150px]"
            style={{
              top: menuPosition.top + 5,
              left: menuPosition.left - 30,
            }}
          >
            <div className="flex items-center gap-[8px] px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer">
              <FileSpreadsheet size={16} /> Excel
            </div>
            <div className="flex items-center gap-[8px] px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer">
              <FileText size={16} /> PDF
            </div>
          </div>
        )}

        {activeMenu?.startsWith("menu-") && (
          <div
            className="absolute z-[10000] bg-white rounded-[8px] shadow-lg border border-[#E2E8F0] py-[8px] w-[180px]"
            style={{
              top: menuPosition.top + 5,
              left: menuPosition.left - 150,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              onClick={() => {
                onViewPastPayment?.();
                closeMenu();
              }}
              className="px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer"
            >
              View Past Payment
            </div>

            <div className="px-[10px] py-[6px] text-[13px] text-[#DC2626] hover:bg-[#FEE2E2] cursor-pointer">
              Disable Resident
            </div>
          </div>
        )}

        {activeMenu === "filter" && (
          <div
            className="absolute z-[10000] bg-white rounded-[8px] shadow-lg border border-[#E2E8F0] py-[8px] w-[150px]"
            style={{
              top: menuPosition.top + 5,
              left: menuPosition.left,
            }}
          >
            <div
              onClick={() => {
                closeMenu();
              }}
              className="px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer"
            >
              All Residents
            </div>
            <div
              onClick={() => {
                closeMenu();
              }}
              className="px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer"
            >
              Overdues
            </div>
            <div
              onClick={() => {
                closeMenu();
              }}
              className="px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer"
            >
              Active Residents
            </div>
          </div>
        )}
      </div>
    </>
  );
}
