import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(1);
  const [pokeName, setPokeName] = useState();
  const [pokeImg, setPokeImg] = useState();
  async function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    let pokename = pokemon.name;
    function capitalize(s) {
      return s[0].toUpperCase() + s.slice(1);
    }
    let pokeimg = pokemon.sprites.front_default;
    setPokeName(capitalize(pokename));
    setPokeImg(pokeimg);
  }
  useEffect(() => {
    getPokemon(count);
  }, [count]);
  function dec() {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  }
  return (
    <div className="App">
      <article className="number">{count}</article>
      <section>
        <img className="image" src={pokeImg} />
      </section>
      <div className="name">{pokeName}</div>

      <div className="btn-container">
        <button className="btn" onClick={dec}>
          <img src="https://img.icons8.com/ios/50/000000/minus.png" />
        </button>
        <button
          className="btn"
          onClick={() => {
            setCount(1);
          }}
        >
          <img src="https://img.icons8.com/ios/50/000000/recurring-appointment.png" />
        </button>
        <button
          className="btn"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <img src="https://img.icons8.com/ios/50/000000/plus--v1.png" />
        </button>
      </div>
    </div>
  );
}
