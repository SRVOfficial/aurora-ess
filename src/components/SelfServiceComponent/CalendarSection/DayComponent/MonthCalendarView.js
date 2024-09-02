




// import React, { useState, useEffect } from 'react';
// import { Badge, Calendar } from 'antd';
// import axios from 'axios';
// import moment from 'moment';
// import './MonthCalendarView.css';

// const MonthCalendarView = ({ employee }) => {
//   const [selectedDate, setSelectedDate] = useState(moment());
//   const [leaveData, setLeaveData] = useState({
//     absenceType: '',
//     leaveType: '',
//     reason: '',
//     status: '',
//   });
//   const [mockLeaveData, setMockLeaveData] = useState([]);
//   const [publicHolidays, setPublicHolidays] = useState([]);

//   useEffect(() => {
//     const fetchLeaveData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/events/${employee.empId}`);
//         setMockLeaveData(response.data);

//         const currentFormattedDate = moment().format('YYYY-MM-DD');
//         const leaveRecord = response.data.find((item) => item.startDate.slice(0, 10) === currentFormattedDate);
//         if (leaveRecord) {
//           setLeaveData({
//             absenceType: leaveRecord.absenceType,
//             leaveType: leaveRecord.leaveType,
//             reason: leaveRecord.reason,
//             status: leaveRecord.status,
//           });
//         } else {
//           setLeaveData({
//             absenceType: '',
//             leaveType: '',
//             reason: '',
//             status: 'present',
//           });
//         }
//       } catch (error) {
//         console.error('Error fetching leave data:', error);
//       }
//     };

//     fetchLeaveData();

//     const holidays = [
//       '2024-05-08', '2024-05-16', '2024-05-06',
//       '2024-06-11', '2024-06-13', '2024-06-17',
//       '2024-07-10', '2024-07-15', '2024-07-25',
//     ];
//     setPublicHolidays(holidays);
//   }, [employee.empId]);

//   const getListData = (value) => {
//     const formattedDate = value.format('YYYY-MM-DD');
//     const leaveRecord = mockLeaveData.find((item) => item.startDate.slice(0, 10) === formattedDate);

//     if (leaveRecord) {
//       setSelectedDate(value);
//       setLeaveData({
//         absenceType: leaveRecord.absenceType,
//         leaveType: leaveRecord.leaveType,
//         reason: leaveRecord.reason,
//         status: leaveRecord.status,
//       });
//     } else {
//       setSelectedDate(value);
//       setLeaveData({
//         absenceType: '',
//         leaveType: '',
//         reason: '',
//         status: 'present',
//       });
//     }
//   };

//   const handleNavigation = (direction) => {
//     if (selectedDate) {
//       const newDate = selectedDate.clone().add(direction, 'days');
//       getListData(newDate);
//     }
//   };

//   const dateCellRender = (value) => {
//     const formattedDate = value.format('YYYY-MM-DD');
//     const leaveRecord = mockLeaveData.find((item) => item.startDate.slice(0, 10) === formattedDate);
//     const isPublicHoliday = publicHolidays.includes(formattedDate);
//     const isSunday = value.day() === 0;

//     if (leaveRecord) {
//       return <Badge status="error" text="Absent Day" />;
//     } else if (isPublicHoliday) {
//       return <Badge status="processing" text="Public Holiday" />;
//     } else if (isSunday) {
//       return <Badge status="warning" text="Non-Working Day" />;
//     } else {
//       return <Badge status="success" text="Present" />;
//     }
//   };

//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   return (
//     <div className='calendar-leave-overlay'>
//       <div className='calendar-leave-modal'>
//         <div className="calendar-container">
//           <div className="calendar-header">
//             <Calendar
//               dateCellRender={dateCellRender}
//               onSelect={getListData}
//               headerRender={({ value, onChange }) => {
//                 const year = value.year();
//                 const month = value.month();

