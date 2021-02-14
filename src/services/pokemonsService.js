const baseUrl = 'https://pokeapi.co/api/v2/';

export const getTypes = async () => {
  try {
    const response = await fetch(`${baseUrl}type`);
    if (!response.ok)
      throw new Error(`Tipos não encontrados, erro: ${response.status}`);
    return response.json();
  } catch (err) {
    console.error(err);
  } finally {
    console.log('loading false');
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
  } finally {
    console.log('loading false');
  }
};
