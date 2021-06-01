import {fetchComments, createComment, deleteComment, updateComment} from '../../actions/comment_actions';
import VideoComments from '../video_comments';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {openModal} from '../../actions/modal_actions';

const MSTP = (state, ownProps) => ({
    comments: ownProps.comments,
    videoId: ownProps.videoId,
    currentUser: state.entities.users[state.session.id], 
    video: state.entities.videos[ownProps.match.params.id]
});

const MDTP = dispatch => ({
    fetchComments: videoId => dispatch(fetchComments(videoId)),
    deleteComment: comment => dispatch(deleteComment(comment)),
    processForm: comment => dispatch(createComment(comment)), 
    updateComment: comment => dispatch(updateComment(comment)),
    openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(MSTP, MDTP)(VideoComments));