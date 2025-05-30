import React from "react";

function TopNavbar({ navItemsMap, selectedImageIndex, selectedNavItem, setSelectedNavItem }) {
  return (
    <div className="relative border-b border-white/0 flex items-center justify-between py-3 px-6 bg-transparent">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="flex space-x-6 z-10">
        {navItemsMap[selectedImageIndex]?.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedNavItem(item)}
            className="relative text-sm font-medium text-white focus:outline-none font-rajdhani"
          >
            {item}
            {selectedNavItem === item && (
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-white rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TopNavbar;
