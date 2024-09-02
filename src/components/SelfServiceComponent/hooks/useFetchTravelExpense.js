import { useState, useEffect } from 'react';
import axios from 'axios';

import BASE_URL from '../../../config';

const useFetchTravelExpense = (employeeId) => {
  const [travelExpenses, setTravelExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (employeeId) {
      axios.get(`${BASE_URL}/travelExpense/employee/${employeeId}`)
        .then(response => {
          setTravelExpenses(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching data", error);
          setError(error);
          setLoading(false);
        });
    }
  }, [employeeId]);

  return { travelExpenses, loading, error };
};

export default useFetchTravelExpense;
