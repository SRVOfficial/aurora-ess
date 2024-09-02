// import React, { useState } from 'react';
// import './LeaveTrackerFooter.css';

// const LeaveTrackerFooter = ({ upcomingLeaves, leaveHistory }) => {
//   const [view, setView] = useState('upcoming');

//   return (
//     <footer className="footer">
//       <div className="leave-history-header">
//         <button
//           className={`history-btn ${view === 'upcoming' ? 'active' : ''}`}
//           onClick={() => setView('upcoming')}
//         >
//           Upcoming
//         </button>
//         <button
//           className={`history-btn ${view === 'history' ? 'active' : ''}`}
//           onClick={() => setView('history')}
//         >
//           History
//         </button>
//       </div>
//       <div className="leave-list">
//         {view === 'upcoming' ? (
//           upcomingLeaves.length > 0 ? (
//             <ul>
//               {upcomingLeaves.map((leave, index) => (
//                 <li key={index}>
//                   <div className="leave-item">
//                     <span className="leave-type">{leave.type}</span>
//                     <span className="leave-dates">{leave.startDate} - {leave.endDate}</span>
//                     <span className="leave-status">{leave.status}</span>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No Upcoming Leaves Found</p>
//           )
//         ) : (
//           leaveHistory.length > 0 ? (
//             <ul>
//               {leaveHistory.map((leave, index) => (
//                 <li key={index}>
//                   <div className="leave-item">
//                     <span className="leave-type">{leave.type}</span>
//                     <span className="leave-dates">{leave.startDate} - {leave.endDate}</span>
//                     <span className="leave-status">{leave.status}</span>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No Leave History Found</p>
//           )
//         )}
//       </div>
//     </footer>
//   );
// };

// export default LeaveTrackerFooter;




import React, { useState } from 'react';

const LeaveTrackerFooter = ({ upcomingLeaves, leaveHistory }) => {
  const [view, setView] = useState('upcoming');

  return (
    <footer className="bg-white shadow-md p-4 sm:p-6">
      <div className="flex justify-end gap-2 mb-4">
        <button
          className={`px-4 py-2 rounded transition-colors ${
            view === 'upcoming'
              ? 'bg-[#A28089] text-white'
              : 'bg-gray-200 text-black hover:bg-gray-300'
          }`}
          onClick={() => setView('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`px-4 py-2 rounded transition-colors ${
            view === 'history'
              ? 'bg-[#A28089] text-white'
              : 'bg-gray-200 text-black hover:bg-gray-300'
          }`}
          onClick={() => setView('history')}
        >
          History
        </button>
      </div>
      <div className="max-h-[200px] overflow-y-auto">
        {view === 'upcoming' ? (
          upcomingLeaves.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {upcomingLeaves.map((leave, index) => (
                <li key={index} className="py-2">
                  <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                    <span className="font-medium mb-1 sm:mb-0">{leave.type}</span>
                    <span className="text-gray-600 mb-1 sm:mb-0">{leave.startDate} - {leave.endDate}</span>
                    <span className="text-blue-600">{leave.status}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No Upcoming Leaves Found</p>
          )
        ) : (
          leaveHistory.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {leaveHistory.map((leave, index) => (
                <li key={index} className="py-2">
                  <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                    <span className="font-medium mb-1 sm:mb-0">{leave.type}</span>
                    <span className="text-gray-600 mb-1 sm:mb-0">{leave.startDate} - {leave.endDate}</span>
                    <span className="text-blue-600">{leave.status}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No Leave History Found</p>
          )
        )}
      </div>
    </footer>
  );
};

export default LeaveTrackerFooter;
