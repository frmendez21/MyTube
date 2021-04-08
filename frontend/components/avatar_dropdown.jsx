import React from 'react';

export default class AvatarDropdown extends React.Component {
    render (){
        return (
            <ul className='avatar-dropdown'>
                <li className="avatar-list-item" key={'1'}>Your channel</li>
                <li className="avatar-list-item" key={'2'} onClick={this.props.logout}>Sign Out</li>
                <li className="avatar-list-item" key={'3'}>Setings</li>
            </ul>
        );
    };
};

