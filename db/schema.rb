# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120605202328) do

  create_table "apartments", :force => true do |t|
    t.integer  "Bed"
    t.integer  "Bath"
    t.string   "Rent"
    t.string   "Pets"
    t.string   "Security_Deposit"
    t.string   "Parking"
    t.string   "Laundy"
    t.string   "Owner"
    t.date     "Date_Avail"
    t.string   "Type_Heat"
    t.string   "AC"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
    t.string   "location"
    t.text     "description"
    t.string   "availability"
    t.string   "agent"
    t.string   "laundry"
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
    t.integer  "user_id"
  end

  create_table "photo_admins", :force => true do |t|
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "photos", :force => true do |t|
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "password_digest"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
    t.string   "email"
  end

end
