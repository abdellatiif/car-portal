class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :type
      t.text :description
      t.integer :productionyear

      t.timestamps
    end
  end
end
