class AddUserIdToApartments < ActiveRecord::Migration
 def self.up 
 	add_column :apartments, :user_id, :integer
 end
 
  def self.down 
    remove_column :apartments, :user_id, :integer
  end
end
