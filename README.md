# Pokemon-API-Project

Overview:
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


Please install the following technologies to run the app and see tests:
  -  VS code
  -  Ruby, version 2.7.4 and up
  -  Rails, version 6.0.4.8 and up
  -  React, version 18.1.0 and up
  -  Node, version 14.15.5 and up


Running the app:
  -  Run 'bundle install' from the command line in the directory of 'pokemon-api' on the terminal
  -  Run 'rails s' in the directory of 'pokemon-api' on terminal
  -  Ensure the rails server is running on port 3000 as the front end is expecting to request 'http://localhost:3000/pokemon/SearchedPokemon'
  -  Run 'npm install' in the directory of 'pokemon-react' on terminal
  -  Run 'npm start' in the directory of 'pokemon-react', then press 'y' if prompted to launch the server on another port
  -  Ensure the node server is running on port 3001 else the api request from the react app to the backend will be blocked by CORS
  -  Alternatively, if the react app launches on a different port you can go into the rails app in 'pokemon-api'. In the app go into initializers/cors.rb
  -  Change the value of "origins" to be the localhost from which your react app is launching
  -  Search away!


Testing:
 - To run the tests in the react app run 'npm run test' in the 'pokemon-react' directory on terminal
 - In theory the tests here also test the backend by proxy as they are testing what is returned and rendered into the front end. The tests can only pass if    the backend retruns the correct information and the front end renders it properly.


Improvements:
  - The error message should display to the user quicker when the search term does not find a pokemon.
  - The rails application should display the json object it is outputting. It does this in a test file currently and not in the file that actually
    receives the request from the front end, as this file is expecting a HTML template due to the way I currently know of setting up a rails app.
  - Improved styling (although I'm not a designer 😅)
  - Better tests. Currently, the test for the search bar (SearchBar.test.js) tests that the correct data is returned from the back end (so tests the back       end by proxy) however the test isn't working properly at the moment. Not currently sure how to make the test simulate user input on components e.g. the     search bar. Implementing the tests in the react app has been the biggest challenge.
