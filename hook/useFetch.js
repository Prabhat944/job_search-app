import { useState, useEffect } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from "@env"

// const rapidEnvKey=RAPID_API_KEY;

const useFetch = (endpoint, query) => {
   const [data,setData] = useState([]);
   const [isLoading,setIsLoading] = useState(false);
   const [error,setError] = useState(false);

   const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {...query},
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': "efd109f5aemsh30a9c4e70df82a0p1cde87jsn19ba08295bf3",
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  const fetchData = async() => {
    setIsLoading(true);
    try{
        const response = await axios.request(options);
        setData(response.data.data);
        setIsLoading(false);
    }catch(error){
        setError(error);
        alert("There is an error")
    }finally{
        setIsLoading(false);
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  const refetchData = ( ) => {
    setIsLoading(true);
    fetchData();
  }

  return {data, error, isLoading, refetchData}
}

export default useFetch;