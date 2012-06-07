class AddAvailabilityColumnToApartments < ActiveRecord::Migration
  def change
    add_column :apartments, :availability, :string
  end
end
