class Api::V1::Users::PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  #before_action :authenticate_user!, except: [:show, :index] 

  # GET /posts
 
  def index
    @posts = Post.all
    @posts = @posts.where(car_brand_id: params[:car_brand_id]) if params[:car_brand_id].present?
    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end 

  # POST /posts
  def create
    @post = current_user.posts.new(post_params)
   
    if @post.save
      render json: @post, status: :created
    else
      
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      puts(@post.errors)
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    if @post.user_id == current_user.id
      @post.destroy
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
