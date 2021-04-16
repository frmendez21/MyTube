import {fetchComments, createComment} from '../../actions/comment_actions';
import VideoComments from '../video_comments';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

const MSTP = (state, ownProps) => ({
    comments: Object.values(state.entities.comments),
    currentUser: state.entities.users[state.session.id], 
    video: state.entities.videos[ownProps.match.params.id]
});

const MDTP = dispatch => ({
    fetchComments: videoId => dispatch(fetchComments(videoId)),
    processForm: comment => dispatch(createComment(comment))
});

export default withRouter(connect(MSTP, MDTP)(VideoComments));