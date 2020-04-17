import React from 'react';
import Video from './video/TradeKarmaTrailer1080.mp4';


const VideoSection = () => {
    return(
        <video src={Video} controls="controls" className='videosec'></video>
    )
}
export default VideoSection;