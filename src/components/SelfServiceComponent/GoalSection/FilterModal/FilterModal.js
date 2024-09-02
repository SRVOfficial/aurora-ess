






import React, { useState } from 'react';

const FilterModal = ({ onClose, onApply }) => {
  const [status, setStatus] = useState('');
  const [dateType, setDateType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleApply = () => {
    const filters = {
      status,
      dateType,
      fromDate: dateType === 'createdDate' ? fromDate : null,
      toDate: dateType === 'createdDate' ? toDate : null,
      startFromDate: dateType === 'startDate' ? fromDate : null,
      startToDate: dateType === 'startDate' ? toDate : null,
      completeFromDate: dateType === 'completedDate' ? fromDate : null,
      completeToDate: dateType === 'completedDate' ? toDate : null
    };
    onApply(filters);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Filter Goals</h3>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Status:</label>
          <select 
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Status</option>
            <option value="In Progress">In Progress</option>
            <option value="Not Started">Not Started</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Date Type:</label>
          <select 
            value={dateType} 
            onChange={(e) => setDateType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Date Type</option>
            <option value="createdDate">Created Date</option>
            <option value="startDate">Start Date</option>
            <option value="completedDate">Completed On</option>
          </select>
        </div>

        {dateType && (
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From Date:</label>
              <input 
                type="date" 
                value={fromDate} 
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To Date:</label>
              <input 
                type="date" 
                value={toDate} 
                onChange={(e) => setToDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        )}

        <div className="flex justify-end space-x-2">
          <button 
            onClick={handleApply} 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Apply
          </button>
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
