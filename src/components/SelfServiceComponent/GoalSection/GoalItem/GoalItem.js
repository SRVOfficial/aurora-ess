







import React from 'react';
import { FaCheckCircle, FaHourglassStart, FaCalendarAlt } from 'react-icons/fa';

const GoalItem = ({ goal }) => {
  // Function to format date string to desired format
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'UTC'
    });
  };

  return (
    <div className="p-4 sm:p-6 border rounded-lg shadow-md bg-white">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">{goal.name}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm sm:text-base text-gray-700">
        <div className="flex items-center">
          <span className="text-blue-500 flex-shrink-0 mr-2">
            <FaCheckCircle size={20} />
          </span>
          <div>
            <span className="font-medium">Status:</span>
            <span className="ml-1">{goal.status}</span>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-green-500 flex-shrink-0 mr-2">
            <FaCalendarAlt size={20} />
          </span>
          <div>
            <span className="font-medium">Created Date:</span>
            <span className="ml-1">{formatDate(goal.createdDate)}</span>
          </div>
        </div>
        {goal.startDate && (
          <div className="flex items-center">
            <span className="text-orange-500 flex-shrink-0 mr-2">
              <FaHourglassStart size={20} />
            </span>
            <div>
              <span className="font-medium">Start Date:</span>
              <span className="ml-1">{formatDate(goal.startDate)}</span>
            </div>
          </div>
        )}
        {goal.completedDate && (
          <div className="flex items-center">
            <span className="text-purple-500 flex-shrink-0 mr-2">
              <FaCheckCircle size={20} />
            </span>
            <div>
              <span className="font-medium">Completed Date:</span>
              <span className="ml-1">{formatDate(goal.completedDate)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoalItem;
