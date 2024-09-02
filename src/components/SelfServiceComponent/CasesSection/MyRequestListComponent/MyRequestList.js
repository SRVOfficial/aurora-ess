









// import React from 'react';
// import { FaInfoCircle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Import icons

// const MyRequestList = ({ requests }) => {
//   return (
//     <div className="mb-5"> {/* Container margin */}
//       {requests.length ? (
//         <ul className="list-none p-0 m-0"> {/* Removes default list styles */}
//           {requests.map(request => (
//             <li key={request.id} className="p-5 border border-gray-300 rounded mb-3 bg-white shadow-md flex flex-col sm:flex-row sm:justify-between sm:items-center">
//               {/* List item styling and responsiveness */}
//               <div className="sm:flex-1">
//                 <h3 className="text-lg font-semibold mt-0 mb-2">{request.title}</h3>
//                 {/* Title styling */}
//                 <p className="mt-0 mb-2">{request.description}</p>
//                 {/* Description styling */}
//               </div>
//               <div className="flex items-center sm:ml-4">
//                 {/* Icon and status text */}
//                 {request.status === 'Open' && <FaInfoCircle className="text-blue-500 mr-2" />}
//                 {request.status === 'In Progress' && <FaInfoCircle className="text-yellow-500 mr-2" />}
//                 {request.status === 'Closed' && <FaCheckCircle className="text-green-500 mr-2" />}
//                 {request.status === 'Cancelled' && <FaTimesCircle className="text-red-500 mr-2" />}
//                 <span className="font-medium">{request.status}</span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No requests available</p> 
//       )}
//     </div>
//   );
// };

// export default MyRequestList;










import React from 'react';
import { FaInfoCircle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Import icons

const MyRequestList = ({ requests }) => {
  return (
    <div className="mb-5"> {/* Container margin */}
      {requests.length ? (
        <ul className="list-none p-0 m-0"> {/* Removes default list styles */}
          {requests.map(request => (
            <li key={request.id} className="p-5 border border-gray-300 rounded mb-3 bg-white shadow-md flex flex-col sm:flex-row sm:justify-between sm:items-center">
              {/* List item styling and responsiveness */}
              <div className="sm:flex-1">
                <h3 className="text-lg font-semibold mt-0 mb-2">{request.title}</h3>
                {/* Title styling */}
                <p className="mt-0 mb-2">{request.description}</p>
                {/* Description styling */}
              </div>
              <div className="flex items-center sm:ml-4">
                {/* Icon and status text */}
                {request.status === 'Open' && <FaInfoCircle className="text-blue-500 mr-2" />}
                {request.status === 'In Progress' && <FaInfoCircle className="text-yellow-500 mr-2" />}
                {request.status === 'Closed' && <FaCheckCircle className="text-green-500 mr-2" />}
                {request.status === 'Cancelled' && <FaTimesCircle className="text-red-500 mr-2" />}
                {request.status === 'Pending' && <FaInfoCircle className="text-orange-500 mr-2" />} {/* Added Pending case */}
                {request.status === 'On Hold' && <FaInfoCircle className="text-gray-500 mr-2" />} {/* Added On Hold case */}
                <span className="font-medium">{request.status}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No requests available</p> 
      )}
    </div>
  );
};

export default MyRequestList;