import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import pokemons from "./db/pokemonNamesData";
import useFetchPokemon from "./hooks/useFetchPokemon";
import PokemonGrid from "./components/PokemonGrid";

function App() {
  const { res, error } = useFetchPokemon(pokemons);
  const [pokemonData, setPokemondata] = useState(null);
  const [clickedPoke, setClickedPoke] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (!res) return;
    setPokemondata(res);
  }, [res]);

  function shuffleArray() {
    let arr = [...pokemonData];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setPokemondata(arr);
  }

  function handleClick(pokemon) {
    setClickedPoke((arr) => {
      if (arr.includes(pokemon)) {
        setHighScore((s) => {
          if (s > score) return s;
          else return score;
        });
        setScore(0);

        setPokemondata(res);
        return [];
      } else {
        setScore(clickedPoke.length + 1);
        shuffleArray();
        return [...arr, pokemon];
      }
    });
  }

  return error ? (
    <h1>Bro there is an error</h1>
  ) : (
    <div>
      <h1 style={{ textAlign: "center" }}>Lets Test Your Memmory</h1>
      <p style={{ textAlign: "center" }}>
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      {pokemonData !== null ? (
        <>
          <PokemonGrid pokemons={pokemonData} handleClick={handleClick} />
          <h3 style={{ textAlign: "center", marginTop: "40px" }}>
            Score: {score}
          </h3>
          <h3 style={{ textAlign: "center" }}>High Score: {highScore}</h3>
        </>
      ) : (
        <h1 style={{ textAlign: "center" }}>...loading Game</h1>
      )}
    </div>
  );
}

export default App;
