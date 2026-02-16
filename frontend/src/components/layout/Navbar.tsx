import { useState } from "react";

function Navbar() {
  const [activeTab, setActiveTab] = useState("Projects");
  const tabs = ["Home", "Projects", "About"];
  return (
    <div className="flex justify-center items-center w-full bg-[#87CEEB] p-2">
      <nav className="flex items-center w-full max-w-xs md:max-w-max justify-between p-1.5 bg-[#F5F5F5] rounded-full shadow-sm">
        {tabs.map((tab) => (
          <button 
          key={tab}
          onClick={()=>setActiveTab(tab)}
          className={`
              flex-1 md:flex-none
              px-4 md:px-8 
              py-2 md:py-3 
              text-sm 
              font-medium transition-all duration-300 ease-in-out rounded-full
              ${
                activeTab === tab
                  ? 'bg-white text-[#333333] shadow-md' 
                  : 'text-[#696969] hover:text-[#454545]'
              }
            `}
          >
            {tab}
            </button>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
