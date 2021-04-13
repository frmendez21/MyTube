import React from 'react';
import {Link} from 'react-router-dom';
export default class AvatarDropdown extends React.Component {
  
    render (){
        const channelLink = window.location.hash !== `#/users/${this.props.currentUser.id}` ?  <Link to={`users/${this.props.currentUser.id}`}>Your channel</Link> : <a>Your channel</a>
        return (
            <ul className='avatar-dropdown'>
                <li className="avatar-list-item" key={'1'}>
                    {channelLink}
                </li>
                <li className="avatar-list-item" key={'2'} onClick={this.props.logout}>Sign Out</li>
                <li className="avatar-list-item" key={'3'}>Setings</li>
            </ul>
        );
    };
};

