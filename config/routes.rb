Rails.application.routes.draw do
    scope '/api' do
  resources :comments
 #root to: 'pages#home'
    devise_for :users
    resources :posts
  # resources :sessions, only: [:create,:destroy ]  
    end
 end
