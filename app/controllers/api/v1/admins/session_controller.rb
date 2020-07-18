class Api::V1::Admins::SessionController < Devise::SessionsController
    before_action :authenticate_admin!, except: [:create]
    before_action :sign_in_params, only: :create
    before_action :load_admin, only: :create
    
    # sign in
    def create
      if @admin.valid_password?(sign_in_params[:password])
        sign_in "admin", @admin
        render json: {
          messages: "Signed In Successfully",
          is_success: true,
          data: {admin: @admin}
        }, status: :ok
      else
        render json: {
          messages: "Signed In Failed - Unauthorized",
          is_success: false,
          data: {}
        }, status: :unauthorized
      end
    end
  
    private
    def sign_in_params
      params.require(:sign_in).permit(:email, :password)
    end
  
    def load_admin
      @admin = Admin.find_for_database_authentication(email: sign_in_params[:email])
      if @admin
        return @admin
      else
        render json: {
          messages: "Cannot get Admin",
          is_success: false,
          data: {}
        }, status: :unauthorized
      end
    end
  end