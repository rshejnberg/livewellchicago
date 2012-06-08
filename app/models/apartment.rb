class Apartment < ActiveRecord::Base
    attr_accessible :AC, :Bath, :Bed, :Date_Avail, :Laundy, :Owner, :Parking, :Pets, :Rent, :Security_Deposit, :Type_Heat, :location, :availability, :agent, :description, :photo
    
    has_attached_file :photo, :styles => {:small => "200x200>", :large => "350x350>"}
    AGENTS = ['Jason Gold', 'Serafin Herrera', 'Alexia Kouklowsky']
    LAUNDRYSEL = ['In Building', 'In Unit', 'None']
    HEATSEL = ['Radiator', 'Central']
    ACSEL = ['Window Unit', 'Central', 'None']
    PETSSEL = ['Cats & Dogs OK', 'Cats Only', 'Dogs Only', 'No Pets']
    AVAILSEL = ['RENTED', 'AVAILABLE']
validates_presence_of  :Bath, :Bed, :Date_Avail, :Owner, :Rent, :Security_Deposit, :Type_Heat, :location, :availability, :agent  
validates_numericality_of :Rent, :Security_Deposit, :Bed, :Bath

end
