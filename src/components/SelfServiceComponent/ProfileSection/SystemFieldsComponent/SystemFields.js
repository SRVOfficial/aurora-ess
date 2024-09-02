


import React from 'react';

const SystemFields = ({ employee }) => {
  return (
    <>
      <h2 className="text-blue-600 mb-2">System Fields</h2>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md border border-gray-300">
        <div className="flex justify-between items-center py-3 border-b border-gray-200">
          <span className="font-bold text-gray-600 w-1/3 text-left">Added By</span>
          <span className="text-gray-700 w-2/3 text-right">{employee.addedBy}</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-gray-200">
          <span className="font-bold text-gray-600 w-1/3 text-left">Added Time</span>
          <span className="text-gray-700 w-2/3 text-right">{employee.addedTime}</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-gray-200">
          <span className="font-bold text-gray-600 w-1/3 text-left">Modified By</span>
          <span className="text-gray-700 w-2/3 text-right">{employee.modifiedBy}</span>
        </div>
        <div className="flex justify-between items-center py-3">
          <span className="font-bold text-gray-600 w-1/3 text-left">Modified Time</span>
          <span className="text-gray-700 w-2/3 text-right">{employee.modifiedTime}</span>
        </div>
      </div>
    </>
  );
};

export default SystemFields;
