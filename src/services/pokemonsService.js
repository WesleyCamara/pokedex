const baseUrl = 'https://pokeapi.co/api/v2/';

export const getTypes = async () => {
  const response = await fetch(`${baseUrl}type`);
  return await response.json();
};
