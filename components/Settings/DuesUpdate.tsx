"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import DuesTable from "./DuesTable";

export default function DuesUpdate() {
  const [accessCode, setAccessCode] = useState(false);
  const [paymentCollection, setPaymentCollection] = useState(false);

  return (

    <div className="w-full h-[506px] bg-[#FFFFFF] px-[15px] space-y-[10px] pl-[20px] ">
      <div className="pt-[20px] w-[385px]">
        <h2 className="text-[16px] text-[#2A224F] font-bold ">Access Code</h2>
        <div className="flex items-center justify-between ">
         
          <p className="text-[#2A224F] font-normal text-[9px] w-[169px]">Your residents can now use the access control</p>

          <Switch className="data-[state=checked]:bg-[#86EFAC] data-[state=unchecked]:bg-[#EF4444]" checked={accessCode} onCheckedChange={setAccessCode} />

         
            
         
        </div>
       
        <div className="flex justify-between items-center">
          <p className="text-[9px] font-normal">How many Entrance do you have?</p>
          <label htmlFor="" className="border w-[81px] h-[21px] border-[#E6E6E6] flex justify-between px-[5px]">
              3
            <select name="number" id="" className="border-none border-0 focus:ring-0 focus:outline-none">
              <option value=""></option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
              
            </select>
            </label>
        </div>
        <div className="w-[388px] text-[#E6E6E6] border-[1px]"></div>
        <h2 className="text-[16px] text-[#2A224F] font-bold ">Payment collection</h2>
        <div className="flex items-center justify-between">
          
          <p className="text-[#2A224F] font-normal text-[9px] w-[169px]">Your residents can now pay for all dues and projects fee</p>
          <Switch className="data-[state=checked]:bg-[#86EFAC] data-[state=unchecked]:bg-[#EF4444]"
            checked={paymentCollection}
            onCheckedChange={setPaymentCollection}
          />

        </div>
      </div>
      <DuesTable/>
     


    </div>

  )

}