class CreatePhotoAdmins < ActiveRecord::Migration
  def change
    create_table :photo_admins do |t|

      t.timestamps
    end
  end
end
