class PostSerializer < ActiveModel::Serializer
  attributes :id, :description, :productionyear,:picture_url
  has_one :car_brand
  def picture_url
    object.picture.url
  end    
end

 