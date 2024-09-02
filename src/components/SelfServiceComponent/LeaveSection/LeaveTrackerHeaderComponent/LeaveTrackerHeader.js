

import React from 'react';

const LeaveTrackerHeader = ({ year, onApplyLeave }) => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center bg-[#A28089] p-4 sm:p-5 shadow-md mb-5">
      <h1 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-0 text-white">Leave Year {year}</h1>
      <button 
        className="bg-[#F0E68C] text-[#743e4d] font-semibold border-none px-4 py-2 sm:px-5 sm:py-2 text-sm sm:text-base cursor-pointer rounded w-full sm:w-auto"
        onClick={onApplyLeave}
      >
        Apply Leave
      </button>
    </header>
  );
};

export default LeaveTrackerHeader;
