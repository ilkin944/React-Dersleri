import './App.css';
import { useState } from 'react';
import CardContainer from './components/CardContainer'

function App() {
  const [ad, setAd] = useState("React-a");
  const [goster, setGoster] = useState(true)

  return (
    <div className='main'>
      <nav className='navbar'>
        <h3>{ad} xoş gəlmisiniz!</h3>
        <button type='button' onClick={() => setAd("Qonaq")}>Dəyiş</button>
        <button type='button' onClick={() => setGoster(!goster)}>
          {goster ? "Gizlət" : "Göstər"}
        </button>
      </nav>
      {
        goster && (<CardContainer/>)
      }
    </div>
  );
}

export default App;