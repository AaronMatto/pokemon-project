# Pokemon-API-Project

## Overview:
 -  A project to build a basic API that acts as a simple search engine for Pokemon, allowing users to see their picture and a description translated into
    Shakespearean English.
 -  The back end hosts a server as a rails application which is sent requests via the front end, which hosts a react application.
 -  In the front end, the search term (pokemon) entered by the user is obtained and sent as a request to the back end.
 -  The back end works by sending requests to two different APIs; first the pokeAPI, to retrieve the description and image, and second the 
    Shakespeare fun translations API to translate the acquired description. Upon completing this process, the back end acts as an API itself by building
    a JSON object with this information which is sent back to the front end.
 -  The front end then uses the information in the returned JSON and presents it to the user, showing them the name, picture and translated description of
    the relevant pokemon.
 -  If the user searches for a pokemon that does not exist, they will see a message with their search term displayed to them informing them to check for spelling errors.
 -  It is worth noting that the back ends' functionality could be entirely encorporated into the front end, so this application doesn't necessarily require a back end, 
    which was built for practise.
 -  Also, the fun translations API only accepts 5 requests per hour, so it is only possible to search for 5 pokemon per hour as a result.
 -  Finally, there are no Pokemon that include a whitespace in their name, so the front end does not require functionality for search terms including a space. 


## Running the app:

To run the rails app:

```
cd pokemon-api
docker build -t po-api .
docker run -p 3000:3000 po-api
```

To run the react app:
```
cd pokemon-react
docker build -t po-re .
docker run -p 3001:3000 po-re
```

## Testing:
 - To run the tests in the react app run 'npm run test' in the 'pokemon-react' directory on terminal
 - The tests here are meant to test the backend by proxy as they are testing what is returned and rendered into the front end for given search terms. The tests would only pass if the backend retruns the correct information and the front end renders it properly.


## Improvements:
  - The error message should display to the user quicker when the search term does not find a pokemon.
  - The rails application should display the json object it is outputting. It does this in a test file currently and not in the file that actually
    receives the request from the front end, as this file is expecting a HTML template due to the way I currently know of setting up a rails app.
  - Improved styling (although I'm not a designer 😅)
  - Better tests. Currently, the test for the search bar (SearchBar.test.js) tests that the correct data is returned from the back end (so tests the back       end by proxy) however the test isn't working properly at the moment. Not currently sure how to make the test simulate user input on components e.g. the     search bar. Implementing the tests in the react app has been the biggest challenge.
  - If it is not possible for the react test files to directly test the backend API, a test in rspec should be written to ensure the correct object is         built in the backend. This is already manually tested in localhost/3000/test/insert_pokemon_name. The rspec tests are currently in progress and can 
    be found in the pokemon-api directory in app/spec/pokemon_controller_spec.rb. The tests can be run by running 'rake' in the terminal in the pokemon-api
    directory after rails s has been executed (as server needs to be running to check what our api returns).
  - The test fails currently at comparing expected description for charizard but it seems to be a small and tedious string formatting error as the expected string and receieved string in the terminal are identical. I have decided to make a new branch on the project to fix this error.
  - For some reason, the pokeball tab icon only loads when the react app is launced on port 3000 and not 3001 :(
