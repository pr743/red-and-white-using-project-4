import React from 'react'

function Business() {
  return (
  <div className="w-full px-6 py-16 #f9f9f9 flex">
      
     <div className="max-w-6xl mx-auto bg-white p-10 flex flex-col md:flex-row items-center gap-10 rounded-2xl shadow-md">

        
        <div className="w-full md:w-1/2">
          <img
            src="https://www.starbucks.com/weblx/images/gift/bulk-gift-cards.jpg"
            alt="Gift"
            className="w-full h-72 md:h-95  object-cover shadow-lg"
          />
        </div>

       
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Business gifting — simplified
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Bulk send physical or digital Starbucks Cards to gift, reward,
            incentivize, or show appreciation towards your customers, clients
            and team members. Minimum 15 cards per order.
          </p>

          <button className="border border-gray-800 px-5 py-2 rounded-xl text-gray-900 font-medium   transition">
            Shop now ⇗
          </button>
        </div>

      </div>
    </div>
  )
}

export default Business
