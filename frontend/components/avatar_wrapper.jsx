import React from 'react';
import AvatarDropdown from './avatar_dropdown';

export default class AvatarWrapper extends React.Component {
    constructor(props){
        super(props);
        this.state = { isDropdownOpen: false}
    };

    toggleDropdown() {
        if(!this.state.isDropdownOpen) {
            this.setState({
                isDropdownOpen: true
            });
        } else {
            this.setState({
                isDropdownOpen: false
            });
        };
    };

    render() {
        const {currentUser, login} = this.props;
        const {isDropdownOpen} = this.state;

        let button = currentUser ? <button onClick={() => this.toggleDropdown()}>{currentUser.username[0]}</button> : <button onClick={login}>SIGN IN</button>;

        let dropdown = isDropdownOpen && currentUser ? <AvatarDropdown logout={this.props.logout}/> : null;
        return(
            <div>
                {button}
                {dropdown}
            </div>
        )
    }
};