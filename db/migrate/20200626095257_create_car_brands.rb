class CreateCarBrands < ActiveRecord::Migration[6.0]
  def change
    create_table :car_brands do |t|
      t.string :name
      t.integer :post_id

      t.timestamps
    end
  end
end
