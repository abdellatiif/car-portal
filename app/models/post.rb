class Post < ApplicationRecord
    has_many :comments
    belongs_to :car_brand
    belongs_to :user
    has_attached_file :picture, styles: { medium: "300x300>", thumb: "100x100>" }  
    validates_attachment_content_type :picture, content_type: /\Aimage\/.*\z/       
end
