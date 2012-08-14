class ApartmentsController < ApplicationController
  # GET /apartments
  # GET /apartments.json
    skip_before_filter :authorize, :only => :aptMenu
    skip_before_filter :authorize, :only => :show
  def index
    @apartments = Apartment.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @apartments }
    end
  end
    
  def aptMenu
      @apartments = Apartment.all
      @studio = Apartment.where(:Bed => '0').all
      @oneBdr = Apartment.where(:Bed => '1').all
      @twoBdr = Apartment.where(:Bed => '2').all
      @threeBdr = Apartment.where(:Bed => '3').all
      @fourPlusBdr = Apartment.where(:Bed => '4').all
      
        respond_to do |format|
            format.html # index.html.erb
            format.json { render :json => @apartments }
    end
      
  end
    def showPublic
        @apartment = Apartment.find(params[:id])
        
        respond_to do |format|
            format.html # show.html.erb
            format.json { render :json => @apartment }
        end
    end
  # GET /apartments/1
  # GET /apartments/1.json
  def show
    @apartment = Apartment.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render :json => @apartment }
    end
  end

  # GET /apartments/new
  # GET /apartments/new.json
  def new
    @apartment = Apartment.new
    3.times {@apartment.apartment_image.build}
    respond_to do |format|
      format.html # new.html.erb
      format.json { render :json => @apartment }
    end
  end

  # GET /apartments/1/edit
  def edit
    @apartment = Apartment.find(params[:id])
    3.times { @apartment.apartment_image.build }
  end

  # POST /apartments
  # POST /apartments.json
  def create
    @apartment = Apartment.new(params[:apartment])

    respond_to do |format|
      if @apartment.save
        format.html { redirect_to @apartment, :notice => 'Apartment was successfully created.' }
        format.json { render :json => @apartment, :status => :created, :location => @apartment }
      else
        format.html { render :action => "new" }
        format.json { render :json => @apartment.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /apartments/1
  # PUT /apartments/1.json
  def update
    @apartment = Apartment.find(params[:id])

    respond_to do |format|
      if @apartment.update_attributes(params[:apartment])
        format.html { redirect_to @apartment, :notice => 'Apartment was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render :action => "edit" }
        format.json { render :json => @apartment.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /apartments/1
  # DELETE /apartments/1.json
  def destroy
    @apartment = Apartment.find(params[:id])
    @apartment.destroy

    respond_to do |format|
      format.html { redirect_to apartments_url }
      format.json { head :no_content }
    end
  end
end
