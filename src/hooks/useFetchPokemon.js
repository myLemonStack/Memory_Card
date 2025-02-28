import { useEffect, useState } from "react";

function useFetchPokemon(pokemons) {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!pokemons || pokemons.length === 0) return;

    async function fetchPokemon(pokemons) {
      try {
        const list = await Promise.all(
          pokemons.map(async (pokemon) => {
            const resp = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
            );
            const data = await resp.json();

            const imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`;
            return { name: data.name, image: imageUrl };
          })
        );
        setRes(list);
      } catch (err) {
        setError(`Error Bro`);
      }
    }
    fetchPokemon(pokemons);
  }, [pokemons]);
  return { res, error };
}

export default useFetchPokemon;
