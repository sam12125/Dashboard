import React from 'react';
import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png';
import Icon3 from '../assets/icon3.png';

function Transaction() {
  return (
    <div className="w-[90%]  sm:w-[40%]  rounded-lg p-4 sm:p-6 mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-[#343C6A]">Recent Transaction</h1>
      </div>

      {/* Transaction Card */}
      <div className="bg-white shadow-md rounded-[20px] p-4 flex flex-col gap-4">
        {[
          {
            icon: Icon2,
            bg: 'bg-[#FFF5D9]',
            title: 'Withdrawl from Card',
            date: '28 January 2021',
            amount: '-$850',
            color: 'text-[#FF4B4A]',
          },
          {
            icon: Icon3,
            bg: 'bg-[#E7EDFF]',
            title: 'Deposit Paypal',
            date: '25 January 2021',
            amount: '+$2,500',
            color: 'text-[#41D4A8]',
          },
          {
            icon: Icon1,
            bg: 'bg-[#DCFAF8]',
            title: 'Jemi Wilson',
            date: '21 January 2021',
            amount: '+$5,400',
            color: 'text-[#41D4A8]',
          },
        ].map((tx, i) => (
          <div key={i} className="flex items-center justify-between gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
            {/* Icon */}
            <div className={`rounded-full w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] ${tx.bg} flex items-center justify-center`}>
              <img src={tx.icon} className="w-8 h-8 sm:w-10 sm:h-10" alt="icon" />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center flex-1 min-w-[150px]">
              <h1 className="text-[#232323] text-base sm:text-lg font-semibold">{tx.title}</h1>
              <p className="text-[#718EBF] text-sm">{tx.date}</p>
            </div>

            {/* Amount */}
            <div className="text-right min-w-[80px]">
              <p className={`${tx.color} text-base sm:text-lg font-semibold`}>{tx.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transaction;
