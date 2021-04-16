# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  body         :text             not null
#  commenter_id :integer          not null
#  video_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Comment < ApplicationRecord

    belongs_to :commenter, 
        foreign_key: :commenter_id, 
        class_name: :User

    belongs_to :video, 
        foreign_key: :video_id, 
        class_name: :Video

end
