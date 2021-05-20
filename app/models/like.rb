# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  is_like?   :boolean          not null
#  liker_id   :integer          not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
    validates :liker_id, uniqueness: { scope: :video_id, message: "one like per user per video" }

    belongs_to :liker, 
        foreign_key: :liker_id, 
        class_name: :User
    
    belongs_to :video, 
        foreign_key: :video_id, 
        class_name: :Video
        
end
