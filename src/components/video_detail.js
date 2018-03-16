import React from "react";

const VideoDetails = ({ video }) => {
    if(!video) return <div>Loading...</div>

  const videoID = video.id.videoId;
  const url = `http://www.youtube.com/embed/${videoID}`;
  console.log("Youtube url: "+url)

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetails;
