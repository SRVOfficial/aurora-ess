


import React from 'react';

const IdentityInfo = ({ employee }) => {
  return (
    <>
      {/* Header styled with Tailwind to match original CSS */}
      <h2 className="text-blue-600 mb-2">Identity Information</h2>

      {/* Container styled with Tailwind for padding, border, shadow, and background */}
      <div className="p-5 border border-gray-300 rounded-md shadow-md bg-gray-100">
        {/* Row for UAN */}
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="font-bold text-gray-600">UAN</span>
          <span className="text-gray-700">{employee.uanNo}</span>
        </div>
        {/* Row for PAN */}
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="font-bold text-gray-600">PAN</span>
          <span className="text-gray-700">{employee.panNo}</span>
        </div>
        {/* Row for Aadhaar */}
        <div className="flex justify-between py-2">
          <span className="font-bold text-gray-600">Aadhaar</span>
          <span className="text-gray-700">{employee.aadhaarNo}</span>
        </div>
      </div>
    </>
  );
};

export default IdentityInfo;
