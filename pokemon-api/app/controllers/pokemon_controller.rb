require 'open-uri'
require 'json'

class PokemonController < ApplicationController
  def pokemon_api
    @name = params[:name]
    @pokemon_object = { name: @name,
                        description: find_poke_description(@name),
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
    @description = @pokemon_json['flavor_text_entries'][6]['flavor_text']
    @description = @description.gsub("\n", ' ').gsub("\f", ' ')
    @description = @description.gsub('é', 'e').gsub('’', "'")
    shakespear_description(@description)
  end

  def shakespear_description(original_description)
    @url = "https://api.funtranslations.com/translate/shakespeare.json?text=#{original_description}"
    @url_serialized = URI.open(@url).read
    @shakespeare_json = JSON.parse(@url_serialized)
    @shakes_description = @shakespeare_json['contents']['translated']
  end

  def display_poke_object
    @name = params[:name]
    @pokemon_object = { name: @name,
                        description: find_poke_description(@name),
                        sprite: find_pokemon_sprite(@name) }
  end
end
