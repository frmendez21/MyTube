# json.extract! user, :id, :username, :email
json.id user.id 
json.username user.username
json.email user.email
json.likedVideos user.liked_videos
json.userLikes user.likes.each do |like| 
    json.id like.id 
    json.isLike like.is_like? 
    json.likerId like.liker_id
    json.videoId like.video_id
end