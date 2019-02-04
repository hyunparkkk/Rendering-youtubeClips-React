import React from 'react';
import VideoItem from './VideoItem';

//let's use ES 2015 syntax to get videos out of props object
const VideoList = ({videos, onVideoSelect}) =>{
    const renderedList = videos.map((video)=>{
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    })
    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;