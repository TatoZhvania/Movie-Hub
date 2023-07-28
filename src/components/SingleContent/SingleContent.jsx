import React from 'react';
import { img_300, unavailable } from '../../config/config';
import './SingleContent.css';
import { Badge } from '@material-ui/core';
import ContentModal from '../ContentModal/ContentModal';

const SingleContent = ({
  id,
  poster_path,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        overlap="rectangular"
        badgeContent={vote_average.toFixed(1)}
        color={vote_average > 6 ? 'primary' : 'secondary'}
      />
      <img
        className="poster"
        src={poster_path ? `${img_300}/${poster_path}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <div className="title-flex">
        <span className="sunTitle">
          {media_type === 'tv' ? 'TV series' : 'Movie'}
        </span>
        <span className="sunTitle">{date}</span>
      </div>
    </ContentModal>
  );
};

export default SingleContent;
