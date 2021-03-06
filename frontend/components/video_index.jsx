import React from 'react';
import VideoIndexItem from './video_index_item';
export default class VideoIndex extends React.Component {
    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        const {videos} = this.props 
        const videoIndex = videos.map((video, idx) => (
            <VideoIndexItem key={`${video.id}-${idx}`} video={video}/>
        ));
        return (
            <div className="main-content">
                <ul className="video-index-container">
                    {videoIndex}
                </ul>
            </div>
        )
    };
};