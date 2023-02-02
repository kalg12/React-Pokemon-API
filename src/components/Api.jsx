import React, { useState, useEffect } from "react";

const Api = () => {
  const [data, setData] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  const fetchPokemons = async () => {
    const pokemons = await Promise.all(
      Array.from({ length: 50 }, (_, i) => i + 1).map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
          res.json()
        )
      )
    );
    setData(pokemons);
    SetIsLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <h1>Cargando...</h1>
        </>
      ) : (
        <>
          {data.map(
            (pokemon) =>
              pokemon && (
                <>
                  <div className="card" key={pokemon.id}>
                    <img
                      src={pokemon.sprites.front_default}
                      className="card-img-top"
                      alt="{pokemon.name}"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{pokemon.name}</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="/" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </>
              )
          )}
        </>
      )}
    </>
  );
};

export default Api;
