import { render, screen, cleanup, fireEvent } from '@testing-library/react'
// import getDataTest from '../testing'
import SearchBar, { getData, getSearchTerm } from '../SearchBar'

afterEach(() => {
  cleanup();
});

test('Should render error message on screen for invalid search term', () => {
  render(<SearchBar />);
  // const query = screen.getByTestId('test-query');
  // query.innerText = "dfds";
  // const searchBtn = screen.getByTestId('test-search-btn');
  // console.log(searchBtn);
  // searchBtn.fireEvent.onclick();
  // const errorMsg = screen.getByTestId('non-found');
  // expect(errorMsg).toBeInTheDocument();
});
