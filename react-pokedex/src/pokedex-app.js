import React, { useState, useEffect } from "react";
import "./pokedex.css";

export default function App() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    async function getPokemon(id) {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const res = await fetch(url);
      const pokemon = await res.json();
      let pokename = pokemon.name;
      let pokeimg = pokemon.sprites.front_default;
      document.querySelector(".name").textContent = pokename;
      document.querySelector(".image").src = pokeimg;
    }
    getPokemon(count);
  });
  function dec() {
    if (count <= 1) {
      return setCount(1);
    } else {
      return setCount(count - 1);
    }
  }
  return (
    <div className="App">
      <article className="number">{count}</article>
      <section>
        <img className="image" src="" />
      </section>
      <div className="name"></div>

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
            if (count >= 150) {
              return setCount(150);
            } else {
              return setCount(count + 1);
            }
          }}
        >
          <img src="https://img.icons8.com/ios/50/000000/plus--v1.png" />
        </button>
      </div>
    </div>
  );
}
