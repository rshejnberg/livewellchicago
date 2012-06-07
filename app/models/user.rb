class User < ActiveRecord::Base
    attr_accessible :name, :password_digest, :password, :password_confirmation, :email
    set_primary_key :name
    has_many :apartments, :foreign_key => 'agent'
    validates :name, :presence=>true
    validates :name, :uniqueness=>true
    validates :email, :presence=>true
    validates :email, :uniqueness=>true
    validates :password, :presence=>true
   
    has_secure_password
end
