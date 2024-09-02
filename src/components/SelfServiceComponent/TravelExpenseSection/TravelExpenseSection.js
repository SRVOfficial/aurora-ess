







import React, { useState } from 'react';

import TravelExpenseHeader from './TravelExpenseHeaderComponent/TravelExpenseHeader.js';
import TravelExpenseList from './TravelExpenseListComponent/TravelExpenseList.js';
import AddTravelExpense from './AddTravelExpenseComponent/AddTravelExpense.js';

import useFetchTravelExpense from '../hooks/useFetchTravelExpense.js';

const TravelExpenseSection = ({ employee }) => {
  const [isAdding, setIsAdding] = useState(false);

  const { travelExpenses, loading, error } = useFetchTravelExpense("kam15");

  const handleAddRecordClick = () => {
    setIsAdding(true);
  };

  const handleBackClick = () => {
    setIsAdding(false);
  };

  return (
    <div className="travel-expense-container p-4 sm:p-8 bg-white shadow-lg rounded-lg">
      {isAdding ? (
        <AddTravelExpense 
          onBackClick={handleBackClick} 
          travelExpenses={travelExpenses} 
          employee={employee} 
        />
      ) : (
        <>
          <TravelExpenseHeader onAddRecordClick={handleAddRecordClick} />
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">Error loading travel expenses</p>
          ) : (
            <TravelExpenseList travelExpenses={travelExpenses} />
          )}
        </>
      )}
    </div>
  );
}

export default TravelExpenseSection;
