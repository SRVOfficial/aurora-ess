




import React from 'react';
// import './ProfileSection.css';
// import axios from 'axios';

// import BASE_URL from '../../../config.js';

import About from './AboutComponent/About.js';
import ReportTo from './ReportComponent/ReportTo.js';
import Skills from './SkillComponent/Skills.js';
import BasicInfo from './BasicInfoComponent/BasicInfo.js';
import WorkInfo from './WorkInfoComponent/WorkInfo.js';
import PersonalDetails from './PersonalDetailsComponent/PersonalDetails.js';
import HierarchyInfo from './HierarchyInfoComponent/HierarchyInfo.js';
import ContactDetails from './ContactDetailsComponent/ContactDetails.js';
import IdentityInfo from './IdentityInfoComponent/IdentityInfo.js';
import SystemFields from './SystemFieldsComponent/SystemFields.js';
import WorkExperience from './WorkExperienceComponent/WorkExperience.js';
import EducationDetails from './EducationDetailsComponent/EducationDetails.js';

import useFetchEmployee from '../hooks/useFetchEmployee.js';

const ProfileSection = () => {
  const { employee, loading, error } = useFetchEmployee('kam15');

  if (loading) {
    return <div>Loading......</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-rows-[auto_auto_auto] gap-5 p-5">
      <div className="border border-gray-300 p-5 bg-gray-100 rounded-lg flex flex-wrap gap-5 items-stretch">
        <div className="flex flex-col gap-2 flex-1">
          <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><About employee={employee} /></div>
          <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><Skills employee={employee} /></div>
          <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><WorkInfo employee={employee} /></div>
          <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><SystemFields employee={employee} /></div>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><ReportTo employee={employee} /></div>
          <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><BasicInfo employee={employee} /></div>
          <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><PersonalDetails employee={employee} /></div>
        </div>
      </div>
      <div className="border border-gray-300 p-5 bg-gray-100 rounded-lg flex flex-wrap gap-5 items-stretch">
        <div className="flex flex-col gap-2 flex-1">
          <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><HierarchyInfo employee={employee} /></div>
          <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><IdentityInfo employee={employee} /></div>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><ContactDetails employee={employee} /></div>
        </div>
      </div>
      <div className="border border-gray-300 p-5 bg-gray-100 rounded-lg shadow-md">
        <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg"><WorkExperience employee={employee} /></div>
        <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg"><EducationDetails employee={employee} /></div>
      </div>
    </div>
  );
}

export default ProfileSection;
