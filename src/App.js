import React from 'react';
import './App.css';
import Character from './components/Character'
import FacebookButton from './components/FacebookButton'
import TwitterButton from './components/TwitterButton'
import NewCharacterButton from './components/NewCharacterButton'

function App() {
  return (
    <div className="App">
       <h1>Chinese Character Generator</h1>
       <Character />
       <FacebookButton />
       <TwitterButton />
       <NewCharacterButton />
    </div>

  );

}

export default App;
