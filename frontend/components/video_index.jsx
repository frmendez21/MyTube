import React from 'react';
import VideoIndexItem from './video_index_item';
export default class VideoIndex extends React.Component {
    componentDidMount() {
        this.props.fetchVideos();
        this.props.fetchPopularVideos();
    };

    render() {
        const {videos, youtubeVideos} = this.props 
        const joinedVideos = videos.concat(youtubeVideos);
        const videoIndex = joinedVideos.map((video, idx) => (
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