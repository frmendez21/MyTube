import React from 'react';

export default class AvatarDropdown extends React.Component {
    render (){
        return (
            <ul className='avatar-dropdown'>
                <button>Your channel</button>
                <button onClick={this.props.logout}>Sign Out</button>
                <button>Setings</button>
            </ul>
        );
    };
};

