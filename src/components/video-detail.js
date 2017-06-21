import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  const videoId = video.id.videoId;
  const videoURL = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="col-md-8 video-detail">
      <div className="embed-responsive  embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoURL} />
      </div>
      <div className="details">
        <div style={{ fontWeight: 'bold', fontSize: '1.5em' }}>
          {video.snippet.title}
        </div>
        <div>{video.snippet.channelTitle}</div>
        <div style={{ fontStyle: 'oblique' }}>
          {video.snippet.description}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
