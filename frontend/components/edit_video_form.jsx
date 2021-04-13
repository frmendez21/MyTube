import React from 'react';

export default class EditVideoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.close = this.close.bind(this);
    }

    update(key) {
        return e => this.setState({[key]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.formType === 'edit') {
            const {video} = this.props;
            const {title, description} = this.state;
            const newVideo = {
                id: video.id, 
                title: title.length === 0 ? video.title : title,
                description: description.length === 0 ? video.description : description
            };
            this.props.processForm(newVideo)
                .then(this.close(e))
        } else {
            if (e.target.value === 'yes') {
               this.props.processForm(this.props.video.id)
                .then(this.close(e))
            } else {
                this.close(e)
            }
        }
    };

    close(e) {
        e.preventDefault()
        this.props.closeModal()
        this.props.history.push(`/users/${this.props.video.uploaderId}`)
    };

    componentDidMount() {
       this.props.video ? this.props.fetchVideo(this.props.match.params.id) : null;
    };

    render() {
        if(!this.props.video) return null;
        if (this.props.formType === 'edit') {
            return(
                <div className="edit-video-container">
                    <form className="edit-video-form" onSubmit={this.handleSubmit}>
                        <aside className="close-x" onClick={this.close}>X</aside>
                        <div id="edit-video-title">
                            <input type="text" onChange={this.update('title')} placeholder={this.props.video.title} />
                        </div>
                        <div id="edit-video-description">
                            <textarea onChange={this.update('description')} placeholder={this.props.video.description}></textarea>
                        </div>
                        <button id="edit-submit-btn" type="submit">Submit</button>
                    </form>
                </div>
            )
        } else {
            return (
            <form className="delete-video-form">
                <h3 id="delete-video-head">Are you sure you want to Delete this video?</h3>
                <img id="user-video-thumbnail" src={this.props.video.thumbnailUrl} />
                <p id="user-video-title">{this.props.video.title}</p>
                <br/>
                <button id="delete-submit-btn" type="submit" value="yes" onClick={this.handleSubmit}>Yes</button>
                <button id="delete-submit-btn" type="submit" value="no" onClick={this.handleSubmit}>No</button>
            </form>
            )
        }
    }
}


