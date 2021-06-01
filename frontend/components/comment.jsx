import React from 'react';

export default class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showEditDelMenu: false, showOptions: false, showDelPrompt: false, showEditForm: false, body: ''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleHover(commenterId, event) {
        if(this.state.showEditForm) return null;
        if(commenterId === this.props.currentUser.id) {
            event === 'enter' ? this.setState({showEditDelMenu: true}) : this.setState({showEditDelMenu: false})
        } else {
            return null;
        }
    }

    handleClick(event) {
        if(event === 'open') {
            !this.state.showOptions ? this.setState({showOptions: true}) : this.setState({showOptions: false})
        } else if (event === 'del') {
            this.setState({showOptions: false, showDelPrompt: true })
        } else if (event === 'close') {
            this.setState({showDelPrompt: false, showEditForm: false, showOptions: false})
        } else if (event === 'delete') {
            this.props.deleteComment(this.props.comment)
            this.setState({showDelPrompt: false})
        } else if (event === 'edit') {
            let menu = document.getElementById('menu');
            menu.classList.replace('fas', 'hidden')
            this.setState({showEditForm: true, showOptions: false})
        }
    }

    update(key) {
        return e => this.setState({[key]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        if(this.state.body.length === 0) return null;
        let comment = this.props.comment; 
        comment.body = this.state.body;
        this.props.updateComment(comment)
            .then(() => this.handleClick('close'))
    };

    render() {
        const {comment} = this.props

        const editDelMenu = this.state.showEditDelMenu ? <i onClick={() => this.handleClick('open')} id="menu" className="fas fa-ellipsis-v"></i> : null

        const delPrompt = this.state.showDelPrompt ? 
        <div className="prompt-container" onClick={() => this.handleClick('close')}>
            <div className="del-prompt" onClick={e => e.stopPropagation()}>
                <h3>Delete comment</h3>
                <p>Delete your comment permanently?</p>
                <button onClick={() => this.handleClick('close')} id="cancel">CANCEL</button>
                <button onClick={() => this.handleClick('delete')} id="delete">DELETE</button>
            </div>
        </div>
         : null;

         const editForm = this.state.showEditForm ? 
            <div className="edit-form-container">
                <form className="edit-comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.update('body')} placeholder={this.props.comment.body} autoFocus/>
                    <div className="edit-btns">
                        <button id="cancel" onClick={() => this.handleClick('close')}>CANCEL</button>
                        <button id="save" type="submit">SAVE</button>
                    </div>
                </form>
            </div> : <p id="comment-body">{comment.body}</p>;

        const options = this.state.showOptions ? 
        <div className="comment-options-container">
           <i className="fas fa-trash" id="del" onClick={() => this.handleClick('del')}><p>Delete</p></i>
           <i className="fas fa-pencil-alt" id="edit" onClick={() => this.handleClick('edit')}><p>Edit</p></i> 
        </div>
         : null;

        const timeStamp = new Date(comment.dateCreated).toString().slice(4, 15);
        const button = comment.commenter ?  <button className="avatar-btn">{comment.commenter[0].toUpperCase()}</button> : null;

        
        return(
             <li className="comment-list-item" onMouseEnter={() => this.handleHover(comment.commenterId, 'enter')} onMouseLeave={() => this.handleHover(comment.commenterId, 'leave')}>
                    <div id="comment-top">
                        {button}
                        <p id="commenter">{comment.commenter}</p>
                        <p id="timestamp">{timeStamp}</p>
                    </div>
                    
                    {editForm}
                    {editDelMenu}
                    {options}
                    {delPrompt}
                </li>
        )
    }
}