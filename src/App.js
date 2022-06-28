import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import boxes from './boxes';
import Box from './components/Box';

function App() {


  const[squares,setSquares] = useState(boxes)

  function toggle(id) {
    setSquares(prevSq => {
      return prevSq.map((sq) => {
        return sq.id === id ? {...sq, on : !sq.on} : sq
      })
    })
  }

const squareElements = squares.map(square => (
  <Box 
      key={square.id} 
      // id={square.id}
      on={square.on} 
      // toggle={toggle}
      toggle={() => toggle(square.id)}
  />
))


  return (
    <div className="App">
      {squareElements}
    </div>
  );
}

export default App;
