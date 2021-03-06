# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
   validates :username, :email, :password_digest, presence: true
   validates :username, :email, uniqueness: true
   validates :password, length: {minimum: 6, allow_nil: true}

   has_many :videos, 
      foreign_key: :uploader_id, 
      class_name: :Video

   has_many :comments, 
      foreign_key: :commenter_id, 
      class_name: :Comment
   
   has_many :likes, 
      foreign_key: :liker_id, 
      class_name: :Like

   has_many :liked_videos, 
      through: :likes, 
      source: :video
      
   after_initialize :ensure_session_token
   attr_reader :password
   

   def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
   end

   def is_password?(password) 
    BCrypt::Password.new(self.password_digest).is_password?(password)
   end 

   def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
   end 

   def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
   end 

   def self.find_by_credentials(username, password) 
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
   end

end
