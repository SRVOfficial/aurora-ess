








import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import './CalendarSection.css';  // Import the CSS file

import BASE_URL from '../../../config.js';

const CalendarSection = ({ employee }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents(); // Fetch events on component mount
  }, [employee.empId]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/events/${employee.empId}`);
      setEvents(response.data.map(event => ({
        title: event.title,
        start: event.startDate,
        end: event.endDate,
        backgroundColor: getEventColor(event.status)
      })));
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const getEventColor = (status) => {
    switch (status) {
      case 'present':
        return 'green';
      case 'late':
        return 'yellow';
      case 'absent':
        return 'red';
      case 'holiday':
        return 'blue';
      default:
        return 'gray';
    }
  };

  const eventClick = (eventInfo) => {
    console.log(eventInfo.event);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center mt-5 px-4 lg:px-0">
      <div className="w-full lg:w-3/4 bg-white rounded-lg shadow-md p-4 mb-4 lg:mb-0">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          events={events}
          eventClick={eventClick}
          className="rounded-lg responsive-calendar"  // Add a custom class
        />
      </div>
      <div className="w-full lg:w-1/4 bg-gray-100 border border-gray-300 rounded-md p-4 lg:ml-5">
        <h3 className="text-lg font-semibold mb-2">Legend</h3>
        <ul className="flex flex-wrap lg:flex-col space-y-0 lg:space-y-2">
          {[
            { color: 'bg-green-500', label: 'Present' },
            { color: 'bg-yellow-500', label: 'Late' },
            { color: 'bg-red-500', label: 'Absent' },
            { color: 'bg-blue-500', label: 'Holiday' },
          ].map((item, index) => (
            <li key={index} className="flex items-center mr-4 mb-2 lg:mb-0 lg:mr-0">
              <span className={`w-3 h-3 rounded-full ${item.color} mr-2`}></span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarSection;
