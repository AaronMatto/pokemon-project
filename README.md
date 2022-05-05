# Pokemon-API-Project

Overview:
 -  A project to build a basic API that acts as a simple search engine for Pokemon, allowing users to see their picture and a description translated into
    Shakespearean English.
 -  The back end hosts a server as a rails application which is sent requests via the front end, which hosts a react application.
 -  In the front end, the search term (pokemon) entered by the user is obtained and sent as a request to the back end.
 -  The back end works by sending requests to two different APIs; first the pokeAPI, to retrieve the description and image, and second the 
    Shakespear fun translations API to translate the acquired description. Upon completing this process, the back end acts as an API itself by building
    a JSON object with this information which is sent back to the front end.
 -  The front end then uses the information in the returned JSON and presents it to the user, showing them the name, picture and translated description of
    the relevant pokemon.
 -  If the user searches for a pokemon that does not exist, they will see a message with their search term displayed to them informing them to check for spelling errors.
 -  It is worth noting that the back ends' functionality could be entirely encorporated into the front end, so this application doesn't necessarily require a back end; 
    which was built for practise.
 -  Also, the fun translations API only accepts 5 requests per hour, so it is only possible to search for 5 pokemon per hour as a result.
 -  Finally, there are no Pokemon that include a whitespace in their name, so the front end does not require functionality for search terms including a space. 


Please install the following technologies to run the app:
  -  VS code
  -  Ruby, version 2.7.4 and up
  -  Rails, version 6.0.4.8 and up
  -  React, version 18.1.0 and up
  -  Node, version 14.15.5 and up


Running the app:
  -  Run 'bundle install' from the command line in the directory of 'pokemon-api'
  -  Run 'rails s' in the directory of 'pokemon-api'
  -  Ensure the rails server is running on port 3000 as the front end is expecting to request 'http://localhost:3000/pokemon/SearchedPokemon'
  -  Run 'npm start' in the directory of 'pokemon-react', then press 'y' if prompted to launch the server on another port
  -  Search away!

Testing:


Improvements:
  - The error message should display to the user quicker when the search term does not find a pokemon.
  - Improved styling
