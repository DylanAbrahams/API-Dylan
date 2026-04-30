const KEY = "my_pokemon_list";

export function loadPokemon() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function savePokemon(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function addPokemon(pokemon) {
  const list = loadPokemon();
  list.push(pokemon);
  savePokemon(list);

  window.dispatchEvent(new Event("pokemon-updated"));
}

export function removePokemon(name) {
  const list = loadPokemon().filter((p) => p.name !== name);
  savePokemon(list);

  window.dispatchEvent(new Event("pokemon-updated"));
}