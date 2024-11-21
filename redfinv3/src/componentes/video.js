import React from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = ({ videoId }) => {
    const onReady = (event) => {
        
    };

    const opts = {
        height: '100%', // se Cambia a 100% para que ocupe el contenedor
        width: '100%', // se Cambia a 100% para que ocupe el contenedor
    };

    return (
        <div className="youtube-video-container">
            <YouTube
                videoId={videoId}
                opts={opts}
                onReady={onReady}
            />
        </div>
    );
};

export default YouTubeVideo;