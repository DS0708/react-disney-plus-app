import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const [searchResults, setsearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const searchTerm = query.get('q');

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm])

  const fetchSearchMovie = async(searchTerm) => {
    try {
      const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      setsearchResults(response.data.results);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  

  
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage