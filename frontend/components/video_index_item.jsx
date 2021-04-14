import React from 'react';
import {Link} from 'react-router-dom';

const Video_Index_Item = props => {
    const title = props.video.title.length > 27 ? props.video.title.slice(0, 27) + '...' : props.video.title;
    return (
       <li className="video-index-item">
           <Link to={`/videos/${props.video.id}`} id="video-thumbnail-link">
               <img id="video-thumbnail" src={props.video.thumbnailUrl}/>
           </Link>
           <div className="video-index-item-info">
                <button className="avatar-btn"><strong id="avatar-btn-text">{props.video.uploader[0].toUpperCase()}</strong></button>
                <h3 id="video-thumbnail-title">{title}</h3><br/>
           </div>
           <p id="video-uploader">{props.video.uploader}</p>
       </li>
    )
}

export default Video_Index_Item;