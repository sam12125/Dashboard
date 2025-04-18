import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../assets/Chip_Card.png';
import Chip2 from '../assets/Chip_Card (2).png';
import Card from '../assets/card.png';
import Card2 from '../assets/card2.png';

function Cards() {
  return (
    <div className="w-[90%] sm:w-[60%] rounded-lg p-4 sm:p-6 sm:pl-8 mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-[#343C6A]">My Cards</h1>
        <Link to="/card-list">
          <p className="cursor-pointer text-lg sm:text-xl font-medium text-[#343C6A] hover:underline underline-offset-4 transition duration-200">
            See All
          </p>
        </Link>
      </div>

      {/* Card Section */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {/* First Card */}
        <div className="bg-gradient-to-r from-[#5B5A6F] to-[#000000] shadow-md rounded-[30px] p-4 sm:p-6 text-white flex-1 h-auto sm:h-[235px] flex flex-col justify-between">
          <div className="flex justify-between">
            <div>
              <p className="text-sm">Balance</p>
              <p className="text-lg sm:text-2xl font-semibold">$5,756</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              <img src={Chip} alt="Chip" className="w-full h-auto object-contain" />
            </div>
          </div>

          <div className="flex justify-between text-xs sm:text-sm mt-4">
            <div>
              <p className="text-[10px] sm:text-[11px] opacity-70">CARD HOLDER</p>
              <p className="font-semibold">Eddy Cusuma</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] opacity-70">VALID THRU</p>
              <p className="font-semibold">12/22</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="mt-4 text-sm sm:text-lg tracking-widest">3778 **** **** 1234</div>
            <img src={Card} alt="Card Logo" className="w-12 sm:w-auto" />
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-white hidden sm:flex shadow-md rounded-[30px] p-4 sm:p-6 text-[#343C6A] flex-1 h-auto sm:h-[235px] flex flex-col justify-between">
          <div className="flex justify-between">
            <div>
              <p className="text-sm">Balance</p>
              <p className="text-lg sm:text-2xl font-semibold">$9,245</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              <img src={Chip2} alt="Chip" className="w-full h-auto object-contain" />
            </div>
          </div>

          <div className="flex justify-between text-xs sm:text-sm mt-4">
            <div>
              <p className="text-[10px] sm:text-[11px] text-gray-400">CARD HOLDER</p>
              <p className="font-semibold">Alexa Mart</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] text-gray-400">VALID THRU</p>
              <p className="font-semibold">09/25</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="mt-4 text-sm sm:text-lg tracking-widest">9283 **** **** 6721</div>
            <img src={Card2} alt="Card Logo" className="w-12 sm:w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
