import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CaseHeader from './CaseHeaderComponent/CaseHeader.js';
import MyRequestList from './MyRequestListComponent/MyRequestList.js';
import CasesFooter from './CasesFooterComponent/CasesFooter.js';
import './CasesSection.css';

import BASE_URL from '../../../config.js';

const CasesSection = () => {
  const [requests, setRequests] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchRequests();
  }, [filter]);

  const fetchRequests = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/cases-requests`, {
        params: { status: filter }
      });
      setRequests(response.data);
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  };

  return (
    <div className="cases-section bg-[#A28089]">
      <CaseHeader setFilter={setFilter} requestData={requests} />
      <MyRequestList requests={requests} />
      <CasesFooter requests={requests} />
    </div>
  );
}

export default CasesSection;




