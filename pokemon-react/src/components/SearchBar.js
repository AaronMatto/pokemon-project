import React,{useState} from 'react'
import './CSS/SearchBar.css'
import WhosThatPokemon from './WhosThatPokemon'
import DisplayPokemon from './DisplayPokemon'
import NoPokemonFound from './NoPokemonFound'

export const getData = async(pokemon_name) => {

  const response = await fetch(`http://localhost:3000/pokemon/${pokemon_name}`);
  const pokemon_data = response.json();
  return pokemon_data;
}

const SearchBar = () => {

  const [pokemon, setPokemon] = useState(<WhosThatPokemon />);

  const getSearchTerm = async(event) => {
    event.preventDefault();
    const pokemon_name = event.target.firstElementChild.firstElementChild.value.toLowerCase().trim();
    const pokemon_data = await getData(pokemon_name);
    const data = pokemon_data.message;
    console.log(pokemon_data);
    try {
      const pokemonDisplay = <DisplayPokemon name={data.name} description={data.description} sprite={data.sprite}/>
      setPokemon(pokemonDisplay)
    }
    catch(err) {
      const search_term = event.target.firstElementChild.firstElementChild.value.trim();
      setPokemon(<NoPokemonFound name={search_term}/>);
    };
  }

  return (
    <div>
      <form id="search-form" onSubmit={getSearchTerm} data-testid="test-form">
        <div id="search-container">
          <input placeholder="Search for a Pokémon..." type="text" id="query" name="q" required data-testid="test-query"></input>
          <input type="submit" value="CATCH 'EM!" id="search-btn" data-testid="test-search-btn"></input>
        </div>
      </form>
      <div className="pokemon-wrapper">
        {pokemon}
      </div>
    </div>
  )
}

export default SearchBar
