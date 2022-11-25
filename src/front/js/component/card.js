import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";
import "../../styles/index.css";

export const Cards = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn.vox-cdn.com/thumbor/jh_N8c4NYtQdNPT2PUqz6GfDVJU=/0x0:1347x1534/1820x1213/filters:focal(557x781:771x995):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66748200/skywalker_saga_now_streaming_final_7b3070d1.0.jpeg"
      />
      <Card.Body>
        <Card.Title className="title">{props.character.name}</Card.Title>
        <Card.Text>Hair Color: {props.character.hair_color}</Card.Text>
        <Card.Text>Gender: {props.character.gender}</Card.Text>
        <Card.Text>Eye color: {props.character.eye_color}</Card.Text>

        <div className="navbar">
          <Link to={"characters/" + props.i}>
            <Button variant="primary">Learn More</Button>
          </Link>
          <Button
            onClick={() => actions.addFavorites(props.character.name)}
            variant="warning"
          >
            ♥
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
export const Cards2 = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://www.denofgeek.com/wp-content/uploads/2021/04/best-star-wars-planets.jpg?resize=768%2C432"
      />
      <Card.Body>
        <Card.Title>{props.planets.name}</Card.Title>
        <Card.Text>Population: {props.planets.population}</Card.Text>
        <Card.Text>Terrain: {props.planets.terrain}</Card.Text>

        <div className="navbar">
          <Link to={"planets/" + props.i}>
            <Button variant="primary">Learn More</Button>
          </Link>
          <Button
            onClick={() => actions.addFavorites(props.planets.name)}
            variant="warning"
          >
            ♥
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
export const Cards3 = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://i.ytimg.com/vi/T_JYMmlHU_0/maxresdefault.jpg"
      />
      <Card.Body>
        <Card.Title>{props.starships.name}</Card.Title>
        <Card.Text>Manufacturer: {props.starships.manufacturer}</Card.Text>
        <Card.Text>
          Cost in Credits: {props.starships.cost_in_credits}
        </Card.Text>
        <div className="navbar">
          <Link to={"starships/" + props.i}>
            <Button variant="primary">Learn More</Button>
          </Link>
          <Button
            onClick={() => actions.addFavorites(props.starships.name)}
            variant="warning"
          >
            ♥
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
Cards.propTypes = {
  i: PropTypes.string,
  name: PropTypes.string,
};
