// import React from 'react'

// function Effortlessly() {
//   return (
//     <div className="w-full px-6 py-14">
//       <div className="max-w-6xl mx-auto bg-[#f7f7f7d1] rounded-2xl p-10 
//                       flex flex-col md:flex-row items-center gap-10 shadow-md">

       
//         <div className="w-full md:w-1/2 flex justify-center">
//           <img
//             src="https://www.starbucks.com/weblx/images/gift/group-gift-cards.png"
//             alt="Group Gift Cards"
//             className="w-full max-w-xs rounded-xl object-cover"
//           />
//         </div>

        
//         <div className="w-full md:w-1/2 flex flex-col gap-2 font-bold text-center md:text-left">

         
//           <h2 className="text-xl md:text-2xl text-gray-800">
//             Effortlessly send up to 10
//           </h2>

          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xl md:text-2xl">
//             <span>eGifts per purchase. Select</span>
//             <span>a design to start!</span>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Effortlessly;





import React from 'react'

function Effortlessly() {
  return (
    <div className="w-full px-6 py-14 ">
      <div className="max-w-6xl mx-auto bg-[#f7f7f7d1] rounded-2xl p-10 
                      flex flex-row items-center gap-10 shadow-md">

       
        <div className="w-1/2 flex justify-center">
          <img
            src="https://www.starbucks.com/weblx/images/gift/group-gift-cards.png"
            alt="Group Gift Cards"
            className="w-full max-w-xs rounded-xl object-cover"
          />
        </div>

       
        <div className="w-full md:w-1/2 flex flex-col gap-4 font-bold text-center md:text-left">
         <h2 className="text-xl md:text-2xl text-gray-800">
            Effortlessly send up to 10
            eGifts per purchase. Select
            a design to start!

          </h2>
         
        </div>

      </div>
    </div>
  );
}

export default Effortlessly;
