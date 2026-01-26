"use client";

import { Search, Bell, LogOut } from "lucide-react";

export default function DashboardNav() {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const query = formData.get("search") as string;
    console.log("Search query:", query);
    // Add your search logic here — e.g., API call or filtering function
  };

  const handleNotification = () => {
    console.log("Notification icon clicked");
    // Add notification logic here — e.g., open notification modal or dropdown
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    // Add your logout logic here — e.g., clear tokens, redirect, etc.
  };

  return (
    <nav className="flex items-center justify-between w-full px-[16px]  mt-[0px] top-0 ">
      {/* Left side */}
      <div className="px-[16px]">
        <p className="text-gray-500 text-[12px] text-[#2C2C2C]">Pages / Dashboard</p>
        <h2 className="text-[30px] font-bold text-[#2C2C2C]">Dashboard</h2>
      </div>

      {/* Right side - Search box + icons */}
      <div className="flex items-center pr-[1rem]">
        <form
          onSubmit={handleSearch}
          className="bg-[#FFFFFF] flex items-center gap-[3px] w-[362px] h-[36px] rounded-[10px] p-[5px] relative"
        >
          {/* Search icon */}
          <div>
            <a
              type="submit"
              className="text-[#2B3674] hover:text-[#6E8AFC] transition-colors absolute left-[20px] z-10 flex items-center top-1/2 -translate-y-1/2"
            >
              <Search size={10} />
            </a>

            {/* Input */}
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="w-[228px] h-[36px] bg-[#F8F8F8] text-[12px] text-[#8F9BBA] rounded-[30px] px-3 border-none outline-none text-sm indent-[38px] relative"
            />

          </div>
         
          {/* Notification icon */}
          <div className=" space-x-[10px] absolute right-[5px] ">
            <a
              onClick={handleNotification}
              className="text-gray-500 hover:text-[#6E8AFC] transition-colors"
            >
              <Bell size={20} />
            </a>

            {/* Logout icon */}
            <a
              onClick={handleLogout}
              className="text-[#E53935] hover:text-[#DF4F3A] transition-colors"
            >
              <LogOut size={20} />
            </a>
          </div>
         
        </form>

       
      </div>
    </nav>
  );
}
