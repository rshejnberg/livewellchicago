class AddDescriptionColumnToApartments < ActiveRecord::Migration
  def change
    add_column :apartments, :description, :text
  end
end
