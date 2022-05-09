import { render, screen, cleanup, fireEvent } from '@testing-library/react'
// import getDataTest from '../testing'
import SearchBar, { getData, getSearchTerm } from '../SearchBar'

afterEach(() => {
  cleanup();
});

test('Should render error message on screen for invalid search term', () => {
  render(<SearchBar />);
  const query = screen.getByTestId('test-query');
  query.value = "dfds";
  const searchBtn = screen.getByTestId('test-search-btn');
  console.log(searchBtn);
  searchBtn.fireEvent.onclick();
  const errorMsg = screen.getByTestId('non-found');
  expect(errorMsg).toBeInTheDocument();
});


// first I try rendering the searchbar component so it appears in its default form on the screen i.e.
// 'who's that pokemon appears' in html doc. Then I grab the input box the user types into with by
// getByTestId('test-query');. Then try to set the value of the user input to an invalid string 'dfds'.
// Then grab the search button and fire a click event on it to trigger the submit event.
// After this event the state of pokemon, rendered in SearchBar, should be set to the NoPokemonFound
// component and hence we'd expect the <p> element with a test ID of 'non-found' to be in the document.
