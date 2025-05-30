import React from "react";

function RightSidebar() {
  return (
    <div className="p-4 flex flex-col space-y-4 pt-16 flex-[0_0_auto] bg-transparent">

      <div className="space-y-2">
        <img src="/images/RightSide/1.png" alt="right-1" className="w-3 h-3" />
        <img
          src="/images/RightSide/2.png"
          alt="right-2"
          className="w-8 h-8 object-contain cursor-pointer transition duration-200"
        />
      </div>
      <div className="space-y-2">
        <img
          src="/images/RightSide/3.png"
          alt="right-3"
          className="w-3 h-3 border-2 border-green-400 rounded-md object-contain cursor-pointer transition duration-200"
        />
        <img
          src="/images/RightSide/4.png"
          alt="right-4"
          className="w-8 h-8 object-contain cursor-pointer transition duration-200"
        />
      </div>
      <div className="space-y-2">
        <img
          src="/images/RightSide/5.png"
          alt="right-5"
          className="w-3 h-3 object-contain cursor-pointer transition duration-200"
        />
        <img
          src="/images/RightSide/6.png"
          alt="right-6"
          className="w-8 h-8 object-contain cursor-pointer transition duration-200"
        />
      </div>
 </div>
  );
}

export default RightSidebar;
