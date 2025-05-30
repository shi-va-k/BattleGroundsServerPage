// App.js
import React, { useState, useRef, useEffect } from "react";
import LeftSidebar from "./components/LeftSidebar";
import TopNavbar from "./components/TopNavbar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";
import AnotherComponent from "./components/Server_info";

function App() {
  const images = Array.from({ length: 7 }, (_, i) => `/images/img${i + 1}.png`);
  const tooltipTexts = [
  "BATTLEFIELD V",
"BATTLEFIELD 4",
"BATTLEFIELD 1",
"BATTLEFIELD HARDLINE",
"CAREER",
"WATCH",
"NEWS"
  ];

  const navItemsMap = {
    0: ["HOME", "STORE"],
  1: ["HOME", "MULTIPLAYER", "CAMPAIGN", "SOLDIER", "STORE", "MORE"],
  2: ["HOME", "MULTIPLAYER", "CAMPAIGN", "SOLDIER", "STORE", "MORE"],
  3: ["HOME"],
  4: ["CAREER"],
  5: ["WATCH"],
  6: ["NEWS"]
  };

  // Track selected left sidebar image for nav items and tooltip
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedNavItem, setSelectedNavItem] = useState(navItemsMap[0][0]);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const containerRef = useRef(null);
  const imgRefs = useRef([]);

  // This state will hold the background image shown globally — controlled by MainContent thumbnails click
  const [activeBackgroundImage, setActiveBackgroundImage] = useState('/images/imgefrstpage/img1.jpg');

  useEffect(() => {
    if (hoveredIdx === null) return;
    const imgEl = imgRefs.current[hoveredIdx];
    if (imgEl && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const imgRect = imgEl.getBoundingClientRect();
      setTooltipPos({
        top: imgRect.top + imgRect.height / 2,
        left: containerRect.right + 1,
      });
    }
  }, [hoveredIdx]);

  const [hoveredBottomIdx, setHoveredBottomIdx] = useState(null);
const [tooltipPosBottom, setTooltipPosBottom] = useState({ top: 0, left: 0 });
const bottomIconRefs = useRef([]);

useEffect(() => {
  if (hoveredBottomIdx === null) return;
  const iconEl = bottomIconRefs.current[hoveredBottomIdx];
  if (iconEl && containerRef.current) {
    const containerRect = containerRef.current.getBoundingClientRect();
    const iconRect = iconEl.getBoundingClientRect();
    setTooltipPosBottom({
      top: iconRect.top + iconRect.height / 2,
      left: containerRect.right + 1,
    });
  }
}, [hoveredBottomIdx]);

  return (
<>
<div className="fixed inset-0 -z-10">
<div
  className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
    selectedImageIndex === 2 ? "blur-[6px] brightness-50" : ""
  }`}
  style={{
    backgroundImage:
      selectedImageIndex === 2
        ? "url(/images/server_info/menu__background.jpg)"
        : `url(${activeBackgroundImage})`,
  }}
/>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black opacity-40" />
</div>

  <div className="flex h-screen">
    {/* Left Sidebar */}
    <div className="bg-transparent border-r border-gray-700 mr-4">
      <LeftSidebar
        images={images}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        setSelectedImageIndex={setSelectedImageIndex}
        setSelectedNavItem={setSelectedNavItem}
        hoveredIdx={hoveredIdx}
        setHoveredIdx={setHoveredIdx}
        containerRef={containerRef}
        imgRefs={imgRefs}
        bottomIconRefs={bottomIconRefs}
        hoveredBottomIdx={hoveredBottomIdx}
        setHoveredBottomIdx={setHoveredBottomIdx}
      />
    </div>

    {/* Tooltip */}
    {hoveredIdx !== null && (
      <div
        style={{
          position: "fixed",
          top: tooltipPos.top,
          left: tooltipPos.left,
          transform: "translateY(-50%)",
          backgroundColor: "black",
          color: "white",
          fontSize: "9px",
          padding: "3px 7px",
          borderRadius: "4px",
          pointerEvents: "none",
          zIndex: 99999,
          whiteSpace: "nowrap",
          boxShadow: "0 0 5px rgba(0,0,0,0.5)",
          fontFamily: 'rajdhani',
          letterSpacing: "0.1em" ,
        }}
      >
        {tooltipTexts[hoveredIdx] || `Image ${hoveredIdx + 1}`}
      </div>
    )}
{hoveredBottomIdx !== null && (
  <div
    style={{
      position: "fixed",
      top: tooltipPosBottom.top,
      left: tooltipPosBottom.left,
      transform: "translateY(-50%)",
      backgroundColor: "black",
      color: "white",
      fontSize: "9px",
      padding: "3px 7px",
      borderRadius: "4px",
      pointerEvents: "none",
      zIndex: 99999,
      whiteSpace: "nowrap",
      boxShadow: "0 0 5px rgba(0,0,0,0.5)",
      fontFamily: 'rajdhani',
      textTransform: "uppercase",
      letterSpacing: "0.1em" ,
      
    }}
  >
    {hoveredBottomIdx === 0 ? "Help" : "Quit"}
  </div>
)}
    {/* Main Content Area */}
    <div className="flex flex-col flex-grow">
      {selectedImageIndex !== 2 ? (
        <>
          <TopNavbar
            navItemsMap={navItemsMap}
            selectedImageIndex={selectedImageIndex}
            selectedNavItem={selectedNavItem}
            setSelectedNavItem={setSelectedNavItem}
          />
          <MainContent
            activeBackgroundImage={activeBackgroundImage}
            setActiveBackgroundImage={setActiveBackgroundImage}
          />
        </>
      ) : (
        <AnotherComponent />
      )}
    </div>

    {/* Right Sidebar */}
   <div className="bg-transparent">
      <RightSidebar />
    </div>
  </div>
</>


  );
}

export default App;
