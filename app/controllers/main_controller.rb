class MainController < ApplicationController
    skip_before_filter :authorize, :only => :home
    def home
        
  end

  def admin

  end
    def publicSite
        
    end
end
