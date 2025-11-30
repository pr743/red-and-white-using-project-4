import React, { useState, useEffect } from "react";

const encouragement = [
  {
    img: "https://globalassets.starbucks.com/digitalassets/cards/fy25/GreatDayForCoffeeFY25.png",
    link: "https://www.starbucks.com/gift/00000663",
  },
  {
    img: "https://globalassets.starbucks.com/digitalassets/cards/fy25/YouGotThisFY25.png",
    link: "https://www.starbucks.com/gift/00001015",
  },
  {
    img: "https://globalassets.starbucks.com/digitalassets/cards/fy25/LittlePerkFY25.png",
    link: "https://www.starbucks.com/gift/00001017",
  },
];

function Encouragement() {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState(1);

  useEffect(() => {
    function updateItems() {
      if (window.innerWidth < 640) setItems(1);
      else if (window.innerWidth < 768) setItems(2);
      else if (window.innerWidth < 1024) setItems(3);
      else setItems(4);
    }

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxIndex = encouragement.length - items;

  return (
    <div className="w-full px-4 sm:px-6 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Encouragement
      </h2>

      {items === 1 ? (
        
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500"
            style={{
              transform: `translateX(-${index * (100 / 1.1)}%)`,
            }}
          >
            {encouragement.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[80%] sm:w-[90%] mx-1">
                <a href={item.link}>
                  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={item.img}
                      alt="card"
                      className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>

         
          <button
            onClick={() => setIndex(Math.max(index - 1, 0))}
            disabled={index === 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full disabled:bg-black/20"
          >
            ❮
          </button>

          <button
            onClick={() => setIndex(Math.min(index + 1, maxIndex))}
            disabled={index === maxIndex}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full disabled:bg-black/20"
          >
            ❯
          </button>
        </div>
      ) : (
       
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {encouragement.map((item, i) => (
            <a key={i} href={item.link}>
              <div className="w-full overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={item.img}
                  alt="card"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Encouragement;
