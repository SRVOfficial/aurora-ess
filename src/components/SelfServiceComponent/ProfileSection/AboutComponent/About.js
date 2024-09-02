



import React from 'react';

const About = ({ employee }) => {
  return (
    <>
      <div className="mb-2 text-blue-600">
        <h3>About Me</h3>
      </div>
      <div className="mb-5 p-5 bg-gray-100 rounded-lg shadow-md">
        <div className="flex justify-between mb-2">
          <span className="font-bold">{employee.department}</span>
          <span className="font-bold">{employee.designation}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-normal">{employee.settingLocation}</span>
          <span className="font-normal">{employee.personalEmailId}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-normal">General</span>
          <span className="font-normal">{employee.timeZone}</span>
        </div>
      </div>
    </>
  );
};

export default About;
