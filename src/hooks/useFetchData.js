import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const dataResponse = await response.json();
      setData(dataResponse);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  return [data, loading, error];
};

export default useFetchData;
