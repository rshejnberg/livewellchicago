class AddDateavailableColumnToApartments < ActiveRecord::Migration
  def change
    add_column :apartments, :dateavailable, :date
  end
end
