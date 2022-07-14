import React from 'react';

const Banner = () => {
  return (
    <div className=" w-full h-[25vh] lg:h-[65vh]   relative">
      <img
        className=" w-full h-full"
        src="https://www.thoughtco.com/thmb/C7RiS4QG5TXcBG2d_Sh9i4hFpg0=/3620x2036/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg"
        alt=""
      />
      <div className=" absolute top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
      <div className="absolute top-0 bottom-0 w-full z-20 flex flex-col items-center justify-center h-full">
        <div className=" headText text-white capitalize text-[30px] lg:text-[60px] font-bold">
          ope's
        </div>
        <div className=" -mt-5 text-white uppercase text-[30px] lg:text-[60px] font-bold">
          clothes
        </div>
        <p className="w-[300px] text-white text-sm text-center lg:text-base">
          Your clothes plug , I sell designers shirts , bags , trousers and
          jackets
        </p>
      </div>
    </div>
  );
};

export default Banner;
