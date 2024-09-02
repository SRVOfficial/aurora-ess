





import React, { useEffect, useState } from 'react';
import axios from 'axios';

import BASE_URL from '../../../../config';

const TeamMembers = ({ employee }) => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/team-members/${employee.teamId}`);
        const filteredData = response.data.teamData.filter(item => item.empId !== employee.empId);
        setTeamData(filteredData);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };
    fetchTeamData();
  }, [employee.teamId, employee.empId]);

  return (
    <div>
      <div className="flex items-center justify-between py-2.5 bg-gray-100 px-2">
        <h3 className="text-blue-700 m-0">{employee.designation}</h3>
        <h3 className="bg-gray-200 p-2.5 rounded m-0">{teamData.length}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {teamData.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center text-center shadow-md">
            <h3 className="mt-0 mb-1.5 text-lg">{item.empId} - {item.name}</h3>
            <h5 className="m-0 text-sm text-gray-600">{item.phone}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;