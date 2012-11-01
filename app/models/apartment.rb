class Apartment < ActiveRecord::Base
    attr_accessible :AC, :Bath, :Bed, :Date_Avail, :Laundy, :Owner, :Parking, :Pets, :Rent, :Security_Deposit, :Type_Heat, :location, :availability, :agent, :description, :photo, :photo2, :photo3, :photo4
    
    has_many :apartment_image, :dependent => :destroy
    
    accepts_nested_attributes_for :apartment_image, 
    :reject_if => lambda { |t| t['apartment_image'].nil? }
    has_attached_file :photo, 
    				  :styles => {:small => "200x200>", :large => "800x720>"},
    				  :storage => :s3,
    				  :s3_credentials => "#{Rails.root}/config/s3.yml",
    				  :path => ":attachment/:id/:style.:extension",
    				  :bucket => 'Live-Well-Chicago-Photos'
	    			  
    has_attached_file :photo2, 
    				  :styles => {:small => "200x200>", :large => "800x720>"},
    				  :storage => :s3,
    				  :s3_credentials => "#{Rails.root}/config/s3.yml",
    				  :path => ":attachment/:id/:style.:extension",
    				  :bucket => 'Live-Well-Chicago-Photos'
    				  
    has_attached_file :photo3,
    				  :styles => {:small => "200x200>", :large => "800x720>"},
    				  :storage => :s3,
    				  :s3_credentials => "#{Rails.root}/config/s3.yml",
    				  :path => ":attachment/:id/:style.:extension",
    				  :bucket => 'Live-Well-Chicago-Photos'
    				  
    has_attached_file :photo4, 
    				  :styles => {:small => "200x200>", :large => "800x720>"},
    				  :storage => :s3,
    				  :s3_credentials => "#{Rails.root}/config/s3.yml",
    				  :path => ":attachment/:id/:style.:extension",
    				  :bucket => 'Live-Well-Chicago-Photos' 
    				    
    AGENTS = ['Jason Gold', 'Serafin Herrera', 'Alexia Kouklowsky']
    LAUNDRYSEL = ['In Building', 'In Unit', 'None', 'N/A']
    HEATSEL = ['Radiator', 'Central', 'N/A']
    PARKINGSEL = ['Outside', 'Garage', 'None', 'N/A']
    ACSEL = ['Window Unit', 'Central', 'None', 'N/A']
    PETSSEL = ['Cats & Dogs OK', 'Cats Only', 'Dogs Only', 'No Pets', 'N/A']
    AVAILSEL = ['RENTED', 'AVAILABLE']
validates_presence_of  :Bath, :Bed, :Date_Avail, :Rent, :location, :availability, :agent  
validates_numericality_of :Rent, :Bed, :Bath

end
