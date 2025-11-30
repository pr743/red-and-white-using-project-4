import React from "react";

const Kitty = [
  {
    img: "https://cloudassets.starbucks.com/is/image/sbuxcorp/HelloKittyFY26",
    link: "https://www.starbucks.com/gift/00001112",
  },
];

function Hello() {
  return (
    <div className="w-full px-6 py-10">
      <h6 className="text-3xl md:text-4xl text-gray-900 mb-4">Hello Kitty</h6>

      <div className="w-full max-w-7xl mx-auto flex ">
        {Kitty.map((item, index) => (
          <a key={index} href={item.link} className="block">
            <img
              src={item.img}
              alt="Hello Kitty"
              className="
                rounded-xl object-cover cursor-pointer 
                hover:scale-105 transition-transform duration-300
                w-80 h-52 mx-auto        
                sm:w-96 sm:h-60          
                md:w-72 md:h-44          
              "
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Hello;
