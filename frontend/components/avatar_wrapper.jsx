import React, { useState } from 'react';
import AvatarDropdown from './avatar_dropdown';

const AvatarWrapper = props => {
    const [isDropDownOpen, toggleDropDown] = useState(false);

    if(isDropDownOpen) {
        document.addEventListener('mousedown', e => {
            if ((e.target.className !== 'avatar-list-item') && (e.path[2].className !== 'avatar-dropdown')) {
                toggleDropDown(false)
            }; 
        });
    };

    const {currentUser, login, logout} = props;

    const loggedInBtn = <button className="avatar-btn" onClick={() => toggleDropDown(true)}>
                            <strong id="avatar-btn-text">{currentUser.username[0].toUpperCase()}</strong>
                        </button>;
    const loggedOutBtn = <button className="loggedout-avatar-btn"onClick={login}>SIGN IN</button>;
    const dropdown = isDropDownOpen && currentUser ? <nav className="avatar-dropdown-wrapper"><AvatarDropdown logout={logout} currentUser={currentUser}/></nav> : null;


    return (
        <div className="avatar-wrapper">
            {currentUser && loggedInBtn }
            {!currentUser && loggedOutBtn}
            {dropdown}
        </div>
    );
};

export default AvatarWrapper;
