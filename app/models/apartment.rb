class Apartment < ActiveRecord::Base
    attr_accessible :AC, :Bath, :bed, :Date_Avail, :Laundry, :Owner, :Parking, :Pets, :Rent, :Security_Deposit, :Type_Heat, :location, :availability, :agent, :description, :photo, :photo2, :photo3, :photo4
    
    has_many :apartment_image, :dependent => :destroy
    
    accepts_nested_attributes_for :apartment_image, :reject_if => 	 lambda { |t| t['apartment_image'].nil? }
    has_attached_file :photo, :styles => {:small => "150x150>", :large => "800x720>"}
    has_attached_file :photo2, :styles => {:small => "150x150>", :large => "800x720>"}
    has_attached_file :photo3, :styles => {:small => "150x150>", :large => "800x720>"}
    has_attached_file :photo4, :styles => {:small => "150x150>", :large => "800x720>"}
    AGENTS = ['Jason Gold', 'Serafin Herrera', 'Alexia Kouklowsky']
    LAUNDRYSEL = ['In Building', 'In Unit', 'None']
    HEATSEL = ['Radiator', 'Central']
    ACSEL = ['Window Unit', 'Central', 'None']
    PETSSEL = ['Cats & Dogs OK', 'Cats Only', 'Dogs Only', 'No Pets']
    AVAILSEL = ['RENTED', 'AVAILABLE']
validates_presence_of  :Bath, :Bed, :Date_Avail, :Owner, :Rent, :Security_Deposit, :Type_Heat, :location, :availability, :agent  
validates_numericality_of :Rent, :Security_Deposit, :Bed, :Bath

end
