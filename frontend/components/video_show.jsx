import React from 'react';
import RecommendedVideos from './recommended_videos';
import VideoCommentsContainer from './containers/video_comments_container';
import {withRouter} from 'react-router-dom';
class VideoShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {likes: 0, dislikes: 0, alreadyLiked: false, likeId: null, alreadyDisliked: false}
    }

    handleClick(type) {
        let like = { isLike: true, likerId: this.props.currentUser.id, videoId: this.props.match.params.id }
        let {likes, dislikes, alreadyLiked, alreadyDisliked, likeId} = this.state;
        
        if(type === 'like' && !alreadyLiked && !alreadyDisliked) {
            this.props.createLike(like)
                .then(() => this.setState({likes: likes + 1, alreadyLiked: true}))
        } else if(type === 'dislike' && alreadyLiked) {
            like['id'] = likeId
            this.props.disLike(like)
                .then(() => this.setState({dislikes: dislikes + 1, likes: likes - 1, alreadyDisliked: true, alreadyLiked: false}))
        } else if(type === 'like' && alreadyDisliked) {
            like['id'] = likeId 
            this.props.reLike(like)
                .then(() => this.setState({dislikes: dislikes - 1, likes: likes + 1, alreadyDisliked: false, alreadyLiked: true}))
        } else if(type === 'like' && alreadyLiked) {
            like['id'] = likeId;
            this.props.deleteLike(like)
                .then(() => this.setState({likes: likes - 1, alreadyDisliked: false, alreadyLiked: false}))
        } else if (type === 'dislike' && !alreadyDisliked && !alreadyLiked){
            like.isLike = false;
            this.props.createLike(like)
                .then(() => this.setState({dislikes: dislikes + 1, alreadyDisliked: true}))
        } else if(type === 'dislike' && alreadyDisliked) {
            like['id'] = likeId; 
            this.props.deleteLike(like)
                .then(() => this.setState({dislikes: dislikes - 1, alreadyDisliked: false, alreadyLiked: false}))
        }
    }

    componentDidMount() {
        this.props.fetchVideos()
        this.props.fetchComments(this.props.match.params.id)
        this.props.fetchVideo(this.props.match.params.id)
            .then((res) => {
                this.setState({likes: res.video.likes.length, dislikes: res.video.dislikes.length})
                this.props.currentUser.userLikes.forEach(like => {
                    if((like.videoId.toString() === this.props.match.params.id) && like.isLike) {
                        this.setState({likeId: like.id, alreadyLiked: true})
                    } else if ((like.videoId.toString() === this.props.match.params.id) && !like.isLike){
                        this.setState({likeId: like.id, alreadyDisliked: true})
                    }
                })
            })
    }


    render() {
        const {video, videos, comments} = this.props
        if(!video) return null;

        const date = new Date(video.uploadedDate).toString().slice(4, 15);
        const {likes, dislikes} = this.state;
        const likeButton = !this.state.alreadyLiked ? 
            <div className="like-container">
                <i id="up" className="fas fa-thumbs-up" onClick={() => this.handleClick('like')}></i>
                <p id="like-count">{likes}</p>
            </div> : 
            <div className="like-container">
                <i id="up-blue" className="fas fa-thumbs-up" onClick={() => this.handleClick('like')}></i>
                <p id="like-count">{likes}</p>
            </div>;

        const disLikeButton = !this.state.alreadyDisliked ? 
            <div className="dislike-container">
                <i id="down" className="fas fa-thumbs-down" onClick={() => this.handleClick('dislike')}></i>
                <p id="dislike-count">{dislikes}</p>
            </div> : 
            <div className="dislike-container">
                <i id="down-blue" className="fas fa-thumbs-down" onClick={() => this.handleClick('dislike')}></i>
                <p id="dislike-count">{dislikes}</p>
            </div>;

        return (
            <div className="video-show-content">
                <div className="video-showpage-container-top">
                    <div className="video-show-wrapper">
                        <video className="video" src={video.videoUrl} controls></video>
                        <div className="video-info-wrapper">
                            <div className="video-title">
                                <h3>{video.title}</h3>
                                <p>{date}</p>
                                {disLikeButton}
                                {likeButton}
                            </div>
                            <div className="video-uploader-info">
                                <button className="avatar-btn">{video.uploader[0].toUpperCase()}</button>
                                <p id="video-uploader">{video.uploader}</p>
                            </div>
                            <p id="video-description">{video.description}</p>
                            
                        </div>
                    </div>
                    <div className="recommended-videos-wrapper">
                        <RecommendedVideos videos={videos} date={date} fetchComments={this.props.fetchComments} fetchLikes={this.props.fetchLikes}/>
                    </div>
                </div>
                <div className="video-showpage-container-bottom">
                    <VideoCommentsContainer comments={comments} videoId={video.id} commenterId={this.props.currentUser.id} />
                </div>
            </div>
        )
    };
};

export default withRouter(VideoShow)