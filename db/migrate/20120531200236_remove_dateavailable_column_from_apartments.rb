class RemoveDateavailableColumnFromApartments < ActiveRecord::Migration
  def up
    remove_column :apartments, :dateavailable
      end

  def down
    add_column :apartments, :dateavailable, :date
  end
end
