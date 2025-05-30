import React, { useState, useEffect, useMemo } from 'react';

const Section = ({ title, data }) => (
  <div className="py-3 w-full">
    <p className="font-medium text-[10px] mb-1 uppercase tracking-wider">{title}</p>
    {Object.entries(data).map(([key, value]) => (
      <div
        key={key}
        className="flex justify-between py-2 px-4 border-b border-gray-700  hover:bg-white hover:text-black transition duration-200"
      >
        <span className="uppercase font-medium">{key.replace(/([A-Z])/g, ' $1')}</span>
        <span className={key === "tickets" || key === "vehicleSpawnDelay" ? "text-yellow-400" : ""}>
          {value}
        </span>
      </div>
    ))}
  </div>
);


const AnotherComponent = () => {
  const [serverData, setServerData] = useState([]);
  const [settingsData, setSettingsData] = useState(null);

  useEffect(() => {
    // Fetch serverData
    fetch('http://localhost:5000/api/server-data')
      .then((res) => res.json())
      .then((data) => setServerData(data))
      .catch(console.error);

    // Fetch settingsData
    fetch('http://localhost:5000/api/settings-data')
      .then((res) => res.json())
      .then((data) => setSettingsData(data))
      .catch(console.error);
  }, []);

  const imageData = [
    {
      src: 'mapImg1',
      title1: 'conquest large',
      title2: 'dawnbreaker',
    },
    {
      src: 'mapImg2',
      title1: 'conquest large',
      title2: 'propaganda',
    },
    {
      src: 'mapImg3',
      title1: 'conquest large',
      title2: 'operation locker',
    },
    {
      src: 'mapImg4',
      title1: 'conquest large',
      title2: 'lancang dam',
    },
  ];

  const shuffledImages = useMemo(() => {
    return Array.from({ length: 16 }, () => {
      return imageData[Math.floor(Math.random() * imageData.length)];
    });
  }, []);

  return (
    <div className="w-2/3 h-full overflow-y-auto p-4 relative z-10 text-white mt-24 cursor-default">
      <h1 className='mb-2 font-rajdhani font-semibold text-xl tracking-wider'>! RC3-BASEMAPS</h1>
      <div className='text-[10px] mb-2 flex gap-2 items-center cursor-default'>
        <img src='/images/Server_info/germany-flag.png' alt='Germany flag' className='' />
        <p className='uppercase font-rajdhani tracking-wider pt-1 font-medium'>conquest large - Lancang Dam - Custom - 60hz</p>
      </div>
      <p className="text-[10px] leading-tight m-0 p-0 mb-6 cursor-default font-rajdhani tracking-wider">
        Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord<br />
        https://discord.gg/3r5NK4d
      </p>
      <div className="flex gap-5 text-[10px] ">
        <button className=" border-[1px] border-gray-600 px-20 py-2 uppercase hover:bg-white hover:text-black cursor-default font-rajdhani font-medium tracking-wider">Join</button>
        <button className="border-[1px] border-gray-600 px-20 py-2 uppercase hover:bg-white hover:text-black cursor-default font-rajdhani font-medium tracking-wider">Spectate</button>
        <button className="border-[1px] border-gray-600 px-8 py-2 uppercase hover:bg-white hover:text-black cursor-default font-rajdhani font-medium tracking-wider">Join as Commander</button>
        <button className="border-[1px] border-gray-600 px-6 py-2 uppercase hover:bg-white hover:text-black cursor-default font-rajdhani font-medium tracking-wider">
          ★ A3872
        </button>
      </div>

      {/* Server data from backend */}
      <div className="text-sm flex items-center gap-20 py-3 cursor-default">
        {serverData.map(({ label, value }) => (
          <div key={label}>
            <div className="text-white text-[10px] uppercase font-rajdhani font-medium tracking-wider">{label}</div>
            <div className="font-semibold text-white text-lg font-rajdhani">{value}</div>
          </div>
        ))}
      </div>

      {/* Settings data from backend */}
      {settingsData && (
        <div className="flex flex-row space-x-6 w-[75%] uppercase font-rajdhani tracking-wider">
          <div className="w-1/3 cursor-default ">
            <Section title="Settings" data={settingsData.settings} />
          </div>
          <div className="w-1/3 cursor-default">
            <Section title="Advanced" data={settingsData.advanced} />
          </div>
          <div className="w-1/3 cursor-default">
            <Section title="Rules" data={settingsData.rules} />
          </div>
        </div>
      )}

      <div>
        <p className='text-[10px] font-rajdhani'>MAP ROTATION</p>
        <div className="grid grid-cols-4 w-full mt-3 gap-x-8 gap-y-3">
          {shuffledImages.map((data, idx) => (
            <div key={idx} className="w-full relative group h-[110px] overflow-hidden flex">
              <div className="h-[60px] overflow-hidden">
                <img
                  src={`/images/Server_info/${data.src}.png`}
                  alt={`${data.title2}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:-translate-y-[6px]"
                />
              </div>
              <div className="absolute bottom-[-3px] left-0 w-full h-[60px] bg-black/40 backdrop-blur-lg group-hover:bg-white transition-all duration-300 flex items-center">
                <span className="text-white group-hover:text-black text-xs transition duration-300 text-start px-4 font-rajdhani tracking-wider font-semibold">
                  <p>{data.title1}</p>
                  <p>{data.title2}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnotherComponent;
