import React from 'react';
import {Link} from 'react-router-dom';
export default class UserVideos extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const {vid} = this.props;
        return (
            <li className="user-video-list-item">
                <Link className="user-video-link" to={`/videos/${vid.id}`}>
                    <img id="user-video-thumbnail" src={vid.thumbnailUrl} alt=""/>
                </Link>
                <strong id="user-video-title">{vid.title}</strong>
                <aside id="user-video-upload-date">
                    Uploaded on: {vid.uploadedDate.toString().slice(0, 10)}
                </aside>
                <aside id="user-video-description">
                    Description: {vid.description}
                </aside>
                <Link to={`videos/edit/${vid.id}`} ><button id="edit-btn" onClick={this.props.edit}>Edit</button></Link>
                <button id="delete-btn" onClick={() => this.props.delete(vid.id)}>Delete</button>
        </li>
        )
    }
}

