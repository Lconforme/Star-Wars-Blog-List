import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cards, Cards2, Cards3 } from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.characters);
  return (
    <div>
      <div className="data-row row text-center mt-5">
        {store.characters.map((item, index) => {
          return (
            <div className="col" key={index}>
              <Cards character={item} i={index} />
            </div>
          );
        })}
      </div>
      <div className="data-row row text-center mt-5">
        {store.planets.map((item, index) => {
          return (
            <div className="col" key={index}>
              <Cards2 planets={item} i={index} />
            </div>
          );
        })}
      </div>
      <div className="data-row row text-center mt-5">
        {store.starships.map((item, index) => {
          return (
            <div className="col" key={index}>
              <Cards3 starships={item} i={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
