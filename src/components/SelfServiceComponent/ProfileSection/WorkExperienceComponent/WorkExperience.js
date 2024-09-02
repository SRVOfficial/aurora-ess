

import React from 'react';

const WorkExperience = ({ employee }) => {
  return (
    <>
      <h2 className="text-left text-blue-600 mb-2">Work Experience</h2>
      <div className="w-full max-w-4xl mx-auto p-5 border border-gray-300 rounded-md shadow-md bg-gray-100">
        {employee.workExperience.map((item, index) => (
          <div className="mb-6" key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border-b border-gray-200 pb-4">
              <div className="flex flex-col">
                <span className="font-bold text-gray-600">Company Name</span>
                <span className="text-gray-700 mt-1">{item.companyName}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-600">Job Title</span>
                <span className="text-gray-700 mt-1">{item.jobTitle}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-600">From Date</span>
                <span className="text-gray-700 mt-1">{item.fromDate}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-600">To Date</span>
                <span className="text-gray-700 mt-1">{item.toDate}</span>
              </div>
              <div className="col-span-2">
                <span className="font-bold text-gray-600">Job Description</span>
                <p className="text-gray-700 mt-1">{item.jobDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkExperience;
