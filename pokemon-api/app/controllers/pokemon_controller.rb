require 'open-uri'
require 'json'

class PokemonController < ApplicationController
  def pokemon
    @name = params[:name]
    @pokemon_object = { name: @name,
                        # description: shakespear_description(find_poke_description(@name)),
                        sprite: find_pokemon_sprite(@name) }
  end

  def find_pokemon_sprite(name)
    @url = "https://pokeapi.co/api/v2/pokemon/#{name}"
    @poke_api_serialized = URI.open(@url).read
    @pokemon_json = JSON.parse(@poke_api_serialized)
    @sprite = @pokemon_json['sprites']['front_default']
  end

  def find_poke_description(name)
    @url = "https://pokeapi.co/api/v2/pokemon-species/#{name}"
    @poke_api_serialized = URI.open(@url).read
    @pokemon_json = JSON.parse(@poke_api_serialized)
    @description = @pokemon_json['flavor_text_entries'][6]['flavor_text'].gsub('\n', ' ')
  end

  # def shakespear_description(original_description)
  #   @url = "https://api.funtranslations.com/translate/shakespeare.json?text=#{original_description}"
  #   @url_serialized = URI.open(@url).read
  #   @shakespeare_json = JSON.parse(@url_serialized)
  #   @shakes_description = @shakespeare_json['contents']['translated']
  # end
end
