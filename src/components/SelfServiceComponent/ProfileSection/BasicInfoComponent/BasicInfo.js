











import React from 'react';

const BasicInfo = ({ employee }) => {
  return (
    <>
      <div className="mb-2 text-blue-600">
        <h3>Basic Information</h3>
      </div>
      <div className="mb-5 p-5 bg-gray-100 rounded-lg shadow-md">
        <div className="flex justify-between mb-2">
          <span className="font-bold">Employee ID</span>
          <span className="font-normal">{employee.empId}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-bold">First Name</span>
          <span className="font-normal">{employee.firstName}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-bold">Last Name</span>
          <span className="font-normal">{employee.lastName}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-bold">Nick Name</span>
          <span className="font-normal">{employee.nickName}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-bold">Email address</span>
          <span className="font-normal">{employee.workEmailId}</span>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;