class CarBrandSerializer < ActiveModel::Serializer

  attributes :id , :name ,:picture_url
  has_many :posts
  def picture_url
    object.picture.url(:thumb)

  end
  end

