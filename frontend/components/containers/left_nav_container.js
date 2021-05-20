import LeftNav from '../left_nav';
import {connect} from 'react-redux';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

export default connect(mSTP, null)(LeftNav);