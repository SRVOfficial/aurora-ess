



// import React from 'react';

// const ContactDetails = ({ employee }) => {
//   return (
//     <>
//       <div className="mb-2 text-blue-600">
//         <h3>Contact Details</h3>
//       </div>
//       <div className="mb-5 p-5 bg-gray-100 rounded-lg shadow-md">
//         <div className="flex justify-between mb-2">
//           <span className="font-bold w-1/2 text-left">Work Phone Number</span>
//           <span className="font-normal w-1/2 text-right">{employee.workPhone}</span>
//         </div>
//         <div className="flex justify-between mb-2">
//           <span className="font-bold w-1/2 text-left">Extension</span>
//           <span className="font-normal w-1/2 text-right">{employee.extension}</span>
//         </div>
//         <div className="flex justify-between mb-2">
//           <span className="font-bold w-1/2 text-left">Seating Location</span>
//           <span className="font-normal w-1/2 text-right">{employee.settingLocation}</span>
//         </div>
//         <div className="flex justify-between mb-2">
//           <span className="font-bold w-1/2 text-left">Present Address</span>
//           <span className="font-normal w-1/2 text-right">{employee.presentAddress}</span>
//         </div>
//         <div className="flex justify-between mb-2">
//           <span className="font-bold w-1/2 text-left">Permanent Address</span>
//           <span className="font-normal w-1/2 text-right">{employee.permanentAddress}</span>
//         </div>
//         <div className="flex justify-between mb-2">
//           <span className="font-bold w-1/2 text-left">Personal Mobile Number</span>
//           <span className="font-normal w-1/2 text-right">{employee.personalMobileNo}</span>
//         </div>
//         <div className="flex justify-between mb-2">
//           <span className="font-bold w-1/2 text-left">Personal Email Address</span>
//           <span className="font-normal w-1/2 text-right">{employee.personalEmailId}</span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactDetails;




import React from 'react';

const ContactDetails = ({ employee }) => {
  return (
    <>
      <div className="mb-2 text-blue-600">
        <h3>Contact Details</h3>
      </div>
      <div className="mb-5 p-5 bg-gray-100 rounded-lg shadow-md">
        {/* For small screens, flex-col and text-left to stack items vertically and align text to the left */}
        {/* For larger screens, flex-row and text-right to display items side by side and align text to the right */}
        <div className="flex flex-col sm:flex-row justify-between mb-2">
          <span className="font-bold w-full sm:w-1/2 text-left sm:text-left">Work Phone Number</span>
          <span className="font-normal w-full sm:w-1/2 text-left sm:text-right">{employee.workPhone}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mb-2">
          <span className="font-bold w-full sm:w-1/2 text-left sm:text-left">Extension</span>
          <span className="font-normal w-full sm:w-1/2 text-left sm:text-right">{employee.extension}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mb-2">
          <span className="font-bold w-full sm:w-1/2 text-left sm:text-left">Seating Location</span>
          <span className="font-normal w-full sm:w-1/2 text-left sm:text-right">{employee.settingLocation}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mb-2">
          <span className="font-bold w-full sm:w-1/2 text-left sm:text-left">Present Address</span>
          <span className="font-normal w-full sm:w-1/2 text-left sm:text-right">{employee.presentAddress}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mb-2">
          <span className="font-bold w-full sm:w-1/2 text-left sm:text-left">Permanent Address</span>
          <span className="font-normal w-full sm:w-1/2 text-left sm:text-right">{employee.permanentAddress}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mb-2">
          <span className="font-bold w-full sm:w-1/2 text-left sm:text-left">Personal Mobile Number</span>
          <span className="font-normal w-full sm:w-1/2 text-left sm:text-right">{employee.personalMobileNo}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mb-2">
          <span className="font-bold w-full sm:w-1/2 text-left sm:text-left">Personal Email Address</span>
          <span className="font-normal w-full sm:w-1/2 text-left sm:text-right">{employee.personalEmailId}</span>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;

