import React from 'react';
import ReactPlayer from 'react-player';

const MultimediaEmbed = ({ url }) => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={url}
        width='100%'
        height='100%'
        controls
      />
    </div>
  );
};

export default MultimediaEmbed;