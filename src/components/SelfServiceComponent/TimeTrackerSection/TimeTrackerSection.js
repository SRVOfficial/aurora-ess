








import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './TimeTrackerHeaderComponent/TimeTrackerHeader.js';
import FilterPopup from './FilterPopupComponent/FilterPopup.js';
import MiddleSection from './TimeTrackerMiddleComponent/MiddleSection.js';
import Footer from './TimeTrackerFooterComponent/Footer.js';
import './TimeTrackerSection.css';

import BASE_URL from '../../../config.js';

// Helper function to format dates
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

// Calculate the start and end of the week from a given date
const getWeekRange = (date) => {
  const currentDay = date.getDay();
  const firstDay = new Date(date);
  firstDay.setDate(date.getDate() - currentDay);

  const lastDay = new Date(firstDay);
  lastDay.setDate(firstDay.getDate() + 6);

  return `${formatDate(firstDay)} - ${formatDate(lastDay)}`;
};

// Helper functions for time calculation
const parseTime = (timeString) => {
  const [hours, minutes] = timeString.split(' ')[0].split(':').map(Number);
  return hours * 60 + minutes;
};

const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}:${mins < 10 ? '0' : ''}${mins} Hrs`;
};

const TimeTrackerSection = ({employee}) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    period: 'This Week',
    clients: 'All Clients',
    projects: 'All Projects',
    jobs: 'All Jobs',
    billableStatus: 'All',
    approvalStatus: 'All'
  });
  const [showFilter, setShowFilter] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateRange, setDateRange] = useState(getWeekRange(currentDate));

  useEffect(() => {
    const fetchData = async () => {
      if (!employee || !employee.empId) {
        console.error('Employee ID is required');
        return;
      }

      try {
        let url = `${BASE_URL}/api/timesheets`;
        
        const params = new URLSearchParams();
        params.append('empId', employee.empId);
        params.append('startDate', new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay()).toISOString());
        params.append('endDate', new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 6).toISOString());

        if (filters.billableStatus !== 'All') {
          params.append('billable', filters.billableStatus);
        }

        url += `?${params.toString()}`;
        
        console.log('Fetching URL:', url);
        const response = await axios.get(url);
        console.log('Response data:', response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [filters, currentDate, employee.empId]);

  const handleFilterChange = (e) => {
    console.log('Filter changed:', e.target.name, e.target.value);
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleExport = () => {
    console.log("Exporting data");
  };

  const handleRecordTime = () => {
    window.location.href = '/timesheet';
  };

  const handlePreviousWeek = () => {
    updateWeekRange(-7);
  };

  const handleNextWeek = () => {
    updateWeekRange(7);
  };

  const updateWeekRange = (daysToAdd) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + daysToAdd);
    setCurrentDate(newDate);
    setDateRange(getWeekRange(newDate));
  };

  const total = data.reduce((sum, item) => sum + parseTime(item.totalTime), 0);
  const submitted = data.reduce((sum, item) => sum + parseTime(item.recordedTime), 0);
  const notSubmitted = total - submitted;

  return (
    <div className="time-tracker">
      <Header 
        dateRange={dateRange}
        onPreviousWeek={handlePreviousWeek}
        onNextWeek={handleNextWeek}
        onRecordTime={handleRecordTime}
        onToggleFilter={() => setShowFilter(!showFilter)}
        data={data}
        employee={employee}
      />
      {showFilter && <FilterPopup filters={filters} onFilterChange={handleFilterChange} onClose={() => setShowFilter(false)} />}
      <MiddleSection data={data} filters={filters} onFilterChange={handleFilterChange} />
      <Footer total={formatTime(total)} submitted={formatTime(submitted)} notSubmitted={formatTime(notSubmitted)} />
    </div>
  );
};

export default TimeTrackerSection;