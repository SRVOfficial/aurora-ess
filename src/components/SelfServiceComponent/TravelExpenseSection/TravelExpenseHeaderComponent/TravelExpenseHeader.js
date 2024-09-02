


import React from 'react';

const TravelExpenseHeader = ({ onAddRecordClick }) => {
  return (
    <div className="flex justify-between items-center p-2 sm:p-4 bg-gray-100 border-b border-gray-300">
      <div className="text-xl sm:text-2xl font-semibold">Travel Expense</div>
      <button
        className="bg-[#A28089] text-white py-2 px-4 sm:px-6 rounded-md hover:bg-[#a06272] transition duration-300"
        onClick={onAddRecordClick}
      >
        + Add Record
      </button>
    </div>
  );
};

export default TravelExpenseHeader;
