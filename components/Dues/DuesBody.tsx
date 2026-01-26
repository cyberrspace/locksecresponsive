"use client";

import { useState, useRef, useEffect } from "react";
import { FileSpreadsheet, FileText } from "lucide-react";
import Image from "next/image";
import { MoreVertical, Eye, Edit, Trash2,} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Transaction {
  time: string;
  ref: string;
  name: string;
  address: string;
  amountPaid: string;
  overdue: string;
  duration: string;
}

const initialTransactions: Transaction[] = [
  {
    time: "10:15 AM",
    ref: "LN-8589",
    name: "Adeola Bello",
    address: "8 Road M",
    amountPaid: "₦50,000",
    overdue: "₦0",
    duration: "3 months",
  },
  {
    time: "10:15 AM",
    ref: "LN-1908",
    name: "Chike Obi",
    address: "Marshal Road",
    amountPaid: "₦50,000",
    overdue: "₦0",
    duration: "3 months",
  },
  {
    time: "10:15 AM",
    ref: "LN-1933",
    name: "Fatima Yusuf",
    address: "9 Road M",
    amountPaid: "₦50,000",
    overdue: "₦0",
    duration: "3 months",
  },
];

// Removed unused TransactionsTable component

interface ResidentSideProps {
  onResidentClick?: () => void;
  onViewPastPayment?: () => void;
}

export default function DueBody({

  
}: ResidentSideProps) {
  const [filter, setFilter] = useState("Overdues");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const filterRef = useRef<HTMLDivElement | null>(null);
  const exportRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        !filterRef.current?.contains(e.target as Node) &&
        !exportRef.current?.contains(e.target as Node)
      ) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = (e: React.MouseEvent, menuType: string) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setMenuPosition({ top: rect.bottom + window.scrollY, left: rect.left });
    setActiveMenu(menuType);
  };

  const closeMenu = () => setActiveMenu(null);

 
  return (
    <section>
      <div className="max-w-[1200px] rounded-[10px] p-[24px] overflow-auto mx-[16px]">
        {/* Top Controls */}
        <div className="flex flex-wrap justify-between items-center mb-[24px]">
          <div className="flex items-center space-x-[8px]">
            {/* Filter Dropdown */}
            <div
              ref={filterRef}
              onClick={(e) => handleClick(e, "filter")}
              className="flex items-center bg-[#F8FAFC] border border-[#E2E8F0] rounded-[40px] px-[12px] py-[6px] shadow-[0px_4px_10px_rgba(0,0,0,0.08)] bg-[#FFFFFF] w-[173px] h-[54px] gap-[10px] cursor-pointer"
            >
              <label className="text-[13px] text-[#475569] font-medium mr-[3px]">
                Filter:
              </label>
              <div className="bg-[#F4F7FE] text-[#2C2C2C] text-[11px] flex items-center justify-center w-[120px] h-[35px] rounded-[20px]">
                {filter}
              </div>
            </div>

          
           
          </div>

          {/* Search + Export */}
          <div className="flex items-center space-x-[12px] bg-[#FFFFFF] p-[8px] h-[54px] rounded-[30px]">
            <div className="flex items-center bg-[#F8FAFC] border border-[#E2E8F0] rounded-[20px] px-[15px] py-[6px] shadow-sm w-[220px]">
              <input
                type="text"
                placeholder="Search Residents"
                className="bg-transparent outline-none text-[13px] text-[#475569] w-full border-none h-[26px] rounded-[30px]"
              />
            </div>

            <button
              ref={exportRef}
              onClick={(e) => handleClick(e, "export")}
              className="flex gap-[5px] text-[#A3AED0] text-[11px] border-none rounded-[20px] px-[12px] py-[6px] hover:bg-[#2563EB] hover:text-white transition relative"
            >
              <Image
                src="/icon/export.png"
                alt="export icon"
                width={13}
                height={13}
              />
              Export
            </button>
          </div>
        </div>

        {/* TABLE */}
        <table className="w-full min-w-[700px] text-sm text-left border-collapse  border-separate border-spacing-y-[8px]">
          <thead>
            <tr className="bg-[#F8FAFC] text-[#1E293B] font-semibold text-[13px] border-[10px] ">
              <th className="py-[12px] px-[16px]">Time</th>
              <th className="py-[12px] px-[16px]">Transaction Ref</th>
              <th className="py-[12px] px-[16px]">Name</th>
              <th className="py-[12px] px-[16px]">Address</th>
              <th className="py-[12px] px-[16px]">Amount Paid</th>
              <th className="py-[12px] px-[16px]">Overdue</th>
              <th className="py-[12px] px-[16px]">Duration</th>
              <th className="py-[12px] px-[16px] text-right"></th>
            </tr>
          </thead>

          <tbody>
            {initialTransactions.map((txn, index) => (
              <tr
                key={index}
                className="bg-[#FFFFFF] rounded-[10px] shadow-sm border border-[#E4E4E4] hover:shadow-[0px_4px_10px_rgba(0,0,0,0.08)] space-y-[20px]"
                style={{ borderBottom: "1px solid #E2E8F0" }}
              >
                <td className="py-[16px] px-[16px]">{txn.time}</td>
                <td className="py-[16px] px-[16px]">{txn.ref}</td>
                <td className="py-[16px] px-[16px]">{txn.name}</td>
                <td className="py-[16px] px-[16px]">{txn.address}</td>
                <td className="py-[16px] px-[16px] font-medium text-[#0F172A]">
                  {txn.amountPaid}
                </td>
                <td className="py-[16px] px-[16px]">{txn.overdue}</td>
                <td className="py-[16px] px-[16px]">{txn.duration}</td>
                <td className="py-[16px] px-[16px] text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        onClick={(e) =>
                          handleClick(e, `menu-${txn.ref}`)
                        }
                        className="text-[#94A3B8] hover:text-[#475569] border-none bg-transparent"
                      >
                        <MoreVertical size={18} />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-[176px]">
                      <DropdownMenuItem className="cursor-pointer">
                        <Eye className="w-[16px] h-[16px] mr-[8px] text-[#0F172A]" />
                        View Details
                      </DropdownMenuItem>

                      <DropdownMenuItem className="cursor-pointer">
                        <Edit className="w-[16px] h-[16px] mr-[8px] text-[#2563EB]" />
                        Edit
                      </DropdownMenuItem>

                      <DropdownMenuItem className="cursor-pointer text-red-600">
                        <Trash2 className="w-[16px] h-[16px] mr-[8px] text-[#DC2626]" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dark overlay */}
      {activeMenu && (
        <div
          className="fixed inset-0 bg-[#000000]/40 z-[9999]"
          onClick={closeMenu}
        />
      )}

      {/* Export popup */}
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

      {/* Dots menu popup */}
      {activeMenu?.startsWith("menu-") && (
        <div
          className="absolute z-[10000] bg-white rounded-[8px] shadow-lg border border-[#E2E8F0] py-[8px] w-[180px]"
          style={{
            top: menuPosition.top + 5,
            left: menuPosition.left - 150,
          }}
        >
          <div
            onClick={() => {
              ;
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

      {/* Filter popup */}
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
              setFilter("All Residents");
              closeMenu();
            }}
            className="px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer"
          >
            All Residents
          </div>

          <div
            onClick={() => {
              setFilter("Overdues");
              closeMenu();
            }}
            className="px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer"
          >
            Overdues
          </div>

          <div
            onClick={() => {
              setFilter("Active Residents");
              closeMenu();
            }}
            className="px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer"
          >
            Active Residents
          </div>
        </div>
      )}
    </section>
  );
}
