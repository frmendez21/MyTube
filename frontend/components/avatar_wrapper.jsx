import React from 'react';
import AvatarDropdown from './avatar_dropdown';

export default class AvatarWrapper extends React.Component {
    constructor(props){
        super(props);
        this.state = { isDropdownOpen: false}
        this.openDropdown = this.openDropdown.bind(this)
        this.closeDropdown = this.closeDropdown.bind(this)
    };

    openDropdown() {
       this.setState({isDropdownOpen: true})
    };
    closeDropdown() {
        this.setState({isDropdownOpen: false})
    };

    render() {
        const {currentUser, login} = this.props;
        const {isDropdownOpen} = this.state;

        let button = currentUser ? <button className="avatar-btn" onClick={this.openDropdown}><strong id="avatar-btn-text">{currentUser.username[0].toUpperCase()}</strong></button> : <button className="loggedout-avatar-btn"onClick={login}>SIGN IN</button>;

        let dropdown = isDropdownOpen && currentUser ? <div className="avatar-dropdown-wrapper" onClick={this.closeDropdown} onMouseLeave={this.closeDropdown}><AvatarDropdown logout={this.props.logout}/></div> : null;
        return(
            <div className="avatar-wrapper">
                {button}
                {dropdown}
            </div>
        )
    }
};