//                 return (
//                   <div className="calendar-month-year">
//                     <select
//                       className='calendar-year'
//                       value={year}
//                       onChange={(e) => {
//                         const newYear = parseInt(e.target.value, 10);
//                         const newValue = value.clone().year(newYear);
//                         onChange(newValue);
//                       }}
//                     >
//                       {Array.from({ length: 100 }, (_, i) => 2000 + i).map((yearOption) => (
//                         <option key={yearOption} value={yearOption}>
//                           {yearOption}
//                         </option>
//                       ))}
//                     </select>
//                     <select
//                       className='calendar-month'
//                       value={month}
//                       onChange={(e) => {
//                         const newMonth = parseInt(e.target.value, 10);
//                         const newValue = value.clone().month(newMonth);
//                         onChange(newValue);
//                       }}
//                     >
//                       {months.map((monthOption, index) => (
//                         <option key={index} value={index}>
//                           {monthOption}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 );
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MonthCalendarView;





// import React, { useState, useEffect } from 'react';
// import { Badge, Calendar } from 'antd';
// import axios from 'axios';
// import moment from 'moment';

// const MonthCalendarView = ({ employee }) => {
//   const [selectedDate, setSelectedDate] = useState(moment());
//   const [leaveData, setLeaveData] = useState({
//     absenceType: '',
//     leaveType: '',
//     reason: '',
//     status: '',
//   });
//   const [mockLeaveData, setMockLeaveData] = useState([]);
//   const [publicHolidays, setPublicHolidays] = useState([]);

//   useEffect(() => {
//     const fetchLeaveData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/events/${employee.empId}`);
//         setMockLeaveData(response.data);

//         const currentFormattedDate = moment().format('YYYY-MM-DD');
//         const leaveRecord = response.data.find((item) => item.startDate.slice(0, 10) === currentFormattedDate);
//         if (leaveRecord) {
//           setLeaveData({
//             absenceType: leaveRecord.absenceType,
//             leaveType: leaveRecord.leaveType,
//             reason: leaveRecord.reason,
//             status: leaveRecord.status,
//           });
//         } else {
//           setLeaveData({
//             absenceType: '',
//             leaveType: '',
//             reason: '',
//             status: 'present',
//           });
//         }
//       } catch (error) {
//         console.error('Error fetching leave data:', error);
//       }
//     };

//     fetchLeaveData();

//     const holidays = [
//       '2024-05-08', '2024-05-16', '2024-05-06',
//       '2024-06-11', '2024-06-13', '2024-06-17',
//       '2024-07-10', '2024-07-15', '2024-07-25',
//     ];
//     setPublicHolidays(holidays);
//   }, [employee.empId]);

//   const getListData = (value) => {
//     const formattedDate = value.format('YYYY-MM-DD');
//     const leaveRecord = mockLeaveData.find((item) => item.startDate.slice(0, 10) === formattedDate);

//     if (leaveRecord) {
//       setSelectedDate(value);
//       setLeaveData({
//         absenceType: leaveRecord.absenceType,
//         leaveType: leaveRecord.leaveType,
//         reason: leaveRecord.reason,
//         status: leaveRecord.status,
//       });
//     } else {
//       setSelectedDate(value);
//       setLeaveData({
//         absenceType: '',
//         leaveType: '',
//         reason: '',
//         status: 'present',
//       });
//     }
//   };

//   const dateCellRender = (value) => {
//     const formattedDate = value.format('YYYY-MM-DD');
//     const leaveRecord = mockLeaveData.find((item) => item.startDate.slice(0, 10) === formattedDate);
//     const isPublicHoliday = publicHolidays.includes(formattedDate);
//     const isSunday = value.day() === 0;

//     if (leaveRecord) {
//       return <Badge status="error" text="Absent Day" />;
//     } else if (isPublicHoliday) {
//       return <Badge status="processing" text="Public Holiday" />;
//     } else if (isSunday) {
//       return <Badge status="warning" text="Non-Working Day" />;
//     } else {
//       return <Badge status="success" text="Present" />;
//     }
//   };

//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   return (
//     <div className="bg-gray-100 p-4 md:p-8">
//       <div className="bg-white rounded-lg shadow-md max-w-4xl mx-auto">
//         <div className="p-4 md:p-6">
//           <Calendar
//             dateCellRender={dateCellRender}
//             onSelect={getListData}
//             headerRender={({ value, onChange }) => {
//               const year = value.year();
//               const month = value.month();

