












// import React from 'react';
// import './TimeTrackerHeader.css';
// import ExportButton from '../ExportButtonComponent/ExportButton';

// const TimeTrackerHeader = ({ dateRange, onPreviousWeek, onNextWeek, onRecordTime, onToggleFilter, data, employee }) => {
//   return (
//     <div className="header">
//       <div className="date-range">
//         <button onClick={onPreviousWeek}>&lt;</button>
//         {dateRange}
//         <button onClick={onNextWeek}>&gt;</button>
//       </div>
//       {employee && <div className="employee-name">Employee: {employee.firstName} {employee.lastName} ({employee.empId})</div>}
//       <div className="actions">
//         <button onClick={onRecordTime} className='header-record-time'>Record Time</button>
//         <button onClick={onToggleFilter}>Filter</button>
//         <ExportButton data={data} />
//       </div>
//     </div>
//   );
// };

// export default TimeTrackerHeader;










import React from 'react';
import ExportButton from '../ExportButtonComponent/ExportButton';

const TimeTrackerHeader = ({ dateRange, onPreviousWeek, onNextWeek, onRecordTime, onToggleFilter, data, employee }) => {
  return (
    <div className="bg-white shadow-md p-4">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-4">
          {/* Date Range and Employee Info */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <button 
                onClick={onPreviousWeek}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-label="Previous week"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <span className="text-lg font-semibold">{dateRange}</span>
              <button 
                onClick={onNextWeek}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-label="Next week"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            {employee && (
              <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                {employee.firstName} {employee.lastName} ({employee.empId})
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
            <button 
              onClick={onRecordTime} 
              className="px-4 py-2 bg-[#A28089] text-white rounded-full hover:bg-[#8a6d76] focus:outline-none focus:ring-2 focus:ring-[#A28089] flex-grow sm:flex-grow-0"
            >
              Record Time
            </button>
            <button 
              onClick={onToggleFilter}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 flex-grow sm:flex-grow-0"
            >
              Filter
            </button>
            <div className="w-full sm:w-auto px-4 py-2 bg-[#A28089] text-white text-center rounded-full hover:bg-[#8a6d76] focus:outline-none focus:ring-2 focus:ring-[#A28089] flex-grow sm:flex-grow-0">
              <ExportButton data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTrackerHeader;