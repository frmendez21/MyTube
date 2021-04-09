# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  uploader_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord
    validates :title, :description, :uploader_id, presence: true 

    belongs_to :uploader, 
        foreign_key: :uploader_id, 
        class_name: :User

    has_one_attached :file
end
