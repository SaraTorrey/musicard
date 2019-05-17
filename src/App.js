import React from 'react';
import Viola from './img/Viola.jpeg';

import Instrument from './Instrument';
import './App.css';

function App() {
  return (
    <div className="App">
        <Instrument
            id={1}
            name="Bagpipe"
            type="woodwind"
            url="https://4.imimg.com/data4/HH/SD/MY-13098778/musical-rosewood-bagpipes-500x500.jpg"
            age={350}
        />
        <Instrument
            id={8}
            name="Viola"
            type="string"
            url="https://www.thomann.de/pics/bdb/111059/12881517_800.jpg"
            age={450}
        />
    </div>
  );
}

export default App;
