class ApplicationController < ActionController::API

    # acts_as_token_authentication_handler_for User
    
    def render_resource(resource)
        if resource.errors.empty?
          render json: resource
        else
          validation_error(resource)
        end
      end
    
      def validation_error(resource)
        render json: {
          errors: [
            {
              status: '400',
              title: 'Bad Request',
              detail: resource.errors,
              code: '100'
            }
          ]
        }, status: :bad_request
      end

      def current_user
        User.find_by(authentication_token: params[:authentication_token])
      end

      def current_admin
        Admin.find_by(authentication_token: params[:authentication_token])
      end
end
