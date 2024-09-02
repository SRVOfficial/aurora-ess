





import React from 'react';

const HierarchyInfo = ({ employee }) => {
  return (
    <>
      {/* Header styled with Tailwind to match original CSS */}
      <h2 className="text-blue-600 mb-2">Hierarchy Information</h2>

      {/* Container with Tailwind for padding, border, shadow, and background */}
      <div className="p-5 border border-gray-300 rounded-md shadow-md bg-gray-100">
        {employee.hierarchyInfo.map((item, index) => (
          <div 
            className={`flex justify-between py-2 ${index !== employee.hierarchyInfo.length - 1 ? 'border-b border-gray-200' : ''}`} 
            key={index}
          >
            {/* Label and value styled with Tailwind for spacing and color */}
            <span className="font-bold text-gray-600">{item.label}</span>
            <span className="text-gray-700">{item.value}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default HierarchyInfo;

