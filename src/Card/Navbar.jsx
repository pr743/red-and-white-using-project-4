import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const menuItems = [
    { title: "Menu", link: "https://www.starbucks.com/menu" },
    { title: "Rewards", link: "https://www.starbucks.com/rewards" },
    { title: "Gift Cards", link: "https://www.starbucks.com/gift" },
    {
      title: "Find a store",
      link: "https://www.starbucks.com/store-locator?map=39.6,-101.3,5z",
    },
  ];

 
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      
      <nav className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-3 md:py-4 md:px-6">
          
          <div className="flex items-center gap-3">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png"
              alt="Starbucks Logo"
              className="h-10 md:h-12"
            />

            <div className="hidden md:flex items-center gap-8 ml-6">
              {menuItems.map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  className="text-gray-800 font-medium hover:text-green-700"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

         
          <div className="hidden md:flex items-center gap-4">
            <button className="border px-5 py-2 rounded-full hover:bg-gray-100">
              Sign in
            </button>
            <button className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800">
              Join now
            </button>
          </div>

         
          <div className="md:hidden">
            <button ref={buttonRef} onClick={() => setOpen(!open)}>
              {open ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png"
            alt="Starbucks Logo"
            className="h-10"
          />

          <button onClick={() => setOpen(false)}>
            <FiX size={28} />
          </button>
        </div>

        
        <div className="flex flex-col p-5 gap-6">
          {menuItems.map((item, index) => (
            <a
              href={item.link}
              key={index}
              onClick={() => setOpen(false)}
              className="text-lg text-gray-800 border-b pb-3 hover:text-green-700"
            >
              {item.title}
            </a>
          ))}

          <button className="border px-5 py-2 rounded-full hover:bg-gray-100">
            Sign in
          </button>

          <button className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800">
            Join now
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
