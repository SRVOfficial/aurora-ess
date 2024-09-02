








import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LeaveTrackerHeader from './LeaveTrackerHeaderComponent/LeaveTrackerHeader';
import LeaveTypes from './LeaveTypesComponent/LeaveTypes';
import LeaveTrackerFooter from './LeaveTrackerFooterComponent/LeaveTrackerFooter';
import CasualLeave from '../Assets/CasualLeaveImg.png';
import EarnedLeave from '../Assets/EarnedLeaveImg.png';
import LeaveWithoutPay from '../Assets/LeaveWithoutPayImg.png';
import PaternityLeave from '../Assets/PaternityLeaveImg.png';
import SabbaticalLeave from '../Assets/SabbaticalLeaveImg.png';
import SickLeave from '../Assets/SickLeaveImg.png';
import './LeaveSection.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import BASE_URL from '../../../config';

const LeaveSection = ({ employee }) => {
  const [leaves, setLeaves] = useState([]);
  const [year, setYear] = useState(new Date());
  const [upcomingLeaves, setUpcomingLeaves] = useState([]);
  const [leaveHistory, setLeaveHistory] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/employee-leaves/employee/${employee.empId}/year/${year.getFullYear()}`)
      .then(response => {
        const leaveDetails = response.data.leaveDetails.map(leave => {
          switch (leave.type) {
            case 'Casual Leave':
              return { ...leave, icon: CasualLeave };
            case 'Earned Leave':
              return { ...leave, icon: EarnedLeave };
            case 'Leave Without Pay':
              return { ...leave, icon: LeaveWithoutPay };
            case 'Paternity Leave':
              return { ...leave, icon: PaternityLeave };
            case 'Sabbatical Leave':
              return { ...leave, icon: SabbaticalLeave };
            case 'Sick Leave':
              return { ...leave, icon: SickLeave };
            default:
              return leave;
          }
        });
        const upcoming = leaveDetails.filter(leave => leave.status === 'upcoming');
        const history = leaveDetails.filter(leave => leave.status === 'history');
        setLeaves(leaveDetails);
        setUpcomingLeaves(upcoming);
        setLeaveHistory(history);
      })
      .catch(error => {
        console.error('Error fetching leave details:', error);
      });
  }, [employee.empId, year]);

  const handleApplyLeave = () => {
    window.location.href = '/leave-tracking';
  };

  const handleYearChange = (date) => {
    setYear(date);
  };

  return (
    <div className="leave-section-container">
      <LeaveTrackerHeader year={year.getFullYear()} onApplyLeave={handleApplyLeave} />
      <DatePicker
      selected={year}
      onChange={handleYearChange}
      showYearPicker
      dateFormat="yyyy"
      className="custom-datepicker" 
    />
      
      <LeaveTypes leaves={leaves} />
      <LeaveTrackerFooter upcomingLeaves={upcomingLeaves} leaveHistory={leaveHistory} />
    </div>
  );
};

export default LeaveSection;
