import {connect} from 'react-redux';
import {fetchVideo, fetchVideos} from '../../actions/video_actions';
import VideoShow from '../video_show';

const MSTP = (store, ownProps) => ({
    video: store.entities.videos[ownProps.match.params.id], 
    videos: Object.values(store.entities.videos).slice(0, 5),
}) 

const MDTP = dispatch => ({
    fetchVideo: video => dispatch(fetchVideo(video)), 
    fetchVideos: videos => dispatch(fetchVideos(videos))
});

export default connect(MSTP, MDTP)(VideoShow);