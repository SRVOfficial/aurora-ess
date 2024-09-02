import { useState, useEffect } from 'react';
import axios from 'axios';

import BASE_URL from '../../../config';

const useFetchEmployee = (employeeId) => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/employees/${employeeId}`)
      .then(response => {
        setEmployee(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data", error);
        setError(error);
        setLoading(false);
      });
  }, [employeeId]);

  return { employee, loading, error };
};

export default useFetchEmployee;
