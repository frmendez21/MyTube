export const fetchComments = videoId => (
    $.ajax({
        url: `api/videos/${videoId}/comments`, 
        method: 'GET'
    })
);

export const createComment = comment => (
    $.ajax({
        url: `api/videos/${comment.videoId}/comments`, 
        method: 'POST', 
        data: {comment}
    })
);

export const deleteComment = comment => (
    $.ajax({
        url: `api/videos/${comment.videoId}/comments/${comment.id}`, 
        method: 'DELETE'
    })
);

export const updateComment = comment => (
    $.ajax({
        url: `api/videos/${comment.videoId}/comments/${comment.id}`, 
        method: 'PATCH', 
        data: { 'body': comment.body}
    })
);

