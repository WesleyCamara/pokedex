const baseUrl = 'https://pokeapi.co/api/v2/';

export const getTypes = async () => {
  try {
    const response = await fetch(`${baseUrl}type`);
    if (!response.ok)
      throw new Error(`Tipos não encontrados, erro: ${response.status}`);
    return response.json();
  } catch (err) {
    console.error(err);
  }
};

export const getPokemon = async (pokemon) => {
  try {
    const response = await fetch(`${baseUrl}pokemon/${pokemon}`);
    if (!response.ok)
      throw new Error(`Pokémon não encontrado, erro: ${response.status}`);
    return response.json();
  } catch (err) {
    console.error(err);
  }
};

export const getPokemonByType = async (type) => {
  let pokemonsList = [];
  type.forEach(async (item) => {
    try {
      const response = await fetch(`${baseUrl}type/${item}`);
      if (!response.ok)
        throw new Error(
          `Não foram encontrados Pokémons com o tipo selecionado, erro: ${response.status}`,
        );
      const json = await response.json();
      pokemonsList.push(...json.pokemon);
    } catch (err) {
      console.error(err);
    }
  });
  return pokemonsList;
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(`${url}`);
    if (!response.ok)
      throw new Error(`Pokémon não encontrado, erro: ${response.status}`);
    return response.json();
  } catch (err) {
    console.error(err);
  }
};
