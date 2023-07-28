import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';
import './Trending.css';
import CustomPagination from '../../components/pagination/CustomPagination';
import { API } from '../../config/config';

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API}&page=${page}`
      );

      // console.log(data);
      setContent(data.results);
    } catch (error) {
      console.error('Error fetching trending:', error);
    }
  };

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster_path={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
