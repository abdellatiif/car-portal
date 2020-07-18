class CarBrandSerializer < ActiveModel::Serializer

  attributes :id , :name ,:picture_url
  def picture_url
    object.picture.url(:thumb)
  end
  end

