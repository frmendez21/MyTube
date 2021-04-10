import React from 'react';

export default class VideoShow extends React.Component {
    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.id)
    }

    render() {
        if(!this.props.video) return null;
        return (
            <div className="video-show-wrapper">
                <div className="video-content-wrapper">
                    <video className="video" src={this.props.video.videoUrl} controls></video>
                    <h3 className="video-title">{this.props.video.title}</h3>
                </div>
            </div>
        )
    };
};