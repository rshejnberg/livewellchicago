class AddAgentColumnToApartments < ActiveRecord::Migration
  def change
    add_column :apartments, :agent, :string
  end
end
