



// import React from 'react';

// const About = ({ employee }) => {
//   return (
//     <>
//       <div className="mb-2 text-blue-600">
//         <h3>About Me</h3>
//       </div>
//       <div className="mb-5 p-5 bg-gray-100 rounded-lg shadow-md">
//         <div className="flex justify-between mb-2">
//           <span className="font-bold">{employee.department}</span>
//           <span className="font-bold">{employee.designation}</span>
//         </div>
//         <div className="flex justify-between mb-2">
//           <span className="font-normal">{employee.settingLocation}</span>
//           <span className="font-normal">{employee.personalEmailId}</span>
//         </div>
//         <div className="flex justify-between mb-2">
//           <span className="font-normal">General</span>
//           <span className="font-normal">{employee.timeZone}</span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;











import React from 'react';

const About = ({ employee }) => {
  return (
    <>
      <div className="mb-2 text-blue-600">
        <h3>About Me</h3>
      </div>
      <div className="mb-5 p-3 sm:p-5 bg-gray-100 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <div className="mb-2 sm:mb-0">
            <span className="text-sm text-gray-500 block">Department</span>
            <span className="font-bold">{employee.department}</span>
          </div>
          <div>
            <span className="text-sm text-gray-500 block">Designation</span>
            <span className="font-bold">{employee.designation}</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <div className="mb-2 sm:mb-0">
            <span className="text-sm text-gray-500 block">Location</span>
            <span className="font-normal">{employee.settingLocation}</span>
          </div>
          <div className="sm:text-right">
            <span className="text-sm text-gray-500 block">Personal Email</span>
            <span className="font-normal break-all">{employee.personalEmailId}</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="mb-2 sm:mb-0">
            <span className="text-sm text-gray-500 block">Employment Type</span>
            <span className="font-normal">General</span>
          </div>
          <div>
            <span className="text-sm text-gray-500 block">Time Zone</span>
            <span className="font-normal">{employee.timeZone}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;







// import React from 'react';

// const About = ({ employee }) => {
//   return (
//     <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
//       <div className="mb-2 text-blue-600">
//         <h3>About Me</h3>
//       </div>
//       <div className="p-4 space-y-4">
//         <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
//           <div className="flex flex-col">
//             <span className="text-sm text-gray-500">Department</span>
//             <span className="font-semibold">{employee.department}</span>
//           </div>
//           <div className="flex flex-col sm:items-end">
//             <span className="text-sm text-gray-500">Designation</span>
//             <span className="font-semibold">{employee.designation}</span>
//           </div>
//         </div>
//         <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
//           <div className="flex flex-col">
//             <span className="text-sm text-gray-500">Location</span>
//             <span>{employee.settingLocation}</span>
//           </div>
//           <div className="flex flex-col sm:items-end">
//             <span className="text-sm text-gray-500">Email</span>
//             <span className="break-all">{employee.personalEmailId}</span>
//           </div>
//         </div>
//         <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
//           <div className="flex flex-col">
//             <span className="text-sm text-gray-500">Employment Type</span>
//             <span>General</span>
//           </div>
//           <div className="flex flex-col sm:items-end">
//             <span className="text-sm text-gray-500">Time Zone</span>
//             <span>{employee.timeZone}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;