class CreateApartments < ActiveRecord::Migration
  def change
    create_table :apartments do |t|
      t.integer :Bed
      t.integer :Bath
      t.string :Rent
      t.string :Pets
      t.string :Security_Deposit
      t.string :Parking
      t.string :Laundy
      t.string :Owner
      t.date :Date_Avail
      t.string :Type_Heat
      t.string :AC

      t.timestamps
    end
  end
end
