import AvatarWrapper from '../avatar_wrapper';
import {openModal} from '../../actions/modal_actions';
import {logout} from '../../actions/session_actions';
import {connect} from 'react-redux';

const MSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const MDTP = dispatch => ({
    login: () => dispatch(openModal('login')), 
    logout: () => dispatch(logout())
});

export default connect(MSTP, MDTP)(AvatarWrapper);