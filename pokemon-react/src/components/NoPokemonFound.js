import React from 'react'
import './CSS/NoPokemonFound.css'

const NoPokemonFound = (props) => {
  const { name } = props
  return <p data-testid="non-found" id="not-found-msg">🤯 Uh Oh! '{name}' could not be found.<br></br>Check for spelling
  errors and search again 🔍 </p>
}

export default NoPokemonFound
