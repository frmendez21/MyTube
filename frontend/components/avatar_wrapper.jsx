import React from 'react';
import AvatarDropdown from './avatar_dropdown';

export default class AvatarWrapper extends React.Component {
    constructor(props){
        super(props);
        this.state = { isDropdownOpen: false}
        this.openDropdown = this.openDropdown.bind(this)
        this.closeDropdown = this.closeDropdown.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this);
    };

    openDropdown() {
       document.addEventListener('mousedown', this.handleClickOutside)
       this.setState({isDropdownOpen: true})
    };

    closeDropdown() {
        document.removeEventListener('mousedown', this.handleClickOutside)
        this.setState({isDropdownOpen: false})
    };
    
    handleClickOutside(e) {
      if ((e.target.className !== 'avatar-list-item') && (e.path[2].className !== 'avatar-dropdown')) {
          this.closeDropdown();
      } 
    }

  

    render() {
        const {currentUser, login, logout} = this.props;
        const {isDropdownOpen} = this.state;

        let button = currentUser ? <button className="avatar-btn" onClick={this.openDropdown}><strong id="avatar-btn-text">{currentUser.username[0].toUpperCase()}</strong></button> : <button className="loggedout-avatar-btn"onClick={login}>SIGN IN</button>;

        let dropdown = isDropdownOpen && currentUser ? <nav className="avatar-dropdown-wrapper"><AvatarDropdown logout={logout} currentUser={currentUser}/></nav> : null;
        return(
            <div className="avatar-wrapper">
                {button}
                {dropdown}
            </div>
        )
    }
};