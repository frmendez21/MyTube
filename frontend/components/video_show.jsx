import React from 'react';
import RecommendedVideos from './recommended_videos';
import VideoComments from './video_comments';

export default class VideoShow extends React.Component {
    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.id);
        this.props.fetchVideos()
        this.props.fetchComments(this.props.match.params.id)
    }

    render() {
        const {video, videos, comments} = this.props
        if(!video) return null;
        const date = new Date(video.uploadedDate).toString().slice(4, 15);
        return (
            <div className="video-show-content">
                <div className="video-showpage-container-top">
                    <div className="video-show-wrapper">
                        <video className="video" src={video.videoUrl} controls></video>
                        <div className="video-info-wrapper">
                            <div className="video-title">
                                <h3>{video.title}</h3>
                                <p>{date}</p>
                            </div>
                            <div className="video-uploader-info">
                                <button className="avatar-btn">{video.uploader[0].toUpperCase()}</button>
                                <p id="video-uploader">{video.uploader}</p>
                            </div>
                            <p id="video-description">{video.description}</p>
                        </div>
                        </div>
                    <div className="recommended-videos-wrapper">
                        <RecommendedVideos videos={videos} date={date}/>
                    </div>
                </div>
                <div className="video-showpage-container-bottom">
                    <VideoComments comments={comments} processForm={this.props.createComment} videoId={video.id} commenterId={this.props.currentUser.id} fetchComments={this.props.fetchComments}/>
                </div>
            </div>
        )
    };
};