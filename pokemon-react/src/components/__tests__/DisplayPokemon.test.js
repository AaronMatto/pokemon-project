import { render, screen, cleanup } from '@testing-library/react'
import DisplayPokemon from '../DisplayPokemon';

afterEach(() => {
  cleanup();
});

test('Should display the charizard correctly', () => {
  const pokemon = { name: 'Charizard',
                    description: `Charizard flies 'round the sky in search of powerful opponents. 't breathes fire of such most wondrous heat yond 't melts aught. However, 't nev'r turns its fiery breath on any opponent weaker than itself.`,
                    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' };
  render(<DisplayPokemon name={pokemon.name} description={pokemon.description} sprite={pokemon.sprite}/>);
  const pokemonName = screen.getByTestId('poke-test-name');
  const pokemonImgSrc = screen.getByTestId('poke-test-img');
  const pokemonDesc = screen.getByTestId('poke-test-desc');
  expect(pokemonName).toHaveTextContent('Charizard');
  expect(pokemonImgSrc).toHaveAttribute('src');
  expect(pokemonImgSrc.getAttribute('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png');
  expect(pokemonDesc).toHaveTextContent(`Charizard flies 'round the sky in search of powerful opponents. 't breathes fire of such most wondrous heat yond 't melts aught. However, 't nev'r turns its fiery breath on any opponent weaker than itself.`);
});

test('Should display blastoise correctly', () => {
  const pokemon = {
    name: 'Blastoise',
    description: `Blastoise hath water spouts yond protrude from its shell. The water spouts art very accurate. They can shoot bullets of water with enow accuracy to strike exsufflicate cans from a distance of ov'r 160 feet.`,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'
  };
  render(<DisplayPokemon name={pokemon.name} description={pokemon.description} sprite={pokemon.sprite} />);
  const pokemonName = screen.getByTestId('poke-test-name');
  const pokemonImgSrc = screen.getByTestId('poke-test-img');
  const pokemonDesc = screen.getByTestId('poke-test-desc');
  expect(pokemonName).toHaveTextContent('Blastoise');
  expect(pokemonImgSrc).toHaveAttribute('src');
  expect(pokemonImgSrc.getAttribute('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png');
  expect(pokemonDesc).toHaveTextContent(`Blastoise hath water spouts yond protrude from its shell. The water spouts art very accurate. They can shoot bullets of water with enow accuracy to strike exsufflicate cans from a distance of ov'r 160 feet.`);
});
