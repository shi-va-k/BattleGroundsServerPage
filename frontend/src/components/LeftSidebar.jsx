import React from "react";
import { PowerIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

function LeftSidebar({
  images,
  selectedImage,
  setSelectedImage,
  setSelectedImageIndex,
  setSelectedNavItem,
  hoveredIdx,
  setHoveredIdx,
  containerRef,
  imgRefs,
  bottomIconRefs,         
  hoveredBottomIdx,       
  setHoveredBottomIdx, 
}) {
  const navItemsMap = {
    0: ["Home", "Store"],
    1: ["Home", "Multiplayer", "Campaign", "Soldier", "Store", "More"],
    2: ["Home", "Multiplayer", "Campaign", "Soldier", "Store", "More"],
    3: ["Home"],
    4: ["Career"],
    5: ["Watch"],
    6: ["News"]
  };

  return (
   <div
  ref={containerRef}
  className="flex flex-col justify-between items-center h-full pr-4 overflow-y-auto flex-[0_0_auto] relative z-20 bg-transparent"
>
  {/* Top Image List */}
  <div className="flex flex-col items-center space-y-4 pt-10 mt-20">
    {images.map((src, idx) => (
      <div
        key={idx}
        className="relative flex items-center w-full pl-2"
        onMouseEnter={() => setHoveredIdx(idx)}
        onMouseLeave={() => setHoveredIdx(null)}
      >
        {selectedImage === src && (
          <div className="absolute left-0 h-8 w-[2px] bg-orange-400 rounded-r-md" />
        )}
        <img
          ref={(el) => (imgRefs.current[idx] = el)}
          src={src}
          alt={`img-${idx + 1}`}
          className={`w-7 h-8 object-contain cursor-pointer transition duration-200 ml-2 ${
            selectedImage === src
              ? "brightness-100"
              : "brightness-50 hover:brightness-100"
          }`}
          onClick={() => {
            setSelectedImage(src);
            setSelectedImageIndex(idx);
            setSelectedNavItem(navItemsMap[idx]?.[0] || "");
          }}
        />
      </div>
    ))}
  </div>

  {/* Bottom Icons */}
 <div className="flex flex-col items-center space-y-4 pb-10 pl-4">
  {/* Help Icon */}
  <div
    className="relative"
    ref={(el) => (bottomIconRefs.current[0] = el)}
    onMouseEnter={() => setHoveredBottomIdx(0)}
    onMouseLeave={() => setHoveredBottomIdx(null)}
  >
    <QuestionMarkCircleIcon className="w-5 h-5 text-gray-500 cursor-pointer hover:text-red-400 transition duration-200" />
  </div>

  {/* Quit Icon */}
  <div
    className="relative"
    ref={(el) => (bottomIconRefs.current[1] = el)}
    onMouseEnter={() => setHoveredBottomIdx(1)}
    onMouseLeave={() => setHoveredBottomIdx(null)}
  >
    <PowerIcon className="w-4 h-4 text-gray-500 cursor-pointer hover:text-red-400 transition duration-200" />
  </div>
</div>
</div>

  );
}

export default LeftSidebar;
