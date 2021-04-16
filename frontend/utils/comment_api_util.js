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

