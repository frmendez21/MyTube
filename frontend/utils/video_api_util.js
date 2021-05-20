export const fetchVideos = data => {
   return $.ajax({
        url: 'api/videos', 
        method: 'GET', 
        data
    })
};

export const fetchVideo = videoId => (
   $.ajax({
        url: `api/videos/${videoId}`, 
        method: 'GET'
    })
);

export const uploadVideo = video => (
     $.ajax({
        url: 'api/videos',
        method: "POST", 
        contentType: false,
        processData: false,
        data: video
    })
);

export const editVideo = video => (
    $.ajax({
        url: `api/videos/${video.id}`,
        method: 'PATCH', 
        data: {video}
    })
);

export const deleteVideo = videoId=> (
    $.ajax({
        url: `api/videos/${videoId}`, 
        method: 'DELETE'
    })
);

export const searchVideos = query => (
    $.ajax({
        url: '/api/videos/search', 
        method: 'GET',
        data: {query: query}, 
        dataType: 'json'
    })
);