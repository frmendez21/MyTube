import React from 'react';
import Comment from './comment';

export default class VideoComments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {newBody: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    update(key) {
        return e => this.setState({[key]: e.currentTarget.value})
    };

    handleSubmit(e) {
        e.preventDefault();
        if(!this.props.currentUser) return this.props.openModal('login')
        this.clearInput(e)
        const comment = {
            body: this.state.newBody,
            video_id: this.props.videoId,
            commenter_id: this.props.commenterId
        }
        this.props.processForm(comment)
            .then(() => this.props.fetchComments(this.props.videoId))
    };

    clearInput(e) {
        e.preventDefault()
        this.setState({newBody: ""})
    };

    render () {
        const comments = this.props.comments.map((comment, idx) => {
            return (
               <Comment key={idx} comment={comment} currentUser={this.props.currentUser} deleteComment={this.props.deleteComment} updateComment={this.props.updateComment}/>
            );
        });
        return(
            <div className="comments-section">
                <div className="comments-section-head">
                    <h5 id="comment-count">{this.props.comments.length} Comments</h5>
                    <form className="create-comment-form" onSubmit={this.handleSubmit}>
                        <textarea onChange={this.update('newBody')} value={this.state.newBody}placeholder="Add a public comment..."></textarea>
                        <div className="comment-form-btns">
                            <button id="comment-cancel" onClick={this.clearInput}>CANCEL</button>
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
};