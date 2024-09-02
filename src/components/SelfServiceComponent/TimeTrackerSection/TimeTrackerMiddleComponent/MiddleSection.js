




// import React from 'react';

// const MiddleSection = ({ data, filters, onFilterChange }) => {
//   console.log(data);
//   return (
//     <div className="w-full my-5 bg-gray-100 rounded-lg shadow-md overflow-hidden">
//       {/* Make this container horizontally scrollable */}
//       <div className="overflow-x-auto">
//         {/* Header Section */}
//         <div className="min-w-max grid grid-cols-5 gap-x-4 px-4 py-2 bg-[#A28089] text-white font-bold">
//           <div className="text-left">Client</div>
//           <div className="text-center">Project</div>
//           <div className="text-center">Total Time</div>
//           <div className="text-center">Recorded Time</div>
//           <div className="flex items-center justify-center md:justify-end space-x-2">
//             <span>Billable</span>
//             <select
//               name="billableStatus"
//               value={filters.billableStatus}
//               onChange={onFilterChange}
//               className="ml-2 px-2 py-1 border-none rounded bg-white text-[#007bff] focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="All">All</option>
//               <option value="Billable">Billable</option>
//               <option value="Non-billable">Non-billable</option>
//             </select>
//           </div>
//         </div>

//         {/* Body Section */}
//         <div className="min-w-max">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className={`grid grid-cols-5 gap-x-4 px-4 py-2 border-b border-gray-300 ${
//                 index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
//               }`}
//             >
//               <div className="text-left">{item.client}</div>
//               <div className="text-center">{item.project}</div>
//               <div className="text-center">{item.totalTime}</div>
//               <div className="text-center">{item.recordedTime}</div>
//               <div className="text-center">{item.billable}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MiddleSection;






import React from 'react';

const MiddleSection = ({ data, filters, onFilterChange }) => {
  console.log(data);
  return (
    <div className="w-full my-5 bg-gray-100 rounded-lg shadow-md overflow-hidden">
      {/* Make this container horizontally scrollable */}
      <div className="overflow-x-auto">
        {/* Header Section */}
        <div className="min-w-max grid grid-cols-5 gap-x-4 px-4 py-2 bg-[#A28089] text-white font-bold">
          <div className="text-left">Client</div>
          <div className="text-center">Project</div>
          <div className="text-center">Total Time</div>
          <div className="text-center">Recorded Time</div>
          <div className="flex flex-wrap items-center justify-center md:justify-end space-x-2">
            <span>Billable</span>
            <select
              name="billableStatus"
              value={filters.billableStatus}
              onChange={onFilterChange}
              className="ml-2 px-2 py-1 border-none rounded bg-white text-[#007bff] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All</option>
              <option value="Billable">Billable</option>
              <option value="Non-billable">Non-billable</option>
            </select>
          </div>
        </div>

        {/* Body Section */}
        <div className="min-w-max">
          {data.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-5 gap-x-4 px-4 py-2 border-b border-gray-300 ${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              }`}
            >
              <div className="text-left">{item.client}</div>
              <div className="text-center">{item.project}</div>
              <div className="text-center">{item.totalTime}</div>
              <div className="text-center">{item.recordedTime}</div>
              <div className="text-center">{item.billable}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
