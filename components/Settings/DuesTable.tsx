"use client";

import { useState } from "react";
import { Trash2, Pencil } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function DuesTable() {
  const [bills, setBills] = useState([
    {
      id: 1,
      name: "Estate Dues",
      amount: "₦50,000",
      periodic: "Monthly",
      account: "001122934435",
      bank: "Zenith Bank",
      active: true,
      checked: false,
      editing: false,
    },
    {
      id: 2,
      name: "Security Salary",
      amount: "₦50,000",
      periodic: "Monthly",
      account: "001122934435",
      bank: "Zenith Bank",
      active: true,
      checked: false,
      editing: false,
    },
    {
      id: 3,
      name: "Road Project",
      amount: "₦50,000",
      periodic: "Monthly",
      account: "001122934435",
      bank: "Zenith Bank",
      active: true,
      checked: false,
      editing: false,
    },
  ]);

  const toggleBill = (id: number) => {
    setBills((prev) =>
      prev.map((bill) =>
        bill.id === id ? { ...bill, active: !bill.active } : bill
      )
    );
  };

  const toggleEdit = (id: number) => {
    setBills((prev) =>
      prev.map((bill) =>
        bill.id === id ? { ...bill, editing: !bill.editing } : bill
      )
    );
  };

  const updateBill = (id: number, field: string, value: string) => {
    setBills((prev) =>
      prev.map((bill) =>
        bill.id === id ? { ...bill, [field]: value } : bill
      )
    );
  };

  const deleteBill = (id: number) => {
    setBills((prev) => prev.filter((bill) => bill.id !== id));
  };

  const addBill = () => {
    const newBill = {
      id: Date.now(),
      name: "New Bill",
      amount: "₦0",
      periodic: "Monthly",
      account: "0000000000",
      bank: "Bank Name",
      active: false,
      checked: false,
      editing: false,
    };
    setBills((prev) => [...prev, newBill]);
  };

  return (
    <div className="w-full mt-4">
      {/* TABLE */}
      <h2 className="font-normal text-[12px] text-[#2A224F]">All Bills</h2>
      <table className="w-full text-left text-[13px] py-[10px] text-[#000000] border-separate border-spacing-[0px]  ">
        
        <thead className="border-b border-[#E6E6E6] py-[10px]">
          <tr className="text-[#2A224F] font-medium py-[10px] text-[9px]">
            <th className="my-[10px] text-[#2A224F] font-normal">Edit</th>
            <th className="py-[10px]">Bill Names</th>
            <th className="py-[10px]">Amount</th>
            <th className="py-[10px]">Periodic</th>
            <th className="py-[10px]">Account No.</th>
            <th className="py-[10px]">Bank Name</th>
            <th className="py-[10px]"></th>
          </tr>
        </thead>
        
        <tbody className="text-[#2A224F] font-normal text-[9px]">
          {bills.map((bill) => (
            <tr key={bill.id} className="border-b border-[#E5E7EB]">
              {/* EDIT ICON */}
              <td className="py-2">
                <Pencil
                  size={16}
                  className="cursor-pointer text-[#2A3AFF]"
                  onClick={() => toggleEdit(bill.id)}
                />
              </td>

              {/* Bill Name */}
              <td className="py-2">
                {bill.editing ? (
                  <input
                    className="border px-1 text-[13px] w-full"
                    value={bill.name}
                    onChange={(e) =>
                      updateBill(bill.id, "name", e.target.value)
                    }
                  />
                ) : (
                  bill.name
                )}
              </td>

              {/* Amount */}
              <td className="py-2">
                {bill.editing ? (
                  <input
                    className="border px-1 text-[13px] w-full"
                    value={bill.amount}
                    onChange={(e) =>
                      updateBill(bill.id, "amount", e.target.value)
                    }
                  />
                ) : (
                  bill.amount
                )}
              </td>

              {/* Period */}
              <td className="py-2">
                {bill.editing ? (
                  <input
                    className="border px-1 text-[13px] w-full"
                    value={bill.periodic}
                    onChange={(e) =>
                      updateBill(bill.id, "periodic", e.target.value)
                    }
                  />
                ) : (
                  bill.periodic
                )}
              </td>

              {/* Account */}
              <td className="py-2">
                {bill.editing ? (
                  <input
                    className="border px-1 text-[13px] w-full"
                    value={bill.account}
                    onChange={(e) =>
                      updateBill(bill.id, "account", e.target.value)
                    }
                  />
                ) : (
                  bill.account
                )}
              </td>

              {/* Bank */}
              <td className="py-2">
                {bill.editing ? (
                  <input
                    className="border px-1 text-[13px] w-full"
                    value={bill.bank}
                    onChange={(e) =>
                      updateBill(bill.id, "bank", e.target.value)
                    }
                  />
                ) : (
                  bill.bank
                )}
              </td>

              {/* TOGGLE + DELETE */}
              <td className="flex items-center gap-[3rem] py-[2px]">
                <Switch className="data-[state=checked]:bg-[#86EFAC] data-[state=unchecked]:bg-[#EF4444]"
                  checked={bill.active}
                  onCheckedChange={() => toggleBill(bill.id)}
                />

                <Trash2
                  size={18}
                  className="text-[#EF4444] cursor-pointer"
                  onClick={() => deleteBill(bill.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* CREATE NEW BILL */}
      
      <p
        onClick={addBill}
        className="text-[#2A224F] text-[13px] mt-2 cursor-pointer"
      >
        + Create New Bills
      </p>
    </div>
  );
}
