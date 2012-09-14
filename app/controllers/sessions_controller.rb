class SessionsController < ApplicationController
    skip_before_filter :authorize
    layout :resolve_layout
    
  def new
  @apartments = Apartment.all
  @users = User.all
  end
    def create
    	@apartments = Apartment.all
    	@users = User.all
        user = User.find_by_email(params[:email])
        if user and user.authenticate(params[:password])
            # writes user_id in session information
            session[:user_id] = user.id
            # redirects browser to root url
            render :template=>"main/admin", :notice => "Logged in!"
            else
            flash.now.alert = "Invalid username or password"
            render "new"
        end
    end
    def resolve_layout
  		case action_name
	  		when "destroy", "create", "new"
	  			"admin"
	  		else
	  			"application"
  end
  end
    def destroy
        # resets session id to nil
        session[:user_id] = nil
        redirect_to login_url, :notice => "Logged out!"
    end
end
