class User < ActiveRecord::Base
    attr_accessible :name, :password_digest, :password, :password_confirmation, :email
 
    validates :name, :presence=>true
    validates :name, :uniqueness=>true
    validates :email, :presence=>true
    validates :email, :uniqueness=>true
    validates :password, :presence=>true
   
    has_secure_password
end
