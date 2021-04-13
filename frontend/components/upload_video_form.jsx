import React from 'react';

export default class UploadVideoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '', 
            videoFile: null, 
            videoUrl: null,
            thumbnailFile: null,
            thumbnailUrl: null,
            uploading: false
        };
        this.handleDrag = this.handleDrag.bind(this);
        this.handleVideoDrop = this.handleVideoDrop.bind(this);
        this.handleThumbnailDrop = this.handleThumbnailDrop.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(key) {
        return e => this.setState({[key]: e.currentTarget.value})
    }
    
    handleVideoDrop(e) {
        e.preventDefault();
        this.setState({videoFile: e.dataTransfer.files[0]});
    }

    handleThumbnailDrop(e) {
        e.preventDefault();
        this.setState({thumbnailFile: e.dataTransfer.files[0]});
    }
    
    handleDrag(e) {
        e.preventDefault();
    };

    handleSubmit(e) {
        e.preventDefault();
        this.setState({uploading: true})
        let formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[thumbnail]', this.state.thumbnailFile);
        formData.append('video[file]', this.state.videoFile);
        this.props.processForm(formData)
            .then(res => {
                this.setState({uploading: false})
                this.props.history.push(`/users/${this.props.currentUser.id}`)
            })
    };

    render() {
        const {title, description, videoFile, thumbnailFile} = this.state;
        const {currentUser} = this.props;
        const videoDropZoneText = videoFile ? <p id="file-name">{videoFile.name}</p> : <p>Drag and drop video files to upload</p>;
        const thumbnailDropZoneText = thumbnailFile ? <p id="file-name">{thumbnailFile.name}</p> : <p>Drag and drop thumbnail</p>;
        if (this.state.uploading) {
            return (
                <div className="spinner-wrapper">
                    <img id="spinner" src={window.spinner} />
                    <figcaption id="spinner-text">Please wait while you're video uploads to MyTube!</figcaption>
                </div>
            )
        } else {
            return(
                <div className="upload-form-wrapper" >
                    <form className="upload-form" onSubmit={this.handleSubmit}>
                        <button className="avatar-btn" disabled>{currentUser.username[0].toUpperCase()}</button>
                        <h3 className="upload-form-header">Upload Videos</h3>
                        <div className="upload-title-input">
                            <input type="text" value={title} onChange={this.update('title')} required placeholder='Title'/>
                        </div>
                        <div className="upload-description-input">
                            <textarea value={description} onChange={this.update('description')}required placeholder='Description'></textarea>
                        </div>
                        <div className="drag-drop-inputs">
                            <div id="video-drop-zone" onDrop={this.handleVideoDrop} onDragOver={this.handleDrag} >
                                {videoDropZoneText}
                                <i className="fas fa-film"></i>
                            </div>
                            <div id="thumbnail-drop-zone" onDrop={this.handleThumbnailDrop} onDragOver={this.handleDrag}>
                               {thumbnailDropZoneText}
                                <i className="fas fa-image"></i>
                            </div>
                        </div>
                        <button className="submit-btn" type="submit">Submit</button>
                    </form>
                   
                </div>
            )
        }
    }
}