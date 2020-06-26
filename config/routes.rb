Rails.application.routes.draw do
  resources :car_brands
   # scope '/api' do
 #root to: 'pages#home'
 #namespace :api, defaults: {format: :json} do
 #namespace:v1 do  

 scope :api, defaults: { format: :json } do
  scope :v1 do
    
    resources :posts
    resources :comments
    devise_scope :users do
    post "sign_up", to: "registrations#create"
    end
  end
end
  
 
  # resources :sessions, only: [:create,:destroy ]  
    end
  
 

    