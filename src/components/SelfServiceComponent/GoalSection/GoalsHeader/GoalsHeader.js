




import React from 'react';

const GoalsHeader = ({ onAddGoalClick, onFilterClick }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 bg-[#A28089] border-b border-gray-300">
      <h2 className="text-2xl font-semibold text-white mb-4 sm:mb-0">Goals</h2>
      <div className="flex gap-2 sm:gap-4">
        <button 
          onClick={onAddGoalClick} 
          className="px-4 py-2 bg-[#F0E68C] text-[#743e4d] font-semibold rounded hover:opacity-80 transition-opacity duration-300 text-sm sm:text-base"
        >
          + Add Goals
        </button>
        <button 
          onClick={onFilterClick} 
          className="px-4 py-2 bg-gray-600 text-white rounded hover:opacity-80 transition-opacity duration-300 text-sm sm:text-base"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default GoalsHeader;
