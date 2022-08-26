/* eslint-disable no-console */
import { useState } from 'react';
import MovieList from './MovieList';

const axios = require('axios');

function MovieRequest() {
  const [data, setData] = useState([]);
  const [filmTitle, setFilmTitle] = useState('');

  const updateFilmTitle = (e) => {
    setFilmTitle(e.target.value);
  };
  const request = async () => {
    try {
      const res = await axios.get(`http://www.omdbapi.com/?apikey=e3043ece&s=${filmTitle}`);
      setData(res.data.Search);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h2 className='RequestHeader'>Film Request</h2>
      <input
      className='RequestInput'
        type="text"
        placeholder="Search movie title here..."
        onChange={
            (e) => updateFilmTitle(e)
        }
      />
      <button
      className='RequestBtn'
        type="button"
        onClick={
          () => request()
        }
      >
        Search
      </button>
      {data.length === 0
        ? <p>Search for your favourite movies</p>
        : <MovieList data={data} />}
    </>
  );
}

export default MovieRequest;