




import React from 'react';

const EducationDetails = ({ employee }) => {
  return (
    <>
      <h2 className="text-left text-blue-600 mb-2">Education Details</h2>
      <div className="w-full max-w-4xl mx-auto p-5 border border-gray-300 rounded-md shadow-md bg-gray-100">
        {employee.educationDetails.map((item, index) => (
          <div className="mb-4" key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border-b border-gray-200 pb-4">
              <div className="flex flex-col">
                <span className="font-bold text-gray-600">Institute Name</span>
                <span className="text-gray-700 mt-1">{item.instituteName}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-600">Degree/Diploma</span>
                <span className="text-gray-700 mt-1">{item.degree}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-600">Specialization</span>
                <span className="text-gray-700 mt-1">{item.specialization}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-600">Date of Completion</span>
                <span className="text-gray-700 mt-1">{item.completionDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EducationDetails;
