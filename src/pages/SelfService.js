


// import React, { useState } from 'react';

// // Components for each section
// import ProfileSection from '../components/SelfServiceComponent/ProfileSection/ProfileSection.js';
// import AttendanceSection from '../components/SelfServiceComponent/AttendanceSection/AttendanceSection.js';
// import LeaveSection from '../components/SelfServiceComponent/LeaveSection/LeaveSection.js';
// import GoalSection from '../components/SelfServiceComponent/GoalSection/GoalSection.js';
// import FilesSection from '../components/SelfServiceComponent/FilesSection/FilesSection.js';
// import ProfileCover from '../components/SelfServiceComponent/ProfileCoverComponent/ProfileCover.js';
// import TeamSection from '../components/SelfServiceComponent/TeamSection/TeamSection.js';
// import CalendarSection from '../components/SelfServiceComponent/CalendarSection/CalendarSection.js';
// import TimeTrackerSection from '../components/SelfServiceComponent/TimeTrackerSection/TimeTrackerSection.js';
// import CasesSection from '../components/SelfServiceComponent/CasesSection/CasesSection.js';
// import TravelExpenseSection from '../components/SelfServiceComponent/TravelExpenseSection/TravelExpenseSection.js';
// import TravelRequestSection from '../components/SelfServiceComponent/TravelRequestSection/TravelRequestSection.js';
// // import Feedback from '../components/FeedbackForm/Feedback.js';
// import './SelfService.css';

// import useFetchEmployee from '../components/SelfServiceComponent/hooks/useFetchEmployee.js';

// import ProfileEditForm from '../components/SelfServiceComponent/ProfileEditComponent/ProfileEditForm.js';
// import PersonalSettings from '../components/SelfServiceComponent/PersonalSettingsComponent/PersonalSettings.js';


// const SelfService = () => {
//   const [selectedOption, setSelectedOption] = useState('profile');

//   const { employee, loading, error } = useFetchEmployee('kam15');



//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   const handleOptionClickA = () => {
    
//   }

//   const renderRightSection = () => {
//     switch (selectedOption) {
//       case 'profile':
//         return <ProfileSection />;
//       case 'team':
//         return <TeamSection employee={employee}/>;
//       case 'calendar':
//         return <CalendarSection employee={employee}/>;
//       // case 'attendance':
//       //   return <AttendanceSection />;
//       case 'files':
//         return <FilesSection employee={employee}/>;
//       case 'leave':
//         return <LeaveSection employee={employee}/>;
//       case 'time':
//         return <TimeTrackerSection employee={employee}/>
//       case 'goal':
//         return <GoalSection />;
//       case 'cases':
//         return <CasesSection />
//       case 'travelExpense':
//         return <TravelExpenseSection employee={employee}/>;
//       case 'travelRequest':
//         return <TravelRequestSection employee={employee}/>;
//       case 'edit':
//         return <ProfileEditForm employee={employee}/>;
//       case 'personal-setting':
//         return <PersonalSettings employee={employee} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="self-service">
//        <ProfileCover employee={employee} />
//       {/* <header className="header">
       
       
//       </header> */}

//       <div className="profile-actions">
//         {/* <a href="#edit" onClick={() => handleOptionClickA('edit')}>Edit</a> | */}
//         <a href="#edit"  className={selectedOption === 'edit' ? 'active' : ''}
//               onClick={() => handleOptionClick('edit')}>Edit</a> |
//         <a href="#personal-setting"  className={selectedOption === 'personal-setting' ? 'active' : ''}
//               onClick={() => handleOptionClick('personal-setting')}>Personal Settings</a>
//         {/* <a href="#personal-settings">Personal Settings</a> */}
//       </div>

//       {/* <Feedback /> */}

     
     

//       <div className="content">
//         <nav className="sidebar">
//           <ul>
//             <li 
//               className={selectedOption === 'profile' ? 'active' : ''}
//               onClick={() => handleOptionClick('profile')}
//             >
//               Profile
//             </li>
//             <li 
//               className={selectedOption === 'team' ? 'active' : ''}
//               onClick={() => handleOptionClick('team')}
//             >
//               Team
//             </li>
//             <li 
//               className={selectedOption === 'calendar' ? 'active' : ''}
//               onClick={() => handleOptionClick('calendar')}
//             >
//               Calendar
//             </li>
//             <li 
//               className={selectedOption === 'leave' ? 'active' : ''}
//               onClick={() => handleOptionClick('leave')}
//             >
//               Leave Tracker
//             </li>
//             <li 
//               className={selectedOption === 'time' ? 'active' : ''}
//               onClick={() => handleOptionClick('time')}
//             >
//               Time Tracker
//             </li>
//             {/* <li 
//               className={selectedOption === 'attendance' ? 'active' : ''}
//               onClick={() => handleOptionClick('attendance')}
//             >
//               Attendance
//             </li> */}
//             <li 
//               className={selectedOption === 'files' ? 'active' : ''}
//               onClick={() => handleOptionClick('files')}
//             >
//               Files
//             </li>
//             <li 
//               className={selectedOption === 'goal' ? 'active' : ''}
//               onClick={() => handleOptionClick('goal')}
//             >
//               Goals
//             </li>
//             <li 
//               className={selectedOption === 'cases' ? 'active' : ''}
//               onClick={() => handleOptionClick('cases')}
//             >
//               Cases
//             </li>
//             <li 
//               className={selectedOption === 'travelExpense' ? 'active' : ''}
//               onClick={() => handleOptionClick('travelExpense')}
//             >
//               Travel Expense
//             </li>
//             <li 
//               className={selectedOption === 'travelRequest' ? 'active' : ''}
//               onClick={() => handleOptionClick('travelRequest')}
//             >
//               Travel Request
//             </li>
//           </ul>
//         </nav>

