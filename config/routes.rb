Rails.application.routes.draw do
  resources :books do
    collection { post :import }
  end

  resources :points
  resources :exams do
    collection { post :import }
  end

  resources :instructions do
    collection { post :import }
  end

  resources :tags do
    collection { post :import }
  end

  resources :appointments do
    collection { post :import }
  end

  resources :users do
    collection { post :import }
  end

  root 'home#index'
  
  get '/import', to: 'home#import'
  get '/export', to: 'home#export'

  get '/model_instruc', to: 'instructions#model'
  get '/model_exam', to: 'exams#model'


  get 'exams/export', to: 'exams#export'

  get 'instructions/export', to: 'instructions#export'
  
  get '/smart', to: 'exams#smart'
  get '/instructions/:search', to: 'instructions#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end