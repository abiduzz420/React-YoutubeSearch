import React from 'react';

import VideoListItem from './video-list-item';

const VideoList = ({ videos }) => {
  if (!videos) return <div />;
  return (
    <ul className="col-md-4 list-group">
      {videos.map(video => <VideoListItem key={video.etag} video={video} />)}
    </ul>
  );
};

export default VideoList;
