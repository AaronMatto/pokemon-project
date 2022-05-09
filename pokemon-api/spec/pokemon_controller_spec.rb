require 'rails_helper'
require_relative "../app/controllers/application_controller"
require_relative "../app/controllers/pokemon_controller"
require 'open-uri'
require 'json'

pokemon_controller = PokemonController.new

describe "PokemonController" do
  it '`PokemonController` class should be defined' do
    expect(pokemon_controller).to be_an_instance_of(PokemonController)
  end

  it '#pokemon-api should build the correct object with correct data' do
    url = "http://localhost:3000/pokemon/charizard"
    poke_api_serialized = URI.open(url).read
    pokemon_json = JSON.parse(poke_api_serialized)
    sprite = pokemon_json['message']['sprite']
    name = pokemon_json['message']['name']
    description = pokemon_json['message']['description']
    # expect(pokemon_controller.pokemon_api.pokemon_object.name).to eq "charizard"
    expect(description).to eq "Charizard flies 'round the sky in search of powerful opponents.
    't breathes fire of such most wondro... yond 't melts aught. However, 't nev'r turns its fiery breath on any opponent
    weaker than itself."
    expect(sprite).to eq 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
  end
end
