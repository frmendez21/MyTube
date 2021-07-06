import React from 'react'; 
import CommentLogic from './comment_logic';

const Comment = props => {
    

    const {currentUser, comment} = props;
    const {handleClick, handleSubmit, showEditDel, showOption, showDel, showEdit, setBody, toggleEditDel} = CommentLogic(props);

    const editDelMenu = <i onClick={() => handleClick('open')} id="menu" className="fas fa-ellipsis-v"></i>;

    const delPrompt = <div className="prompt-container" onClick={() => handleClick('close')}>
                        <div className="del-prompt" onClick={e => e.stopPropagation()}>
                            <h3>Delete comment</h3>
                            <p>Delete your comment permanently?</p>
                            <button onClick={() => handleClick('close')} id="cancel">CANCEL</button>
                            <button onClick={() => handleClick('delete')} id="delete">DELETE</button>
                        </div>
                      </div>;

        const editForm = <div className="edit-form-container">
            <form className="edit-comment-form" onSubmit={handleSubmit}>
                <input type="text" onChange={e => setBody(e.currentTarget.value)} placeholder={comment.body} autoFocus/>
                <div className="edit-btns">
                    <button id="cancel" type="button" onClick={() => handleClick('close')}>CANCEL</button>
                    <button id="save" type="submit">SAVE</button>
                </div>
            </form>
        </div>;

    const options = <div className="comment-options-container">
                        <i className="fas fa-trash" id="del" onClick={() => handleClick('del')}><p>Delete</p></i>
                        <i className="fas fa-pencil-alt" id="edit" onClick={() => handleClick('edit')}><p>Edit</p></i> 
                    </div>;
   

    const timeStamp = new Date(comment.dateCreated).toString().slice(4, 15);
    const button = <button className="avatar-btn">{comment.commenter[0].toUpperCase()}</button>;

    return(
        <li className="comment-list-item" onMouseEnter={() => currentUser.id === comment.commenterId ? toggleEditDel(true) : null } onMouseLeave={() => currentUser.id === comment.commenterId ? toggleEditDel(false) : null}>
            <div id="comment-top">
                {comment.commenter && button}
                <p id="commenter">{comment.commenter}</p>
                <p id="timestamp">{timeStamp}</p>
            </div>
            
            {showEdit && editForm}
            {!showEdit && <p id="comment-body">{comment.body}</p> }
            {showEditDel && editDelMenu}
            {showOption && options}
            {showDel && delPrompt}
        </li>
    );
};

export default Comment;
