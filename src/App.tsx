import React from 'react';
import './App.css';
import PokemonSearch from './components/PokemonSearch'; 

function App() {
  return (
    <div className="App">
      <PokemonSearch name="Max" numberOfPokemons={5}/>
    </div>
  );
}

export default App;
