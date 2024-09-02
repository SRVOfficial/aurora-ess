




import React from 'react';

const Skills = ({ employee }) => {
  return (
    <>
      <h3 className="text-blue-600 mb-2">Skills</h3>
      <div className="p-5 bg-gray-100 rounded-lg shadow-md">
        {employee && employee.skillData ? (
          employee.skillData.map((skill, index) => (
            <div className="mb-4" key={index}>
              <span className="block font-bold text-gray-700 mb-2 text-sm">
                {skill.label}
              </span>
              <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full bg-[#A28089] rounded-full transition-width duration-300"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </div>
          ))
        ) : (
          <div>No skills available</div>
        )}
      </div>
    </>
  );
};

export default Skills;

