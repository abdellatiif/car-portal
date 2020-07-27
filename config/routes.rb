Rails.application.routes.draw do
   # scope '/api' do
 #root to: 'pages#home'
 #namespace :api, defaults: {format: :json} do
 #namespace:v1 do  
 namespace :api, defaults: { format: :json } do
  namespace :v1 do
    namespace :users do
      resources :car_brands, :only => [:index, :show]
      resources :posts
      resources :comments
      resources :users, :only => [:show]
      devise_for :users,
      path: '',
      path_names: {
        sign_in: 'login',
        sign_out: 'logout',
        registration: 'signup'
      },
      controllers: {
        sessions: 'api/v1/users/session',
        registrations: 'api/v1/users/registrations'
      }
    end
    namespace :admins do
      resources :posts
      resources :car_brands
      resources :users, :only => [:index, :show, :destroy]
      devise_for :admins,
      path: '',
      path_names: {
        sign_in: 'login',
        sign_out: 'logout'
      },
      controllers: {
        sessions: 'api/v1/admins/session',
      }
    end
  end
end
end
  
 

    