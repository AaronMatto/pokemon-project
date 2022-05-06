export const getDataTest = async (pokemon_name) => {

  const response = await fetch(`http://localhost:3000/pokemon/${pokemon_name}`);
  const pokemon_data = response.json();
  return pokemon_data;
}

export default getDataTest
