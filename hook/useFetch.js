import {useState, useEffect} from 'react';
import axios from 'axios';

// import {RAPID_API_KEY} from '@env';

// const rapidAPI = RAPID_API_KEY;

// useFetch custom hook
const useFetch = (endpoint, query) => {
  const [data, setData] = useState ([]);
  const [error, setError] = useState (null);
  const [isLoading, setIsLoading] = useState (false);

  // Create Options objects
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {...query},
    headers: {
      'X-RapidAPI-Key': '30ad7602e1msh54fecf555e100cfp1ab67djsn1ae3c19391e0',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };

  const fetchData = async () => {
    setIsLoading (true);
    try {
      const response = await axios.request (options);
      setData (response.data.data);
      setIsLoading (false);
    } catch (error) {
      setError (error);
      alert ('Something is wrong');
    } finally {
      setIsLoading (false);
    }
  };

  useEffect (() => {
    fetchData ();
  }, []);

  const refetch = () => {
    setIsLoading (true);
    fetchData ();
  };

  return {data, error, isLoading, fetchData, refetch};
};

export default useFetch;
