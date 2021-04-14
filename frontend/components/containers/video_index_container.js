import {connect} from 'react-redux';
import {fetchVideos} from '../../actions/video_actions';
import VideoIndex from '../video_index';

const MSTP = state => ({
    videos: Object.values(state.entities.videos)
});

const MDTP = dispatch => ({
    fetchVideos: videos => dispatch(fetchVideos(videos))
});

export default connect(MSTP, MDTP)(VideoIndex);