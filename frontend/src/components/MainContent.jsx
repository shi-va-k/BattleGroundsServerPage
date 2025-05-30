import React from "react";

const MainContent = ({ activeBackgroundImage, setActiveBackgroundImage }) => {
  const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

  return (
    <div className="relative flex justify-center items-center bg-transparent h-full p-6 text-white">
      {/* Content */}
      <div className="max-w-xl text-center space-y-6 relative z-10 font-rajdhani">
        <div>
          <h2 className="text-3xl font-bold">The Company</h2>
          <p className="font-orbitron text-lg">Company</p>
        </div>

        <p className="font-roboto">
          Create the soldier you’ve always wanted. Alter your soldier’s appearance. Customize outfits, gender, helmets, skin color, and war paint. Stand out on the battlefield.
        </p>

        <div className="flex justify-center space-x-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={`/images/imgefrstpage/${img}`}
              alt={`thumb-${i}`}
              className="w-40 h-30 object-cover cursor-pointer border-2 border-white hover:scale-105 transition"
              onClick={() => setActiveBackgroundImage(`/images/imgefrstpage/${img}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
