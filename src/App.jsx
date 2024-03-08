import React, { useState, useEffect } from "react";
import { BuscadorGifs } from "./components/buscadorDeGifs";
import '../public/styles.css';

function AppGifs() {
  const [valorInput, setValorInput] = useState('');
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (valorInput !== '') {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=3282hC3PdNUhyMQHdjIcFynRSw4v9Mge&q=${valorInput}`;
        try {
          const response = await fetch(url);
          const { data } = await response.json();
          setGifs(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [valorInput]);

  const handleChange = (event) => {
    setValorInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <BuscadorGifs
        valorInput={valorInput}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <div className="GifApps">
        {gifs.map(gif => (
          <img className="gifs" key={gif.id} src={gif.images.original.url} alt="" />
        ))}
      </div>
    </div>
  );
}

export default AppGifs;
