



import React from 'react';

const ReportTo = ({ employee }) => {
  return (
    <div>
      <h3 className="mb-2 text-blue-600">Reporting To</h3>
      {employee.reportToData.map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 p-5 rounded-lg mb-4 shadow-md"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
          <h5 className="text-md font-medium text-gray-600">{item.position}</h5>
          {/* <a href="#" className="block mt-3 text-blue-500 underline">View in hierarchical chart</a> */}
        </div>
      ))}
    </div>
  );
};

export default ReportTo;
