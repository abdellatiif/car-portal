class Post < ApplicationRecord
    has_many :comments
    belongs_to :car_brand
    belongs_to :user
    has_attached_file :picture, styles: { medium: "300x300>", thumb: "100x100>" }  
    validates_attachment_content_type :picture, content_type: /\Aimage\/.*\z/ 
    
    scope :filter_by_car_brand, -> (car_brand_id) { where(car_brand_id: car_brand_id) }
    
end
