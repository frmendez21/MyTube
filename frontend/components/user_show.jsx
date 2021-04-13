import React from 'react';
import UserVideos from './user_videos';

export default class UserShow extends React.Component {
    componentDidMount() {
        this.props.fetchVideos({userId: this.props.match.params.id})
    }

    render() {
        const {currentUser, userVideos} = this.props;
        const videos = userVideos.map((vid, idx) => (
            <UserVideos key={idx} vid={vid} edit={this.props.edit} delete={this.props.delete}/>
        ));
        return (
            <div className="show-page">
                <div className="show-page-head"> 
                    <button className="avatar-btn"><strong id="avatar-btn-text">{currentUser.username[0].toUpperCase()}</strong></button>
                    <aside id="show-page-username">{currentUser.username}</aside>
                    <h3 id="upload-head">Uploads</h3>
                </div>
                <div className="user-videos">
                    <ul className="user-videos-container">
                        {videos}
                    </ul>
                </div>
            </div>
        )
    }
}