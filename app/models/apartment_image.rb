class ApartmentImage < ActiveRecord::Base
  attr_accessible :apartment_id, :caption
  belongs_to :apartment
  has_attached_file :photo, :styles => {:small => "200x200>", :large => 	"350x350>"}
  validates_attachment_presence :photo
  
end
