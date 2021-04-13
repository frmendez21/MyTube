
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {closeModal} from '../../actions/modal_actions';
import {deleteVideo} from '../../actions/video_actions';
import EditVideoForm from '../edit_video_form';

const MSTP = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.id], 
    formType: 'delete'
});

const MDTP = dispatch => ({
    processForm:  videoId => dispatch(deleteVideo(videoId)),
    fetchVideo: video => dispatch(fetchVideo(video)), 
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(MSTP, MDTP)(EditVideoForm));