class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  #before_action :authenticate_user!, except: [:show, :index] 

  # GET /posts
 
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    render Text:' @post'
  end 

  # POST /posts
  def create
    @post = Post.new(post_params)
   
    if @post.save
      render json: @post, status: :created, location: @post
    else
      puts(@post.errors.full_messages)

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
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
   
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:type, :description, :productionyear, :car_brand_id, :picture )
    end
end
