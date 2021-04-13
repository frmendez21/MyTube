import React from 'react';

export default class UploadVideoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '', 
            videoFile: null, 
            thumbnailFile: null
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
        let $thumbDropZone = $("#thumbnail-drop-zone");
        let $videoDropZone = $("#video-drop-zone")
        $thumbDropZone.removeClass("hidden")
        $videoDropZone.addClass("hidden")
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
        let formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[thumbnail]', this.state.thumbnailFile);
        formData.append('video[file]', this.state.videoFile);
        this.props.processForm(formData);
    };

    componentDidMount() {
        let $thumbDropZone = $("#thumbnail-drop-zone");
        $thumbDropZone.addClass("hidden")
    };

    render() {
        const {title, description, videoFile, thumbnailFile} = this.state;
        const {currentUser} = this.props;
        return(
            <div className="upload-form-wrapper" >
                <form className="upload-form" onSubmit={this.handleSubmit}>
                    <button className="avatar-btn" disabled><strong id="avatar-btn-text">{currentUser.username[0].toUpperCase()}</strong></button>
                    <h3 className="upload-form-header">Upload Videos</h3>
                    <div className="upload-title-input">
                        <input type="text" value={title} onChange={this.update('title')} required placeholder='Title'/>
                    </div>
                    <div className="upload-description-input">
                        <textarea value={description} onChange={this.update('description')}required placeholder='Description'></textarea>
                    </div>
                    <div className="upload-video-input">
                        <div id="video-drop-zone" onDrop={this.handleVideoDrop} onDragOver={this.handleDrag}>
                            <p>Drag and drop video files to upload</p>
                        </div>
                    </div>
                    <div className="upload-thumbnail-input">
                        <div id="thumbnail-drop-zone" onDrop={this.handleThumbnailDrop} onDragOver={this.handleDrag}>
                            <p>Drag and drop thumbnail</p>
                        </div>
                    </div>
                    <button className="submit-btn" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}