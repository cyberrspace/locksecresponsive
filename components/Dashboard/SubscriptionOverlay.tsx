 "use client";

export default function SubscriptionOverlay() {
  return (
    <div className="fixed inset-[0px] flex items-center justify-center bg-[#000000]/40 z-[9999]">
    <div className="relative max-h-[623px] w-[843px] bg-[#FCFBFB] flex items-center justify-center p-[16px]  rounded-[20px]">
      <div className=" shadow-lg max-w-[56rem] w-full p-[32px]">
        <button
          className="absolute top-[16px] right-[16px] text-[#C0C0C0] hover:text-gray-800 text-2xl font-bold border-none bg-transparent text-[32px]" 
          onClick={() => window.dispatchEvent(new Event("closeOverlay"))}
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-[40px]">
          <h1 className="text-[26px] font-bold text-[#30404D] mb-[8px]">
            Choose your plan
          </h1>
        </div>

        {/* Plans Container */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-[24px] mb-[32px]">
          {/* Basic Plan */}
          <div className="border border-[#2F5F8B1A] rounded-[15px] p-[24px] relative w-[346px] h-[408px] bg-[#FFFFFF] ">
            <div className="absolute top-[0px] left-[0px] right-[0px] h-[4px] bg-blue-500"></div>
            <h3 className="text-[21px] font-bold text-[#30404D] mb-[12px]">BASIC</h3>
            <p className="text-[#30404DB2] mb-[16px] text-[12px] font-medium">
              Perfect for small communities starting with access control.
            </p>

            <div className="mb-[24px]">
              <span className="text-[32px] text-[#3A7ABD] font-extrabold">N150,00</span>
              <span className="text-[#98A8B3] ml-[4px] text-[12px] font-normal">/monthly</span>
            </div>

            <div className="mb-[24px]">
              <h4 className="text-[11px] font-bold text-[#30404D] mb-[12px]">Core Features:</h4>
              <ul className="space-y-[8px]">
                <li className="flex items-start">
                  <span className="text-[#2F5F8B] w-[7px] h-[6px] mr-[8px] ">✓</span>
                  <span className="text-[#30404D] text-[11px] font-medium">Up to 150 residential Units</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2F5F8B] w-[7px] h-[6px] mr-[8px]">✓</span>
                  <span className="text-[#30404D] text-[11px] font-medium">Visitor code generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2F5F8B] w-[7px] h-[6px] mr-[8px]">✓</span>
                  <span className="text-[#30404D] text-[11px] font-medium">2 admin accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2F5F8B] w-[7px] h-[6px] mr-[8px]">✓</span>
                  <span className="text-[#30404D] text-[11px] font-medium">Email Support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2F5F8B] w-[7px] h-[6px] mr-[8px]">✓</span>
                  <span className="text-[#30404D] text-[11px] font-medium">Basic Payment tracking (4% transaction fee)</span>
                </li>
              </ul>
            </div>

            <button className="flex justify-center items-center w-[302px] h-[42px] hover:bg-[#2563EB] text-[#244779] font-semibold py-[12px] px-[16px] rounded-[20px] transition duration-200 border border-[#24477966] bg-transparent absolute bottom-[40px]">
              Get Started for Free
            </button>
          </div>

          {/* Professional Plan */}
          <div className="border border-[#2F5F8B1A] rounded-[15px] p-[24px] relative  w-[346px] h-[408px] bg-[#FFFFFF]">
            <div className="absolute top-[0px] left-[0px] right-[0px] h-[4px]"></div>
            <h3 className="text-[21px] font-bold text-[#30404D] mb-[12px]">PROFESSIONAL</h3>
            <p className="text-[#30404DB2] mb-4 text-[12px] font-medium">
              For growing estates needing advanced management...
            </p>

            <div className="mb-[24px]">
              <span className="text-[32px] text-[#3A7ABD] font-extrabold">N200,000</span>
              <span className="text-gray-500 ml-1">/monthly</span>
            </div>

            <div className="mb-[24px]">
              <h4 className="text-[11px] font-bold text-[#30404D] mb-[12px]">Core Features:</h4>
              <p className="font-bold text-[#30404D] mb-[12px] text-[11px]">Everything in Basic, plus:</p>
              <ul className="space-y-[8px]">
                <li className="flex items-start">
                  <span className="text-[#2F5F8B] w-[7px] h-[6px] mr-[8px]">✓</span>
                  <span className="text-[#30404D] text-[11px] font-medium">Up to 500 residential units</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2F5F8B] w-[7px] h-[6px] mr-[8px]">✓</span>
                  <span className="text-[#30404D] text-[11px] font-medium">Custom access rules (time/date restrictions)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2F5F8B] w-[7px] h-[6px] mr-[8px]">✓</span>
                  <span className="text-[#30404D] text-[11px] font-medium">Automated payment reminders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2F5F8B] w-[7px] h-[6px] mr-[8px]">✓</span>
                  <span className="text-[#30404D] text-[11px] font-medium">Priority support (24hr response)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2F5F8B] w-[7px] h-[6px] mr-[8px]">✓</span>
                  <span className="text-[#30404D] text-[11px] font-medium">Financial reporting dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2F5F8B] w-[7px] h-[6px] mr-[8px]">✓</span>
                  <span className="text-[#30404D] text-[11px] font-medium">Reduced 2% transaction fee</span>
                </li>
              </ul>
            </div>

            <button className="flex justify-center items-center w-[302px] h-[42px] hover:bg-[#2563EB] text-[#244779] font-semibold py-[12px] px-[16px] rounded-[20px] transition duration-200  bg-transparent border border-[#24477966]">
              Start 14-Day Free Trial
            </button>
          </div>
        </div>

       
          <div className="text-center">
          <button className="text-[#007AFF] text-[11px] hover:text-blue-500 font-medium transition duration-200 border-none bg-transparent">
            I want to look around first
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}