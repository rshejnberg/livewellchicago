class AddLocationColumnToApartments < ActiveRecord::Migration
  def change
    add_column :apartments, :location, :string
  end
end
