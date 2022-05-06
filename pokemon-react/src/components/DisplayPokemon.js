import React from 'react'
import './CSS/DisplayPokemon.css'

const DisplayPokemon = (props) => {
  const { name, sprite, description } = props;
  const poke_name = name.charAt(0).toUpperCase() + name.slice(1);
  const img_not_found = `${poke_name}'s image could not be found :(`;

  return (
        <div className='pokemon-content'>
          <h3 id="pokemon-name" data-testid="poke-test-name">{poke_name}</h3>
          <div className='pokemon-bio'>
            <img src={sprite} alt={img_not_found} id="pokemon-image" data-testid="poke-test-img"></img>
            <div className='pokemon-desc-container'>
              <h4 id="desc-title">Description:</h4>
              <p id="pokemon-desc" data-testid="poke-test-desc"> {description} </p>
            </div>
          </div>
        </div>
  )
}

// DisplayPokemon.defaultProps = {
//   name: "",
//   description: "",
//   sprite: ""
// }


export default DisplayPokemon
