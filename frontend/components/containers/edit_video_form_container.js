import {connect} from 'react-redux';
import {editVideo, fetchVideo} from '../../actions/video_actions';
import {closeModal} from '../../actions/modal_actions'
import EditVideoForm from '../edit_video_form';
import {withRouter} from 'react-router-dom';

const MSTP = (state, ownProps) => ({ 
    video: state.entities.videos[ownProps.match.params.id]
});

const MDTP = dispatch => ({
    processForm: video => dispatch(editVideo(video)),
    fetchVideo: video => dispatch(fetchVideo(video)), 
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(MSTP, MDTP)(EditVideoForm));
