Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/pokemon/:name', to: 'pokemon#pokemon_api'
  get '/test/:name', to: 'pokemon#display_poke_object'
end
