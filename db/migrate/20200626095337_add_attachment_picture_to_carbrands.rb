class AddAttachmentPictureToCarbrands < ActiveRecord::Migration[6.0]
  def self.up
    change_table :car_brands do |t|
      t.attachment :picture
    end
  end

  def self.down
    remove_attachment :car_brands, :picture
  end
end
