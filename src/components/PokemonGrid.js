import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PokemonCard from "./PokemonCard";

function PokemonGrid({ pokemons, handleClick }) {
  const [pokeCards, setPokeCards] = useState(null);

  //   console.log(pokemons);
  useEffect(() => {
    if (pokemons.length > 0) {
      const myCards = pokemons.map((pok) => (
        <PokemonCard
          name={pok.name}
          image={pok.image}
          handleClick={handleClick}
        />
      ));
      setPokeCards(myCards);
    }
  }, [pokemons]);

  return pokeCards === null ? (
    <h2>...loading Cards</h2>
  ) : (
    <Container>
      <Row className="mb-5 mt-5">
        <Col>{pokeCards[0]}</Col>
        <Col>{pokeCards[1]}</Col>
        <Col>{pokeCards[2]}</Col>
        <Col>{pokeCards[3]}</Col>
        <Col>{pokeCards[4]}</Col>
      </Row>
      <Row>
        <Col>{pokeCards[5]}</Col>
        <Col>{pokeCards[6]}</Col>
        <Col>{pokeCards[7]}</Col>
        <Col>{pokeCards[8]}</Col>
        <Col>{pokeCards[9]}</Col>
      </Row>
    </Container>
  );
}

export default PokemonGrid;
