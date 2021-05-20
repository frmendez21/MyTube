import {connect} from 'react-redux'
import VideoSearchResults from '../video_search_results';

const mSTP = state => ({
    results: Object.values(state.entities.search)
});

export default connect(mSTP, null)(VideoSearchResults)