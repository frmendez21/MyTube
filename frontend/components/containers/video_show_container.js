import {connect} from 'react-redux';
import {fetchVideo} from '../../actions/video_actions';
import VideoShow from '../video_show';

const MSTP = (store, ownProps) => ({
    video: store.entities.videos[ownProps.match.params.id]
}) 

const MDTP = dispatch => ({
    fetchVideo: video => dispatch(fetchVideo(video))
});

export default connect(MSTP, MDTP)(VideoShow);