Rails.application.routes.draw do
  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html


  # API routes
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :messages, only: [:index]
    end
  end

end