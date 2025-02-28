import { Card } from "react-bootstrap";

function PokemonCard({ name, image, handleClick }) {
  return (
    <Card
      style={{
        width: "12rem",
        height: "16rem",
        border: "2px solid",
        borderRadius: "10%",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onClick={() => handleClick(name)}
    >
      <Card.Img
        variant="top"
        src={image}
        style={{ width: "100%", height: "200px", objectFit: "contain" }}
      />
      <Card.Body
        style={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Card.Title
          style={{
            fontSize: "1.2rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
          }}
        >
          {name}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
