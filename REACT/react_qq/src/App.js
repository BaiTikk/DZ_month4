import './App.css';

import React from 'react';

function Baitik(props) {
    return (
        <div>
            <h2>Hello{props.name}</h2>
        </div>
    );
}

function App() {
  return (
    <div className="App">
      <h3>Hello world</h3>
        <Baitik name=' Bitik'/>
        <Baitik name=' Max'/>
        <Baitik name=' Akjol'/>
        <Baitik name=' Bayas'/>
    </div>
  );
}
export default App;