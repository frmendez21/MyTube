import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class RecommendedVideos extends React.Component {
    handleClick(videoId) {
        this.props.fetchComments(videoId)
            .then(() => window.location.reload())
    }
    render() {
        const videos = this.props.videos.map((video, idx) => {
            const title = video.title.length > 27 ? video.title.slice(0, 27) + '...' : video.title;
            return (
                <li key={idx} className="recommended-video-item" onClick={() => this.handleClick(video.id)}>
                    <Link to={`/videos/${video.id}`} id="recommended-video-link">
                        <img id="recommended-video-thumbnail" src={video.thumbnailUrl}/>
                        <div className="video-info">
                            <h4 id="video-title">{title}</h4>
                            <p id="video-uploader">{video.uploader}</p>
                            <p id="video-uploaded-date">{this.props.date}</p>
                        </div>
                    </Link>
                </li>
            )
        });
        return (
           <ul className="recommended-videos">
               {videos}
           </ul>
        )
    }
}
export default withRouter(RecommendedVideos)