




// import React from 'react';


// import About from './AboutComponent/About.js';
// import ReportTo from './ReportComponent/ReportTo.js';
// import Skills from './SkillComponent/Skills.js';
// import BasicInfo from './BasicInfoComponent/BasicInfo.js';
// import WorkInfo from './WorkInfoComponent/WorkInfo.js';
// import PersonalDetails from './PersonalDetailsComponent/PersonalDetails.js';
// import HierarchyInfo from './HierarchyInfoComponent/HierarchyInfo.js';
// import ContactDetails from './ContactDetailsComponent/ContactDetails.js';
// import IdentityInfo from './IdentityInfoComponent/IdentityInfo.js';
// import SystemFields from './SystemFieldsComponent/SystemFields.js';
// import WorkExperience from './WorkExperienceComponent/WorkExperience.js';
// import EducationDetails from './EducationDetailsComponent/EducationDetails.js';

// import useFetchEmployee from '../hooks/useFetchEmployee.js';

// const ProfileSection = () => {
//   const { employee, loading, error } = useFetchEmployee('kam15');

//   if (loading) {
//     return <div>Loading......</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="grid grid-rows-[auto_auto_auto] gap-5 p-5">
//       <div className="border border-gray-300 p-5 bg-gray-100 rounded-lg flex flex-wrap gap-5 items-stretch">
//         <div className="flex flex-col gap-2 flex-1">
//           <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><About employee={employee} /></div>
//           <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><Skills employee={employee} /></div>
//           <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><WorkInfo employee={employee} /></div>
//           <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><SystemFields employee={employee} /></div>
//         </div>
//         <div className="flex flex-col gap-2 flex-1">
//           <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><ReportTo employee={employee} /></div>
//           <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><BasicInfo employee={employee} /></div>
//           <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><PersonalDetails employee={employee} /></div>
//         </div>
//       </div>
//       <div className="border border-gray-300 p-5 bg-gray-100 rounded-lg flex flex-wrap gap-5 items-stretch">
//         <div className="flex flex-col gap-2 flex-1">
//           <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><HierarchyInfo employee={employee} /></div>
//           <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><IdentityInfo employee={employee} /></div>
//         </div>
//         <div className="flex flex-col gap-2 flex-1">
//           <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg flex-1"><ContactDetails employee={employee} /></div>
//         </div>
//       </div>
//       <div className="border border-gray-300 p-5 bg-gray-100 rounded-lg shadow-md">
//         <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg"><WorkExperience employee={employee} /></div>
//         <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg"><EducationDetails employee={employee} /></div>
//       </div>
//     </div>
//   );
// }

// export default ProfileSection;







import React from 'react';
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
    return <div className="p-5">Loading......</div>;
  }

  if (error) {
    return <div className="p-5">Error: {error.message}</div>;
  }

  const InfoCard = ({ children }) => (
    <div className="border border-gray-300 bg-white p-2 mb-2 shadow-md rounded-lg w-full">
      {children}
    </div>
  );

  return (
    <div className="flex flex-col gap-5 p-2 sm:p-5 max-w-full overflow-x-hidden">
      <div className="border border-gray-300 p-2 sm:p-5 bg-gray-100 rounded-lg">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-2 w-full lg:w-1/2">
            <InfoCard><About employee={employee} /></InfoCard>
            <InfoCard><Skills employee={employee} /></InfoCard>
            <InfoCard><WorkInfo employee={employee} /></InfoCard>
            <InfoCard><SystemFields employee={employee} /></InfoCard>
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-1/2">
            <InfoCard><ReportTo employee={employee} /></InfoCard>
            <InfoCard><BasicInfo employee={employee} /></InfoCard>
            <InfoCard><PersonalDetails employee={employee} /></InfoCard>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 p-2 sm:p-5 bg-gray-100 rounded-lg">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-2 w-full lg:w-1/2">
            <InfoCard><HierarchyInfo employee={employee} /></InfoCard>
            <InfoCard><IdentityInfo employee={employee} /></InfoCard>
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-1/2">
            <InfoCard><ContactDetails employee={employee} /></InfoCard>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 p-2 sm:p-5 bg-gray-100 rounded-lg shadow-md">
        <InfoCard><WorkExperience employee={employee} /></InfoCard>
        <InfoCard><EducationDetails employee={employee} /></InfoCard>
      </div>
    </div>
  );
}

export default ProfileSection;