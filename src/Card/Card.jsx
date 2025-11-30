import React from 'react';

function Card() {
  return (
    <div className="w-full px-4 py-6 sm:py-10">
      <div className="w-full bg-green-100 p-6 sm:p-8 rounded-xl shadow-md">

       
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

         
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
              Received a gift card?
            </h2>
            <p className="text-gray-700 font-semibold text-sm sm:text-base">
              Earns 2★ Stars per $1
            </p>
          </div>

         
          <div className="flex flex-row sm:flex-row   gap-2 sm:gap-4 mt-2 sm:mt-0">
            <button className="border border-gray-500 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition w-full sm:w-auto">
              Add or Reload
            </button>

            <button className="bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-gray-800 transition w-full sm:w-auto">
              Check balance
            </button>
          </div>
        </div>

       
        <div className="mt-4 sm:mt-6 text-right">
          <a
            href="https://www.starbucks.com/terms/manage-gift-cards/"
            className="text-sm text-green-700 hover:underline"
          >
            Card Terms & Conditions ⇗
          </a>
        </div>

      </div>
    </div>
  );
}

export default Card;
