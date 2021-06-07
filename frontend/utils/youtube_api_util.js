export const fetchPopularVideos = () => (
    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/videos", 
        method: "GET", 
        data: { 
            part: "snippet,contentDetails,statistics",
            chart: "mostPopular", 
            key: window.youtubeAPIKey
        }
    })
);

export const fetchVideo = videoId => (
    $.ajax({
        
    })
)
