import React from 'react';
import ReactPlayer from 'react-player';
import './VideoComp.css';

function VideoComp() {
    return (
        <>
            <div className="video">
                <div className="video-container container">
                    <div className="player-wrapper">
                        <ReactPlayer className="video-player" url='https://www.youtube.com/watch?v=AUPnG-VidS8' width='100%' height='100%' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoComp