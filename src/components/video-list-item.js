import React from 'react';

const VideoListItem = ({ video }) => {
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img
            className="medio-object"
            src={video.snippet.thumbnails.default.url}
            alt="video-item"
          />
        </div>
        
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>

      </div>
    </li>
  );
};

export default VideoListItem;
