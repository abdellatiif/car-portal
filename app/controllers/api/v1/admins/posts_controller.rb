class Api::V1::Admins::PostsController < ApplicationController
    before_action :set_post, only: [:show, :update, :destroy]
    # before_action :authenticate_admin!, except: [:show, :index] 
  
    # GET /posts
   
    def index
      @posts = Post.all
  
      render json: @posts
    end
  
    # GET /posts/1
    def show
      render json: @post
    end 
  
    # PATCH/PUT /posts/1
    def update
      if current_admin
        if @post.update(post_params)
          render json: @post
        else
          puts(@post.errors)
          render json: @post.errors, status: :unprocessable_entity
        end
      end
    end
  
    # DELETE /posts/1
    def destroy
      if current_admin
        @post.destroy
      else
        render json: @post.errors, status: :unauthorized
      end
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
     
      def set_post
        @post = Post.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def post_params
        params.require(:post).permit(:type, :description, :productionyear, :car_brand_id, :picture, :millage, :color )
      end
  end
  