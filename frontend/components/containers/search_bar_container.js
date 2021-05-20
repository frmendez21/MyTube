import {searchVideos} from '../../actions/video_actions';
import {connect} from 'react-redux'
import SearchBar from '../search_bar';

const mSTP = state => ({
    results: Object.values(state.entities.search)
});

const mDTP = dispatch => ({
    searchVideos: query => dispatch(searchVideos(query))
});

export default connect(mSTP, mDTP)(SearchBar)