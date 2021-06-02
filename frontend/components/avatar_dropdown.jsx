import React from 'react';
import {Link} from 'react-router-dom';
export default class AvatarDropdown extends React.Component {

    render (){
        return (
            <ul className='avatar-dropdown'>
                <li className="avatar-list-item" key={'0'}>
                    <button className="avatar-btn"><strong id="avatar-btn-text">{this.props.currentUser.username[0].toUpperCase()}</strong></button>
                    <div className="current-user-info">
                        <p>{this.props.currentUser.username}</p>
                        <p>{this.props.currentUser.email}</p>
                    </div>

                </li>
                <li className="avatar-list-item" key={'1'}>
                    <Link to={`/users/${this.props.currentUser.id}`}><i className="fas fa-user"></i>Your channel</Link>
                </li>
                <li className="avatar-list-item" key={'2'} onClick={this.props.logout}>
                    <i className="fas fa-sign-out-alt"></i>
                    <p>Sign Out</p>
                </li>
                <li className="avatar-list-item" key={'3'}>
                   <a href="https://angel.co/u/frank-mendez-1" target="_blank"><i className="fab fa-angellist"></i>AngelList</a>
                </li>
                <li className="avatar-list-item" key={'4'}>
                      <a href="https://github.com/frmendez21/MyTube" target="_blank"><i className="fab fa-github"></i>Github</a>
                </li>
                <li className="avatar-list-item" key={'5'}>
                  <a href="https://www.linkedin.com/in/frank-mendez-96025a1b3/" target="_blank"><i className="fab fa-linkedin"></i>Linkedin</a>
                </li>
            </ul>
        );
    };
};

