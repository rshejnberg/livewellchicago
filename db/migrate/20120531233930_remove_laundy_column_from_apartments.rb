class RemoveLaundyColumnFromApartments < ActiveRecord::Migration
  def up
    remove_column :apartments, :laundy
      end

  def down
    add_column :apartments, :laundy, :string
  end
end
