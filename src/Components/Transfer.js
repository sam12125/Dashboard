import React from 'react';
import { Send, ArrowRight } from 'lucide-react';
import Person1 from '../assets/Mask Group (1).png';
import Person2 from '../assets/Mask Group (2).png';
import Person3 from '../assets/Mask Group (3).png';

function Transfer() {
  return (
    <div className="w-[90%] sm:w-[40%] h-auto rounded-lg p-4 sm:p-6 overflow-hidden mx-auto">
      {/* Scrollbar Styles */}
      <style>
        {`
          /* Custom scrollbar styles */
          .scrollable-container::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }

          .scrollable-container::-webkit-scrollbar-thumb {
            background-color: #ffffff; /* White color for the thumb */
            border-radius: 10px;
          }

          .scrollable-container::-webkit-scrollbar-track {
            background-color: #f0f0f0; /* Light background for the track */
          }
        `}
      </style>

      {/* Heading */}
      <h1 className="text-xl sm:text-2xl font-semibold text-[#343C6A] mb-4 sm:mb-6 pl-2">
        Quick Transfer
      </h1>

      {/* Card */}
      <div className="rounded-[20px] p-4 sm:p-6 bg-white shadow-md flex flex-col gap-8 h-[300px]">
        
        {/* Scrollable User List */}
        <div className="flex items-center justify-between">
          <div className="flex-1 overflow-x-auto scrollable-container">
            <div className="flex items-center gap-4 sm:gap-6 pl-2 pr-2">
              {[{ img: Person1, name: "Livia Bator", role: "CEO" },
                { img: Person2, name: "Randy Press", role: "Director" },
                { img: Person3, name: "Workman", role: "Designer" }].map((user, i) => (
                  <div key={i} className="flex flex-col items-center min-w-[80px]">
                    <img
                      src={user.img}
                      alt={user.name}
                      className="rounded-full sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] object-cover mb-1"
                    />
                    <p className="text-sm font-semibold text-center">{user.name}</p>
                    <p className="text-xs text-[#7D8FB3] text-center">{user.role}</p>
                  </div>
              ))}
            </div>
          </div>

          {/* Arrow Button (outside scroll area) */}
          <button className="ml-2 bg-[#F5F7FA] p-3 rounded-full hover:bg-[#E4E9F2] transition shrink-0">
            <ArrowRight className="text-[#343C6A]" />
          </button>
        </div>

        {/* Input & Send Button */}
        <div className="flex flex-col sm:flex-row items-center gap-3 bg-[#F5F7FA] rounded-full px-4 py-2 mt-2">
          <input
            type="text"
            placeholder="Write Amount"
            className="bg-transparent focus:outline-none text-[#343C6A] flex-1 w-full"
            defaultValue="525.50"
          />
        <button className="flex items-center justify-center bg-[#343C6A] hover:bg-[#007aff] text-white px-4 py-2 rounded-full w-full sm:w-auto mt-2 sm:mt-0 transition duration-300 transform hover:scale-105">
  Send <Send className="ml-2 w-4 h-4" />
</button>

        </div>
      </div>
    </div>
  );
}

export default Transfer;
