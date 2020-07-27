class Api::V1::Users::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]

    def show
      render json: @user
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
    
    def set_user
       @user = User.find(params[:id])
    end
  
 
  end
  