


import React from 'react';
import Members from './MembersComponent/Members';
import TeamMembers from './TeamMembersComponent/TeamMembers';

const TeamSection = ({ employee }) => {
  return (
    <div className="grid grid-rows-[auto_auto_auto] gap-5 p-5">
      <div className="rounded-lg shadow-md p-5">
        <div className="border border-gray-300 bg-white p-2.5 mb-2.5 shadow-md rounded-lg">
          <Members employee={employee} />
        </div>
      </div>
      <div className="border border-gray-300 p-5 bg-gray-100 rounded-lg flex flex-wrap gap-5">
        <div className="flex flex-col gap-2.5 flex-1  auto-rows-min">
          <div className="border border-gray-300 bg-white p-2.5 mb-2.5 shadow-md rounded-lg flex-1 min-w-0">
            <TeamMembers employee={employee} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;