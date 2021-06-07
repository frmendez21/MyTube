import {connect} from 'react-redux';
import {fetchVideos} from '../../actions/video_actions';
import {fetchPopularVideos} from '../../actions/youtube_actions'
import VideoIndex from '../video_index';

const MSTP = state => ({
    videos: Object.values(state.entities.videos), 
    youtubeVideos: Object.values(state.entities.youtubeVideos)
});

const MDTP = dispatch => ({
    fetchVideos: videos => dispatch(fetchVideos(videos)), 
    fetchPopularVideos: () => dispatch(fetchPopularVideos())
});

export default connect(MSTP, MDTP)(VideoIndex);