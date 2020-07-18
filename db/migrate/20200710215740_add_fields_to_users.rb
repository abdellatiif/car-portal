class AddFieldsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :full_name, :text
    add_column :users, :type, :string
  end
end
