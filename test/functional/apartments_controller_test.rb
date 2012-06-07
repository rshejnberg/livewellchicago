require 'test_helper'

class ApartmentsControllerTest < ActionController::TestCase
  setup do
    @apartment = apartments(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:apartments)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create apartment" do
    assert_difference('Apartment.count') do
      post :create, :apartment => { :AC => @apartment.AC, :Bath => @apartment.Bath, :Bed => @apartment.Bed, :Date_Avail => @apartment.Date_Avail, :Laundy => @apartment.Laundy, :Owner => @apartment.Owner, :Parking => @apartment.Parking, :Pets => @apartment.Pets, :Rent => @apartment.Rent, :Security_Deposit => @apartment.Security_Deposit, :Type_Heat => @apartment.Type_Heat }
    end

    assert_redirected_to apartment_path(assigns(:apartment))
  end

  test "should show apartment" do
    get :show, :id => @apartment
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @apartment
    assert_response :success
  end

  test "should update apartment" do
    put :update, :id => @apartment, :apartment => { :AC => @apartment.AC, :Bath => @apartment.Bath, :Bed => @apartment.Bed, :Date_Avail => @apartment.Date_Avail, :Laundy => @apartment.Laundy, :Owner => @apartment.Owner, :Parking => @apartment.Parking, :Pets => @apartment.Pets, :Rent => @apartment.Rent, :Security_Deposit => @apartment.Security_Deposit, :Type_Heat => @apartment.Type_Heat }
    assert_redirected_to apartment_path(assigns(:apartment))
  end

  test "should destroy apartment" do
    assert_difference('Apartment.count', -1) do
      delete :destroy, :id => @apartment
    end

    assert_redirected_to apartments_path
  end
end
