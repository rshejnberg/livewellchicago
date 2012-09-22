# Load the rails application
require File.expand_path('../application', __FILE__)

ActionView::Base.field_error_proc = Proc.new do |html_tag, instance|
  %(<div style="color:red">ERR</div>) + html_tag
end
# Initialize the rails application
LiveWell::Application.initialize!
