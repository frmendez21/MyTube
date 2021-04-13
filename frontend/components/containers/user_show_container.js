import UserShow from '../user_show';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchVideos, deleteVideo} from '../../actions/video_actions';
import {openModal, closeModal} from '../../actions/modal_actions';

const MSTP = state => ({
    currentUser: state.entities.users[state.session.id], 
    userVideos: Object.values(state.entities.videos)
});

const MDTP = dispatch => ({
    fetchVideos: userId => dispatch(fetchVideos(userId)),
    edit: () => dispatch(openModal('edit')), 
    close: () => dispatch(closeModal()),
    delete: videoId => dispatch(deleteVideo(videoId))
});


export default withRouter(connect(MSTP, MDTP)(UserShow));