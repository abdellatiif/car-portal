class Api::V1::Admins::CarBrandsController < ApplicationController
    before_action :set_car_brand, only: [:show, :update, :destroy]
  
    # GET /car_brands
    def index
      @car_brands = CarBrand.all
  
      render json: @car_brands
    end
  
    # GET /car_brands/1
    def show
      render json: @car_brand
    end
  
    # POST /car_brands
    def create
        if current_admin 
            @car_brand = CarBrand.new(car_brand_params)
            
            if @car_brand.save
                render json: @car_brand, status: :created, location: @car_brand
            else
                render json: @car_brand.errors, status: :unprocessable_entity
            end
        end
    end
  
    # PATCH/PUT /car_brands/1
    def update
        if current_admin
            if @car_brand.update(car_brand_params)
                render json: @car_brand
            else
                render json: @car_brand.errors, status: :unprocessable_entity
            end
        end
    end
  
    # DELETE /car_brands/1
    def destroy
      if current_admin
        @car_brand.destroy
      end
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
    
      def set_car_brand
        @car_brand = CarBrand.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def car_brand_params
        params.require(:car_brand).permit(:name, :picture )
      end
  end
  