import React from 'react';
import {Link} from 'react-router-dom';

const Video_Index_Item = props => {
    return (
       <li className="video-index-item">
           <Link to={`/videos/${props.video.id}`} id="video-thumbnail-link">
               <img id="video-thumbnail" src={props.video.thumbnailUrl}/>
               <h3 id="video-thumbnail-title">{props.video.title}</h3>
           </Link>
       </li>
    )
}

export default Video_Index_Item;