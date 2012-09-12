class MainController < ApplicationController
    skip_before_filter :authorize, :only => :home
    def home
      @apartments = Apartment.all
      @studio = Apartment.where(:Bed => '0').all
      @oneBdr = Apartment.where(:Bed => '1').all
      @twoBdr = Apartment.where(:Bed => '2').all
      @threeBdr = Apartment.where(:Bed => '3').all
      @fourPlusBdr = Apartment.where(:Bed => '4').all   
  end

  def admin

  end
    def publicSite
        
    end
end
