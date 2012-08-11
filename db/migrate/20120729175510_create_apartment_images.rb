class CreateApartmentImages < ActiveRecord::Migration
  def change
    create_table :apartment_images do |t|
      t.string :caption
      t.integer :apartment_id

      t.timestamps
    end
  end
end
