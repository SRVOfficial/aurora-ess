


import React from 'react';

const PersonalDetails = ({ employee }) => {
  return (
    <>
      <h2 className="text-blue-600 mb-2">Personal Details</h2>

      <div className="p-6 border border-gray-300 rounded-md shadow-md bg-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 border-b border-gray-200">
          <span className="font-bold text-gray-600 mb-1 sm:mb-0">Date of Birth</span>
          <span className="text-gray-700">{employee.dob}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 border-b border-gray-200">
          <span className="font-bold text-gray-600 mb-1 sm:mb-0">Marital Status</span>
          <span className="text-gray-700">{employee.maritalStatus}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 border-b border-gray-200">
          <span className="font-bold text-gray-600 mb-1 sm:mb-0">About Me</span>
          <span className="text-gray-700">{employee.aboutMe}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3">
          <span className="font-bold text-gray-600 mb-1 sm:mb-0">Ask me about/Expertise</span>
          <span className="text-gray-700">{employee.askMeAbout}</span>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
