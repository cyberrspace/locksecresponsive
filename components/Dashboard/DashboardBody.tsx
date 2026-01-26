"use client";

import DashboardChart from "./DashboardChart";
import DashboardTrans from "./DashboardTrans";

export default function DashboardBody(){
return(
  <main className=" px-[16px] space-y-[15px] max-w-full ">
    <section className="flex items-center space-x-[2rem] bg-[#F8F8F8]  h-[204px] px-[24px] py-[20px] rounded-[10px] max-w-full">
      <div>
        <h2 className="font-bold text-[18px]">
          Estate info.
        </h2>
        <p className="w-[180px] leading-[20px] text-[12px] font-normal text-[#2C2C2C]">Lakeshore (Sparklight) Estate KM 2 Lagos-Ibadan Expressway, Lagos State </p>
        <p className="leading-[5px] text-[12px] font-normal text-[#2C2C2C]">0703-456-7890</p>
      </div>

      <div className="h-[117px] w-[250px] bg-[#FFFFFF] flex flex-col items-center rounded-[6px] px-[5px] py-[5px]">
        <h2 className="font-bold text-[28px] text-[#2C2C2C]">₦ 92,500,000</h2>
        <p className="text-[12px] font-normal text-[#2C2C2C]">Amount Collected This Month</p>
      </div>

      <div className="h-[117px] w-[250px] bg-[#FFFFFF] flex flex-col items-center rounded-[6px] px-[5px] py-[5px]">
        <h2 className="font-bold text-[28px] text-[#2C2C2C]">227</h2>
        <p className="text-[12px] font-normal text-[#2C2C2C]">No of users</p>
      </div>

      <div className="h-[117px] w-[250px] bg-[#FFFFFF] flex flex-col items-center rounded-[6px] px-[5px] py-[5px]">
        <h2 className="font-bold text-[28px] text-[#2C2C2C]">82%</h2>
        <p className="text-[12px] font-normal text-[#2C2C2C]">Due collected</p>
      </div>
     
    </section>
    <section className="w-full">
      <DashboardChart />
    </section>
    <section>
      <DashboardTrans/>
    </section>
  </main>
)

}