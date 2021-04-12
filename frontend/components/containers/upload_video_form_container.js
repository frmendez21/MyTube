import {uploadVideo} from '../../actions/video_actions';
import {connect} from 'react-redux';
import UploadVideoForm from '../upload_video_form';

const MSTP = state => ({
    errors: state.errors.videos
});

const MDTP = dispatch => ({
    processForm: video => dispatch(uploadVideo(video))
});

export default connect(MSTP, MDTP)(UploadVideoForm)
