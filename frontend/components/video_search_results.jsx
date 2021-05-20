import React from 'react';
import { Link } from 'react-router-dom';

export default class VideoSearchResults extends React.Component{
    
    render() {
        const resultList = this.props.results.map((vid, idx) => (
            <li className="list-item" key={idx}>
                <Link to={`/videos/${vid.id}`}>
                    <img className="search-image"src={vid.thumbnailUrl} alt="" width="300" height="200"/>
                </Link>
                <div className="video-info">
                    <div className="info-top">
                        <p className="video-title">{vid.title}</p>
                        <p className="video-date">{vid.uploadedDate.toString().slice(0, 10)}</p>
                    </div>
                    <div className="info-mid">
                        <button className="avatar-btn">{vid.uploader[0].toUpperCase()}</button>
                        <p className="uploader">{vid.uploader}</p>
                    </div>
                    <p className="video-description">{vid.description}</p>
                </div>
            </li>
        ))
        return(
            <div className="search-results-container">
                <ul className="search-results-list">
                    {resultList}
                </ul>
            </div>
        )
    }
}