//         <div className="content-area">
//           {renderRightSection()}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default SelfService;




import React, { useState } from 'react';
import ProfileSection from '../components/SelfServiceComponent/ProfileSection/ProfileSection.js';
import AttendanceSection from '../components/SelfServiceComponent/AttendanceSection/AttendanceSection.js';
import LeaveSection from '../components/SelfServiceComponent/LeaveSection/LeaveSection.js';
import GoalSection from '../components/SelfServiceComponent/GoalSection/GoalSection.js';
import FilesSection from '../components/SelfServiceComponent/FilesSection/FilesSection.js';
import ProfileCover from '../components/SelfServiceComponent/ProfileCoverComponent/ProfileCover.js';
import TeamSection from '../components/SelfServiceComponent/TeamSection/TeamSection.js';
import CalendarSection from '../components/SelfServiceComponent/CalendarSection/CalendarSection.js';
import TimeTrackerSection from '../components/SelfServiceComponent/TimeTrackerSection/TimeTrackerSection.js';
import CasesSection from '../components/SelfServiceComponent/CasesSection/CasesSection.js';
import TravelExpenseSection from '../components/SelfServiceComponent/TravelExpenseSection/TravelExpenseSection.js';
import TravelRequestSection from '../components/SelfServiceComponent/TravelRequestSection/TravelRequestSection.js';
import useFetchEmployee from '../components/SelfServiceComponent/hooks/useFetchEmployee.js';
import ProfileEditForm from '../components/SelfServiceComponent/ProfileEditComponent/ProfileEditForm.js';
import PersonalSettings from '../components/SelfServiceComponent/PersonalSettingsComponent/PersonalSettings.js';

import { RiMenuUnfoldFill } from "react-icons/ri";

const SelfService = () => {
  const [selectedOption, setSelectedOption] = useState('profile');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { employee, loading, error } = useFetchEmployee('kam15');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false);
  };

  const renderRightSection = () => {
    switch (selectedOption) {
      case 'profile':
        return <ProfileSection />;
      case 'team':
        return <TeamSection employee={employee} />;
      case 'calendar':
        return <CalendarSection employee={employee} />;
      case 'files':
        return <FilesSection employee={employee} />;
      case 'leave':
        return <LeaveSection employee={employee} />;
      case 'time':
        return <TimeTrackerSection employee={employee} />;
      case 'goal':
        return <GoalSection employee={employee} />;
      case 'cases':
        return <CasesSection employee={employee} />;
      case 'travelExpense':
        return <TravelExpenseSection employee={employee} />;
      case 'travelRequest':
        return <TravelRequestSection employee={employee} />;
      case 'edit':
        return <ProfileEditForm employee={employee} />;
      case 'personal-setting':
        return <PersonalSettings employee={employee} />;
      default:
        return null;
    }
  };

  return (
    <div className="self-service flex flex-col min-h-screen">
      <ProfileCover employee={employee} />

      <div className="profile-actions flex justify-end mt-2 space-x-4">
        <a
          href="#edit"
          className={`${
            selectedOption === 'edit' ? 'font-bold underline' : ''
          } text-blue-500 hover:underline`}
          onClick={() => handleOptionClick('edit')}
        >
          Edit
        </a>
        <a
          href="#personal-setting"
          className={`${
            selectedOption === 'personal-setting' ? 'font-bold underline' : ''
          } text-blue-500 hover:underline`}
          onClick={() => handleOptionClick('personal-setting')}
        >
          Personal Settings
        </a>
      </div>

      <div className="content flex flex-1 relative">
        {/* Mobile Menu Button */}
        <div className="md:hidden absolute top-0 left-0 p-4 z-20">
          {!isMenuOpen && (
            <button
              className="text-white bg-[#A28089] p-2 rounded"
              onClick={() => setIsMenuOpen(true)}
            >
              <RiMenuUnfoldFill />
            </button>
          )}
        </div>

        {/* Sidebar */}
        <nav
          className={`sidebar bg-[#A28089] shadow-lg p-2 w-64 fixed inset-y-0 left-0 transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-10 md:h-auto md:max-h-100vh md:overflow-y-auto md:relative md:translate-x-0`}
        >
          {/* Close button (X) for mobile */}
          <div className="md:hidden absolute top-0 right-0 p-4">
            <button
              className="text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="space-y-2 mt-16 md:mt-0">
            {[
              { name: 'Profile', value: 'profile' },
              { name: 'Team', value: 'team' },
              { name: 'Calendar', value: 'calendar' },
              { name: 'Leave Tracker', value: 'leave' },
              { name: 'Time Tracker', value: 'time' },
              { name: 'Files', value: 'files' },
              { name: 'Goals', value: 'goal' },
              { name: 'Cases', value: 'cases' },
              { name: 'Travel Expense', value: 'travelExpense' },
              { name: 'Travel Request', value: 'travelRequest' },
            ].map((item) => (
              <li
                key={item.value}
                className={`cursor-pointer p-3 border-b border-gray-300 rounded-md ${
                  selectedOption === item.value
                    ? 'bg-[#A28089] text-white'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
                onClick={() => handleOptionClick(item.value)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>

        <div className="content-area flex-1 p-4 bg-gray-100 overflow-y-auto mt-10">
          {renderRightSection()}
        </div>
      </div>
    </div>
  );
};

export default SelfService;