import { useState } from 'react'

const VideoCommentsLogic = props => {
    const[newBody, setBody] = useState('');

    const update = e => setBody(e.currentTarget.value)
    const clear = e => {
        e.preventDefault();
        setBody('');
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(!props.currentUser) return props.openModal('login')
        if(!newBody.length) return;
        
        const comment = {
            body: newBody,
            video_id: props.videoId,
            commenter_id: props.commenterId
        };
        setBody('');

        props.processForm(comment)
    };
    
    return {newBody, setBody, handleSubmit, update, clear};
};

export default VideoCommentsLogic;