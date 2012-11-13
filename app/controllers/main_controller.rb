class MainController < ApplicationController
	layout :resolve_layout
    skip_before_filter :authorize, :only => :home
    def home
      @apartments = Apartment.all
      @studio = Apartment.all
      @oneBdr = Apartment.all
      @twoBdr = Apartment.all
      @threeBdr = Apartment.all
      @fourPlusBdr = Apartment.all  
  end

  def admin
	  @apartments = Apartment.all 
	  @users = User.all
	  @user = User.new
      @apartment = Apartment.new

      respond_to do |format|
        format.html # new.html.erb
        format.json { render :json => @apartment }
      end
    
  end
  
  def destroy
	@apartment = Apartment.find(params[:id])
    @apartment.destroy

    respond_to do |format|
      format.html { redirect_to apartments_url }
      format.json { head :no_content }
    end
  end
  
  def resolve_layout
  	case action_name
  		when "home"
  			"application"
  		when "admin"
  			"admin"
  		else
  		"application"
  		end
  end
    def publicSite
        
    end
end
