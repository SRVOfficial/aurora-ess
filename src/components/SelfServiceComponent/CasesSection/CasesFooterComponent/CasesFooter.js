






import React from 'react';
import { FaRegCircle, FaHourglassHalf, FaExclamationTriangle, FaPauseCircle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const CasesFooter = ({ requests }) => {
  const statusCounts = requests.reduce((acc, request) => {
    acc[request.status] = (acc[request.status] || 0) + 1;
    return acc;
  }, {});

  const statusList = [
    { label: 'Open', icon: <FaRegCircle className="text-blue-500" />, count: statusCounts['Open'] || 0 },
    { label: 'In Progress', icon: <FaHourglassHalf className="text-yellow-500" />, count: statusCounts['In Progress'] || 0 },
    { label: 'Pending', icon: <FaExclamationTriangle className="text-orange-500" />, count: statusCounts['Pending'] || 0 },
    { label: 'On Hold', icon: <FaPauseCircle className="text-gray-500" />, count: statusCounts['On Hold'] || 0 },
    { label: 'Closed', icon: <FaCheckCircle className="text-green-500" />, count: statusCounts['Closed'] || 0 },
    { label: 'Cancelled', icon: <FaTimesCircle className="text-red-500" />, count: statusCounts['Cancelled'] || 0 },
  ];

  return (
    <div className="flex flex-wrap justify-around items-center p-4 bg-white shadow-lg rounded-lg">
      {statusList.map((status) => (
        <div key={status.label} className="flex items-center m-2">
          {status.icon}
          <span className="ml-2 text-sm font-medium">{`${status.label}: ${status.count}`}</span>
        </div>
      ))}
    </div>
  );
};

export default CasesFooter;

