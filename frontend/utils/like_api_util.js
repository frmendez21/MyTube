export const fetchLikes = videoId => (
    $.ajax({
        url: `api/videos/${videoId}/likes`, 
        method: 'GET'
    })
);

export const createLike = like => (
    $.ajax({
        url: `api/videos/${like.videoId}/likes`, 
        method: 'POST', 
        data: {
            like: {
                'is_like?': like.isLike, 
                'liker_id': like.likerId, 
                'video_id': like.videoId
            }
        }
    })
);

export const updateLike = like => (
    $.ajax({
        url: `api/videos/${like.videoId}/likes/${like.id}`, 
        method: 'PATCH'
    })
);

export const deleteLike = like => (
    $.ajax({
        url: `api/videos/${like.videoId}/likes/${like.id}`, 
        method: 'DELETE'
    })
)