import React from 'react';

const VideoListItem = ({ video, onSelectVideo }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;

  return (
    <li className="list-group-item" onClick={() => onSelectVideo(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="medio-object" src={imageUrl} alt="video-item" />
        </div>

        <div className="media-body">
          <div className="media-heading">{videoTitle}</div>
        </div>

      </div>
    </li>
  );
};

export default VideoListItem;
