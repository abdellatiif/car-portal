class PostSerializer < ActiveModel::Serializer
  attributes :id, :description, :productionyear,:picture_url, :millage, :color
  has_one :car_brand
  has_one :user
  def picture_url
    object.picture.url(:medium)
  end    
end

 