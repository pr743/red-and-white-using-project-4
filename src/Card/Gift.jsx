import React, { useState, useEffect } from "react";

const gift = [
  {
    img: "https://cloudassets.starbucks.com/is/image/sbuxcorp/HolidayWordmarkFY26",
    link: "https://www.starbucks.com/gift/00001042",
  },
  {
    img: "https://cloudassets.starbucks.com/is/image/sbuxcorp/HelloKittyFY26",
    link: "https://www.starbucks.com/gift/00001112",
  },
  {
    img: "https://cloudassets.starbucks.com/is/image/sbuxcorp/ColdSnowmanFY26",
    link: "https://www.starbucks.com/gift/00001045",
  },
  {
    img: "https://cloudassets.starbucks.com/is/image/sbuxcorp/HolidayThankYouFY26",
    link: "https://www.starbucks.com/gift/00001103",
  },
  {
    img: "https://cloudassets.starbucks.com/is/image/sbuxcorp/CupOfCheerFY26",
    link: "https://www.starbucks.com/gift/00001053",
  },
  {
    img: "https://cloudassets.starbucks.com/is/image/sbuxcorp/HappyHolidaysFY26",
    link: "https://www.starbucks.com/gift/00001033",
  },
  {
    img: "https://cloudassets.starbucks.com/is/image/sbuxcorp/HolidayYayFY26",
    link: "https://www.starbucks.com/gift/00001059",
  },
];

function Gift() {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState(4);

  useEffect(() => {
    function updateSlides() {
      if (window.innerWidth < 480) setItems(1);
      else if (window.innerWidth < 768) setItems(2);
      else if (window.innerWidth < 1024) setItems(3);
      else setItems(4);
    }
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex = Math.ceil(gift.length / items) - 1;
  const slideWidth = 100 / items;

  return (
    <section className="w-full  py-10 bg-white mt-10">
      <div className="w-full mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Gift Cards
        </h2>
        <p className="text-lg text-gray-800">Featured</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{
            width: `${gift.length * slideWidth}%`,
            transform: `translateX(-${index * slideWidth}%)`,
          }}
        >
          {gift.map((item, i) => (
            <div
              key={i}
              style={{
                width: `${slideWidth}%`,
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                boxSizing: "border-box",
              }}
            >
              <a href={item.link} className="block w-full">
                <div className="w-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-[16/9]">
                  <img
                    src={item.img}
                    alt="gift"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>  

        <button
          onClick={() => setIndex(Math.max(index - 1, 0))}
          disabled={index === 0}
          className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-white ${
            index === 0
              ? "bg-black/20 cursor-not-allowed"
              : "bg-black/50 hover:bg-black"
          }`}
        >
          ❮
        </button>

        <button
          onClick={() => setIndex(Math.min(index + 1, maxIndex))}
          disabled={index === maxIndex}
          className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-white ${
            index === maxIndex ? "bg-black/20" : "bg-black/50 hover:bg-black"
          }`}
        >
          ❯
        </button>
      </div>
    </section>
  );
}

export default Gift;
