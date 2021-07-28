
export const fetchCharacters = async () => {
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=20&page=1');
  const json = await res.json();
  return json;
};
