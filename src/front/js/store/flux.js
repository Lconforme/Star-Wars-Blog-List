const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      starships: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      getCharacters: () => {
        fetch("https://swapi.dev/api/people")
          .then((resp) => resp.json())
          .then((info) => setStore({ characters: info.results }))
          .catch((error) => console.log(error));
      },
      getPlanets: () => {
        fetch("https://swapi.dev/api/planets")
          .then((resp) => resp.json())
          .then((info) => setStore({ planets: info.results }))
          .catch((error) => console.log(error));
      },
      getStarships: () => {
        fetch("https://swapi.dev/api/starships")
          .then((resp) => resp.json())
          .then((info) => {
            console.log("###these are the starships", info.results);
            setStore({ starships: info.results });
          })
          .catch((error) => console.log(error));
      },

      addFavorites: (item) => {
        let myFavorites = getStore().favorites;
        let selected = myFavorites.find((element) => element === item);
        if (selected) {
          myFavorites = myFavorites.filter((element) => item !== element);
          setStore({ favorites: myFavorites });
        } else {
          myFavorites = [...myFavorites, item];
          setStore({ favorites: myFavorites });
        }
        console.log(getStore().favorites);
      },
      deleteFavorites: (index) => {
        let myFavorites = getStore().favorites;
        myFavorites = myFavorites.filter((item, idx) => index !== idx);
        setStore({ favorites: myFavorites });
      },
    },
  };
};

export default getState;
