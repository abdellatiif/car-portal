Rails.application.routes.draw do
  devise_for :admins
   # scope '/api' do
 #root to: 'pages#home'
 #namespace :api, defaults: {format: :json} do
 #namespace:v1 do  

 scope :api, defaults: { format: :json } do
  scope :v1 do
    resources :car_brands
    resources :posts
    resources :comments
    resources :users
    devise_for :users,
    path: '',
    path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      registration: 'signup'
    },
    controllers: {
      sessions: 'session',
      registrations: 'registrations'
    }
    
  end
end
  
 
  # resources :sessions, only: [:create,:destroy ]  
    end
  
 

    