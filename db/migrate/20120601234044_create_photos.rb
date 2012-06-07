class CreatePhotos < ActiveRecord::Migration
  
    def change
    create_table :photos do |t|

      t.timestamps
    end
  end
    def self.up 
    create_table :photos do |t| 
    t.column :description, :string
    t.column :content_type, :string 
    t.column :filename, :string 
    t.column :binary_data, :binary 
end
end
end
