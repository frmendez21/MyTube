json.id video.id 
json.title video.title 
json.description video.description 
json.uploaderId video.uploader_id 
json.videoUrl url_for(video.file)
json.thumbnailUrl url_for(video.thumbnail)
json.uploadedDate video.created_at