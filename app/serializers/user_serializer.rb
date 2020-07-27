class UserSerializer < ActiveModel::Serializer
    attributes :id, :full_name, :email, :authentication_token, :picture_url
    has_many :posts
    def picture_url
      object.picture.url(:medium)
    end    
  end
  
   