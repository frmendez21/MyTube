export const fetchVideos = () => (
    $.ajax({
        url: 'api/videos', 
        method: 'GET'
    })
);

export const fetchVideo = videoId => (
   $.ajax({
        url: `api/videos/${videoId}`, 
        method: 'GET'
    })
);

export const uploadVideo = video => {
    return $.ajax({
        url: 'api/videos',
        method: "POST", 
        contentType: false,
        processData: false,
        data: video
    })
};
