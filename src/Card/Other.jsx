import React from 'react'

function Other() {
  return (
    <div className="w-full px-6 py-16 bg-[#edebe9]">

      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">

     
        <div className="w-full lg:w-1/2 px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About eGift cards
          </h2>

          <p className="text-gray-700 font-semibold mb-2">
            A Starbucks eGift card (also known as an “eGift”) is a Starbucks Gift Card that is <br />
            purchased and sent digitally.
          </p>

          <p className="text-gray-700 mb-6">
            For Senders of an eGift, go to eGift History when signed in to view, send, or <br />
            resend eGifts you’ve purchased — or, to directly contact Starbucks eGift <br />
            Support for help with your order.
          </p>

          <h3 className='text-2xl font-bold text-gray-900 mb-4'>
            Questions around eGift cards?
          </h3>

          <p className='text-gray-700 mb-10'>
            Check our Frequently Asked Questions — your question might already be <br />
            answered. There, you’ll find answers for all Starbucks Gift Cards in general <br />
            (including eGifts).
          </p>

          <button className="border border-gray-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
            Card FAQs ⇗
          </button>
        </div>

       
        <div className="w-full lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            About Starbucks Gift Cards in general
          </h2>

          <p className="text-gray-700 font-semibold mb-2">
            Starbucks Gift Cards, including eGifts, can be used to pay in a Starbucks store or <br />
            to join Starbucks® Rewards.
          </p>

          <p className="text-gray-700 mb-6">
            Register Gift Cards and eGifts to a Starbucks® Rewards account and earn 2★ per <br />
            dollar every time you pay with that card. Those Stars quickly add up to free <br />
            food, drinks, and more!
          </p>

          <button className="border border-gray-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
            Card Terms & Conditions ⇗
          </button>
        </div>

      </div>
    </div>
  )
}

export default Other;


