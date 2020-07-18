class Api::V1::Admins::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]
  
    # GET /car_brands
    def index
      @users = User.all
  
      render json: @users
        end
  
    # GET /car_brands/1
    def show
      render json: @user
    end
  
 
    def destroy
      if current_admin
        @user.destroy
      end
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
    
      def set_user
        @user = User.find(params[:id])
      end
  
 
  end
  