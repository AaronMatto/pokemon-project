// import getDataTest from '../testing'
import { render, cleanup } from '@testing-library/react'
import  SearchBar, { getData } from '../SearchBar';
import { rest } from 'msw'; // tried to use mock to mock the server response
import { setupServer } from 'msw/node';



const response = rest.get('http://localhost:3000/pokemon/charizard', (req, res, ctx) => {
  return res(ctx.json(
    {
      message: {
        description: "Charizard flies 'round the sky in search of powerful opponents. 't breathes fire of such most wondrous heat yond 't melts aught. However, 't nev'r turns its fiery breath on any opponent weaker than itself.",
   name: "charizard",
   sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" } }
   ));
})
// // why is const response needed? If lines 4 to 17 are commented out then the test cannot access
// // localhost (if we remove line 1 comment) and it fails. response is not explicitly used in the test function, however
// // it is what is compared to charizard on lines 44-46. getData returns const response it seems from the tests?

const server = new setupServer(response);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
afterEach(() => {
  cleanup();
});


const charizard = {
  message: {
    description: "Charizard flies 'round the sky in search of powerful opponents. 't breathes fire of such most wondrous heat yond 't melts aught. However, 't nev'r turns its fiery breath on any opponent weaker than itself.",
    name: "charizard",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
} };



test('Back end should return the correct pokemon to be displayed from search', async() => {
  render(<SearchBar />);
  // const searchBar = screen.getByTestId('test-form');
  const searchedPokemon = await getData('charizard');
  expect(searchedPokemon.message.name).toBe(charizard.message.name);
  expect(searchedPokemon.message.description).toBe(charizard.message.description);
  expect(searchedPokemon.message.sprite).toBe(charizard.message.sprite);
});
