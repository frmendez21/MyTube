json.id video.id 
json.title video.title 
json.description video.description 
json.uploaderId video.uploader_id 
json.uploader video.uploader.username
json.videoUrl url_for(video.file)
json.thumbnailUrl url_for(video.thumbnail)
json.likes video.likes.where(is_like?: true)
json.dislikes video.likes.where(is_like?: false)
json.uploadedDate video.created_at
json.commentIds video.comment_ids
