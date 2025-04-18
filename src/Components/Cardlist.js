import React from 'react';
import Chip from '../assets/Chip_Card.png';
import Chip2 from '../assets/Chip_Card (2).png';
import Card from '../assets/card.png';
import Card2 from '../assets/card2.png';

function Cardlist() {
  return (
    <div className="w-[95%] mx-auto rounded-lg p-4 sm:p-6 pl-4 sm:pl-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-[#343C6A]">My Cards</h1>
      </div>

      {/* Scrollable Card Section on Mobile */}
      <div className="flex flex-col sm:flex-row flex-nowrap gap-4 overflow-x-auto pb-2">
        
        {/* Card Template */}
        {[{
          balance: "$5,756",
          holder: "Eddy Cusuma",
          valid: "12/22",
          number: "3778 **** **** 1234",
          chip: Chip,
          logo: Card,
          bg: "bg-gradient-to-r from-[#5B5A6F] to-[#000000]",
          text: "text-white"
        }, {
          balance: "$9,245",
          holder: "Alexa Mart",
          valid: "09/25",
          number: "9283 **** **** 6721",
          chip: Chip2,
          logo: Card2,
          bg: "bg-white",
          text: "text-[#343C6A]"
        }, {
          balance: "$3,110",
          holder: "Jordan Lee",
          valid: "03/27",
          number: "5142 **** **** 8722",
          chip: Chip2,
          logo: Card2,
          bg: "bg-neutral-100",
          text: "text-[#343C6A]"
        }].map((card, index) => (
          <div
            key={index}
            className={`${card.bg} ${card.text} shadow-md rounded-[30px] p-4 sm:p-6 flex-shrink-0 flex-1 min-w-[80%] sm:min-w-0 sm:h-[235px] h-[200px] flex flex-col justify-between`}
          >
            <div className="flex justify-between">
              <div>
                <p className="text-sm">Balance</p>
                <p className="text-xl sm:text-2xl font-semibold">{card.balance}</p>
              </div>
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={card.chip} alt="Chip" className="w-full h-auto object-contain" />
              </div>
            </div>

            <div className="flex justify-between text-sm mt-4">
              <div>
                <p className="text-[11px] text-gray-400">CARD HOLDER</p>
                <p className="font-semibold">{card.holder}</p>
              </div>
              <div>
                <p className="text-[11px] text-gray-400">VALID THRU</p>
                <p className="font-semibold">{card.valid}</p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="mt-4 text-sm sm:text-lg tracking-widest">{card.number}</div>
              <img src={card.logo} alt="Card Logo" className="w-10 sm:w-auto" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cardlist;
