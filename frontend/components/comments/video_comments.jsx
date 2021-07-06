import Comment from './comment'
import VideoCommentsLogic from './video_comments_logic';
import React from 'react';

const VideoComments = props => {

    const {newBody, handleSubmit, update, clear} = VideoCommentsLogic(props);

    const comments = props.comments.map((comment, idx) =>  (
            <Comment key={idx} comment={comment} currentUser={props.currentUser} deleteComment={props.deleteComment} updateComment={props.updateComment}/>
        ));

    return(
        <div className="comments-section">
            <div className="comments-section-head">
                <h5 id="comment-count">{props.comments.length} Comments</h5>
                <form className="create-comment-form" onSubmit={handleSubmit}>
                    <textarea onChange={update} value={newBody} placeholder="Add a public comment..."></textarea>
                    <div className="comment-form-btns">
                        <button id="comment-cancel" type="button" onClick={clear}>CANCEL</button>
                        <button id="comment-submit" type="submit">COMMENT</button>
                    </div>
                </form>
            </div>
            <ul className="comment-list">
                {comments.reverse()}
            </ul>
        </div>
    );
};

export default VideoComments;
