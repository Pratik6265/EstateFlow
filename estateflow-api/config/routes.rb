Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do
    namespace :v1 do 
      resources :users, only: [:index]
      resource :auth, controller: 'auth' do
        post 'signup'
        post 'login'
      end
    end
  end
end
