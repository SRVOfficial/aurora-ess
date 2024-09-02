


import React from 'react';

const WorkInfo = ({ employee }) => {
  return (
    <>
      <h2 className="text-blue-600">Work Information</h2>
      <div className="p-5 border border-gray-300 rounded-md shadow-md bg-gray-100">
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="font-bold text-gray-700">Department</span>
          <span className="text-gray-600">{employee.department}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="font-bold text-gray-700">Location</span>
          <span className="text-gray-600">{employee.settingLocation}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="font-bold text-gray-700">Designation</span>
          <span className="text-gray-600">{employee.designation}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="font-bold text-gray-700">Role</span>
          <span className="text-gray-600">{employee.texsmartlyRole}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="font-bold text-gray-700">Employment Type</span>
          <span className="text-gray-600">{employee.employmentType}</span>
        </div>
      </div>
    </>
  );
};

export default WorkInfo;