//               return (
//                 <div className="flex justify-between items-center mb-4">
//                   <select
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     value={year}
//                     onChange={(e) => {
//                       const newYear = parseInt(e.target.value, 10);
//                       const newValue = value.clone().year(newYear);
//                       onChange(newValue);
//                     }}
//                   >
//                     {Array.from({ length: 100 }, (_, i) => 2000 + i).map((yearOption) => (
//                       <option key={yearOption} value={yearOption}>
//                         {yearOption}
//                       </option>
//                     ))}
//                   </select>
//                   <select
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     value={month}
//                     onChange={(e) => {
//                       const newMonth = parseInt(e.target.value, 10);
//                       const newValue = value.clone().month(newMonth);
//                       onChange(newValue);
//                     }}
//                   >
//                     {months.map((monthOption, index) => (
//                       <option key={index} value={index}>
//                         {monthOption}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               );
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MonthCalendarView;














// import React, { useState, useEffect } from 'react';
// import { Badge, Calendar } from 'antd';
// import axios from 'axios';
// import moment from 'moment';

// const MonthCalendarView = ({ employee }) => {
//   const [selectedDate, setSelectedDate] = useState(moment());
//   const [leaveData, setLeaveData] = useState({
//     absenceType: '',
//     leaveType: '',
//     reason: '',
//     status: '',
//   });
//   const [mockLeaveData, setMockLeaveData] = useState([]);
//   const [publicHolidays, setPublicHolidays] = useState([]);
//   const [view, setView] = useState('month');

//   // ... (keep the existing useEffect, getListData, and dateCellRender functions)

//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   return (
//     <div className="bg-gray-100 p-2 md:p-4 lg:p-8">
//       <div className="bg-white rounded-lg shadow-md max-w-4xl mx-auto">
//         <div className="p-2 md:p-4 lg:p-6">
//           <Calendar
//             dateCellRender={dateCellRender}
//             onSelect={getListData}
//             mode={view}
//             onPanelChange={(date, mode) => {
//               setSelectedDate(date);
//               setView(mode);
//             }}
//             headerRender={({ value, type, onChange, onTypeChange }) => {
//               const current = selectedDate;
//               const localeData = value.localeData();
//               const monthOptions = [];
//               for (let i = 0; i < 12; i++) {
//                 monthOptions.push(<option key={i} value={i}>{localeData.monthsShort(current)[i]}</option>);
//               }

//               return (
//                 <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0">
//                   <div className="flex items-center space-x-2">
//                     <button
//                       className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//                       onClick={() => {
//                         const newValue = current.clone().subtract(1, type);
//                         onChange(newValue);
//                       }}
//                     >
//                       &lt;
//                     </button>
//                     <div className="text-lg font-semibold">
//                       {current.format(type === 'month' ? 'MMMM YYYY' : 'DD MMM YYYY')}
//                     </div>
//                     <button
//                       className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//                       onClick={() => {
//                         const newValue = current.clone().add(1, type);
//                         onChange(newValue);
//                       }}
//                     >
//                       &gt;
//                     </button>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <select
//                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1.5"
//                       value={current.month()}
//                       onChange={(e) => {
//                         const newValue = current.clone().month(parseInt(e.target.value, 10));
//                         onChange(newValue);
//                       }}
//                     >
//                       {monthOptions}
//                     </select>
//                     <select
//                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1.5"
//                       value={current.year()}
//                       onChange={(e) => {
//                         const newValue = current.clone().year(parseInt(e.target.value, 10));
//                         onChange(newValue);
//                       }}
//                     >
//                       {Array.from({ length: 20 }, (_, i) => current.year() - 10 + i).map((year) => (
//                         <option key={year} value={year}>
//                           {year}
//                         </option>
//                       ))}
//                     </select>
//                     <div className="flex space-x-1">
//                       {['month', 'week', 'day'].map(viewType => (
//                         <button
//                           key={viewType}
//                           className={`px-2 py-1 text-sm rounded ${view === viewType ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//                           onClick={() => {
//                             setView(viewType);
//                             onTypeChange(viewType);
//                           }}
//                         >
//                           {viewType.charAt(0).toUpperCase() + viewType.slice(1)}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               );
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MonthCalendarView;