class AddCarBrandRefToPosts < ActiveRecord::Migration[6.0]
  def change
    add_reference :posts, :car_brand, null: false, foreign_key: true
  end
end
