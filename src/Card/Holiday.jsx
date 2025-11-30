import React, { useState, useEffect } from "react";

const day = [
  {
    img: "https://cloudassets.starbucks.com/is/image/sbuxcorp/HappyHolidaysFY26",
    link: "https://www.starbucks.com/gift/00001033"
  },
  {
    img: "https://cloudassets.starbucks.com/is/image/sbuxcorp/ColdSnowmanFY26",
    link: "https://www.starbucks.com/gift/00001045"
  },
  {
    img: "https://cloudassets.starbucks.com/is/image/sbuxcorp/HappyHolidaysRibbonFY26",
    link: "https://www.starbucks.com/gift/00001036"
  },
  {
    img: "https://cloudassets.starbucks.com/is/image/sbuxcorp/HotCocoaFY26",
    link: "https://www.starbucks.com/gift/00001086"
  },
  {
    img: "https://cloudassets.starbucks.com/is/image/sbuxcorp/FaLaLaFY26",
    link: "https://www.starbucks.com/gift/00001068"
  },
];

function Holiday() {
  const [index, setIndex] = useState(0);
  const [itemPerSide, setItemPerSide] = useState(4);

  
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 480) setItemPerSide(1);      
      else if (window.innerWidth < 768) setItemPerSide(2); 
      else if (window.innerWidth < 1024) setItemPerSide(3);
      else setItemPerSide(4);                              
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const maxIndex = Math.ceil(day.length / itemPerSide) - 1;

  const nextSlide = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="w-full px-6 py-10">
      <h6 className="text-2xl text-gray-900 mb-4">Holiday</h6>

      <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl">

        <div
          className="flex transition-transform duration-700 gap-7"
          style={{
            transform: `translateX(-${index * (100 / Math.ceil(day.length / itemPerSide))}%)`
          }}
        >
          {day.map((item, i) => (
            <a key={i} href={item.link} className="shrink-0">
              <img
                src={item.img}
                alt=""
                className={`rounded-xl object-cover hover:scale-105 transition-transform duration-300 cursor-pointer 
                  ${itemPerSide === 1 ? "w-80 h-52 mx-auto" : "w-72 h-44"}`}
              />
            </a>
          ))}
        </div>

       
        <button
          onClick={prevSlide}
          disabled={index === 0}
          className={`absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full text-white 
            ${index === 0 ? "bg-black/20 cursor-not-allowed" : "bg-black/50 hover:bg-black"}`}
        >
          ❮
        </button>

       
        <button
          onClick={nextSlide}
          disabled={index === maxIndex}
          className={`absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full text-white 
            ${index === maxIndex ? "bg-black/20" : "bg-black/50 hover:bg-black"}`}
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default Holiday;
