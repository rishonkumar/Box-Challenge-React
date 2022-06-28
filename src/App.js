import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import boxes from './boxes';
import Box from './components/Box';

function App() {


  const[squares,setSquares] = useState(boxes)

  const elements = squares.map(ele => (
    <Box key = {ele.id} on = {ele.on}/>
  ))


  return (
    <div className="App">
      {elements}
    </div>
  );
}

export default App;
