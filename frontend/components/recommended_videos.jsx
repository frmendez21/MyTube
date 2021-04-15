import React from 'react';
import {Link} from 'react-router-dom';

const RecommendedVideos = props => {
    
    const videos = props.videos.map((video, idx) => {
        const title = video.title.length > 27 ? video.title.slice(0, 27) + '...' : video.title;
        return (
            <li key={idx} className="recommended-video-item">
                <Link to={`/videos/${video.id}`} id="recommended-video-link">
                    <img id="recommended-video-thumbnail" src={video.thumbnailUrl}/>
                    <div className="video-info">
                        <h4 id="video-title">{title}</h4>
                        <p id="video-uploader">{video.uploader}</p>
                        <p id="video-uploaded-date">{props.date}</p>
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

export default RecommendedVideos;