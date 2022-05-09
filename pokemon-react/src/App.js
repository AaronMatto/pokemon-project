import React from 'react'
import './App.css';
import SearchBar from './components/SearchBar.js'
import PokemonLogo from './components/PokeLogo.js';

function App() {
  return ([<PokemonLogo />, <SearchBar />,])
}


// npm start must not be on localhost3000 (aka the rails server)!

export default App;
