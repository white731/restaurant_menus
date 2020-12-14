Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :eateries
  end

  namespace :api do 
    resources :eateries do 
    resources :menus
    end
  end

end
