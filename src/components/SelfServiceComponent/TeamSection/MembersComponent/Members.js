



import React, { useEffect, useState } from 'react';
import axios from 'axios';

import BASE_URL from '../../../../config';

const Members = ({ employee }) => {
  const [numberOfMembers, setNumberOfMembers] = useState(0);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/team-members/${employee.teamId}`);
        setNumberOfMembers(response.data.teamData.length);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };
    fetchTeamData();
  }, [employee.teamId]);

  return (
    <div className="flex items-center justify-between w-full p-2.5 border border-gray-300 rounded bg-gray-100">
      <h3 className="text-2xl text-gray-800 m-0 mb-1.5 sm:mb-0">{employee.department}</h3>
      <div className="text-base text-gray-600">{numberOfMembers} Members</div>
    </div>
  );
}

export default Members;