@comments.each do |comment|
    json.set! comment.id do 
     json.partial! "api/videos/comment", comment: comment
    end
end