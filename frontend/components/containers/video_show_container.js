import {connect} from 'react-redux';
import {fetchVideo, fetchVideos} from '../../actions/video_actions';
import {fetchComments, createComment} from '../../actions/comment_actions';
import {fetchLikes, createLike, disLike, reLike, deleteLike} from '../../actions/like_actions'
import VideoShow from '../video_show';
const MSTP = (store, ownProps) => ({
    video: store.entities.videos[ownProps.match.params.id], 
    videos: Object.values(store.entities.videos).slice(0, 5),
    comments: Object.values(store.entities.comments), 
    likes: Object.values(store.entities.likes),
    currentUser: store.entities.users[store.session.id]
}) 

const MDTP = dispatch => ({
    fetchVideo: video => dispatch(fetchVideo(video)), 
    fetchVideos: videos => dispatch(fetchVideos(videos)), 
    fetchComments: videoId => dispatch(fetchComments(videoId)), 
    createComment: comment => dispatch(createComment(comment)), 
    fetchLikes: videoId => dispatch(fetchLikes(videoId)), 
    createLike: like => dispatch(createLike(like)), 
    disLike: like => dispatch(disLike(like)), 
    reLike: dislike => dispatch(reLike(dislike)), 
    deleteLike: like => dispatch(deleteLike(like))
});

export default connect(MSTP, MDTP)(VideoShow);