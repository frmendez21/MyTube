import {searchVideos} from '../../actions/video_actions';
import {connect} from 'react-redux'
import SearchBar from '../search_bar';

const mSTP = state => ({
    results: state.entities.search.videos
});

const mDTP = dispatch => ({
    searchVideos: query => dispatch(searchVideos(query))
});

export default connect(mSTP, mDTP)(SearchBar)