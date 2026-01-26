"use client";

import { useState } from "react";
import { MoreVertical, Eye, Edit, Trash2, Plus } from "lucide-react";
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

export default function TransactionsTable() {
  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);

  // Handlers
  const handleView = (ref: string) => {
    alert(`Viewing details for ${ref}`);
  };

  const handleEdit = (ref: string) => {
    alert(`Editing transaction ${ref}`);
  };

  const handleDelete = (ref: string) => {
    const confirmDelete = confirm(`Are you sure you want to delete ${ref}?`);
    if (confirmDelete) {
      setTransactions(transactions.filter((t) => t.ref !== ref));
      alert(`Transaction ${ref} deleted`);
    }
  };

  const handleAddTransaction = () => {
    const newTxn: Transaction = {
      time: "10:30 AM",
      ref: `LN-${Math.floor(Math.random() * 9000 + 1000)}`,
      name: "New User",
      address: "New Address",
      amountPaid: "₦40,000",
      overdue: "₦0",
      duration: "1 month",
    };
    setTransactions([...transactions, newTxn]);
  };

  return (
    <div className="bg-white rounded-[12px] shadow-sm w-full overflow-x-auto p-[8px]">
      {/* Header section */}
      <div className="flex items-center justify-between mb-[16px]">
       
        <button
          onClick={handleAddTransaction}
          className="flex items-center gap-[8px] bg-[#16A34A] text-white text-sm px-[12px] py-[8px] rounded-md hover:bg-[#15803D] transition"
        >
          <Plus size={16} /> Add Transaction
        </button>
      </div>

      {/* Table */}
      <table className="w-full min-w-[700px] text-sm text-left border-collapse">
        <thead>
          <tr className="bg-[#F8FAFC] text-[#1E293B] font-semibold text-[13px]">
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
          {transactions.map((txn, index) => (
            <tr
              key={index}
              className="rounded-lg bg-white shadow-sm hover:bg-[#F9FAFB] transition-all text-[#334155] my-[8px] bg-[#FFFFFF]"
              style={{ borderBottom: "1px solid #E2E8F0" }}
            >
              <td className="py-[16px] px-[16px] whitespace-nowrap ">{txn.time}</td>
              <td className="py-[16px] px-[16px]  whitespace-nowrap">{txn.ref}</td>
              <td className="py-[16px] px-[16px]  whitespace-nowrap">{txn.name}</td>
              <td className="py-[16px] px-[16px]  whitespace-nowrap">{txn.address}</td>
              <td className="py-[16px] px-[16px]  whitespace-nowrap font-medium text-[#0F172A]">
                {txn.amountPaid}
              </td>
              <td className="py-[16px] px-[16px]  whitespace-nowrap">{txn.overdue}</td>
              <td className="py-[16px] px-[16px]  whitespace-nowrap">{txn.duration}</td>
              <td className="py-[16px] px-[16px]  text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-[#94A3B8] hover:text-[#475569]">
                      <MoreVertical size={18} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[176px]">
                    <DropdownMenuItem
                      onClick={() => handleView(txn.ref)}
                      className="cursor-pointer"
                    >
                      <Eye className="w-[16px] h-[16px] mr-[8px] text-[#0F172A]" /> View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleEdit(txn.ref)}
                      className="cursor-pointer"
                    >
                      <Edit className="w-[16px] h-[16px] mr-[8px] text-[#2563EB]" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(txn.ref)}
                      className="cursor-pointer text-red-600"
                    >
                      <Trash2 className="w-[16px] h-[16px] mr-[8px] text-[#DC2626]" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
