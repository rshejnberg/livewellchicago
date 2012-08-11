class AddAttachmentPhoto4ToApartments < ActiveRecord::Migration
  def self.up
    add_column :apartments, :photo4_file_name, :string
    add_column :apartments, :photo4_content_type, :string
    add_column :apartments, :photo4_file_size, :integer
    add_column :apartments, :photo4_updated_at, :datetime
  end

  def self.down
    remove_column :apartments, :photo4_file_name
    remove_column :apartments, :photo4_content_type
    remove_column :apartments, :photo4_file_size
    remove_column :apartments, :photo4_updated_at
  end
end
