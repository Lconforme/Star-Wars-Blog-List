import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="jumbotron">
      <div className="d-flex">
        <img
          className="details-image"
          src="https://media.timeout.com/images/105863223/750/422/image.jpg"
        />
        <div className="ms-2 text-center">
          <h3>{store.planets[params.theid].name}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi
            morbi tempus iaculis urna id volutpat. Sed egestas egestas fringilla
            phasellus faucibus scelerisque eleifend donec pretium. Lorem donec
            massa sapien faucibus et. Ipsum faucibus vitae aliquet nec
            ullamcorper sit amet risus nullam. Adipiscing diam donec adipiscing
            tristique risus nec feugiat in fermentum. Mauris a diam maecenas sed
            enim ut sem viverra. Fusce ut placerat orci nulla pellentesque
            dignissim enim sit amet. Dapibus ultrices in iaculis nunc sed augue
            lacus viverra vitae. Nisl suscipit adipiscing bibendum est. Tortor
            vitae purus faucibus ornare suspendisse sed nisi lacus. Metus
            vulputate eu scelerisque felis imperdiet proin. Et malesuada fames
            ac turpis. Augue mauris augue neque gravida in. Fames ac turpis
            egestas sed. Pellentesque id nibh tortor id aliquet lectus proin.
          </p>
        </div>
      </div>
      <div className="d-flex ms-5 mt-4">
        <div className="me-5">
          <h4>Name</h4>
          <p>{store.planets[params.theid].name}</p>
        </div>

        <div className="me-5">
          <h4>Climate</h4>
          <p>{store.planets[params.theid].climate}</p>
        </div>

        <div className="me-5">
          <h4>Population</h4>
          <p>{store.planets[params.theid].population}</p>
        </div>

        <div className="me-5">
          <h4>Orbital Period</h4>
          <p>{store.planets[params.theid].orbital_period}</p>
        </div>

        <div className="me-5">
          <h4>Rotation Period</h4>
          <p>{store.planets[params.theid].rotation_period}</p>
        </div>

        <div className="me-5">
          <h4>Diameter</h4>
          <p>{store.planets[params.theid].diameter}</p>
        </div>
      </div>
    </div>
  );
};
