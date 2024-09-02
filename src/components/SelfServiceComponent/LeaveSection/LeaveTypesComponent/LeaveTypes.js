



// import React from 'react';
// import './LeaveTypes.css';

// const LeaveTypes = ({ leaves }) => {
//   return (
//     <div className="leave-types">
//       {leaves.map((leave, index) => (
//         <div className="leave-box" key={index}>
//           <h2>{leave.type}</h2>
//           <img src={leave.icon} width={50} alt={`${leave.type} icon`} /> {/* Use leave.icon */}
//           <p>Available: {leave.available !== undefined ? leave.available : '-'}</p>
//           <p>Booked: {leave.booked}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default LeaveTypes;





import React from 'react';

const LeaveTypes = ({ leaves }) => {
  return (
    <div className="flex flex-wrap gap-5 mb-5 ">
      {leaves.map((leave, index) => (
        <div
          key={index}
          className="bg-white p-6 shadow-lg rounded-lg text-center w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <h2 className="mt-0 text-xl font-bold text-gray-700 mb-3">{leave.type}</h2>
          <img src={leave.icon} width={50} alt={`${leave.type} icon`} className="mx-auto mb-4" />
          <p className="text-gray-600">Available: {leave.available !== undefined ? leave.available : '-'}</p>
          <p className="text-gray-600">Booked: {leave.booked}</p>
        </div>
      ))}
    </div>
  );
};

export default LeaveTypes;
