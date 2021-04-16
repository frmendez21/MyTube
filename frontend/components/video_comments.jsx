import React from 'react';

export default class VideoComments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {newBody: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInput = this.clearInput.bind(this);
    };

    update(key) {
        return e => this.setState({[key]: e.currentTarget.value})
    };

    handleSubmit(e) {
        e.preventDefault();
        this.clearInput(e)
        const comment = {
            body: this.state.newBody,
            video_id: this.props.video.id,
            commenter_id: this.props.commenterId
        }
        this.props.processForm(comment)
            .then(() => this.props.fetchComments(this.props.video.id))
    };

    clearInput(e) {
        e.preventDefault()
        this.setState({newBody: ""})
    };

    componentDidMount() {
        this.props.fetchComments(this.props.video.id)
    }

    render () {
        if (!this.props.comments) return null;
        const comments = this.props.comments.map((comment, idx) => {
            const timeStamp = new Date(comment.dateCreated).toString().slice(4, 15);
            const button = comment.commenter ?  <button className="avatar-btn">{comment.commenter[0].toUpperCase()}</button> : null;
            return (
                <li key={idx} className="comment-list-item">
                    <div id="comment-top">
                        {button}
                        <p id="commenter">{comment.commenter}</p>
                        <p id="timestamp">{timeStamp}</p>
                    </div>
                    <p id="comment-body">{comment.body}</p>
                </li>
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
                    {comments}
                </ul>
            </div>
        );
    };
};