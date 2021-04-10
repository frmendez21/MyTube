export const fetchVideos = () => (
    $.ajax({
        url: 'api/videos', 
        method: 'GET'
    })
);

export const fetchVideo = videoId => {
    return $.ajax({
        url: `api/videos/${videoId}`, 
        method: 'GET'
    })
};

export const uploadVideo = video => (
    $.ajax({
        url: 'api/videos',
        method: "POST", 
        data: {video}
    })
);
