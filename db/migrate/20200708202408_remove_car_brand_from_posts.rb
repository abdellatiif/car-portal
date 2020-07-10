class RemoveCarBrandFromPosts < ActiveRecord::Migration[6.0]
  def change
    remove_column :posts, :car_brand_id, :string
  end
end
