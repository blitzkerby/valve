import React from 'react';
import { Input } from './Input';
import { useState } from 'react';

function App() {
  const [colors, setColors] = useState([]);
  
  const addColorAtIndex = (newColor, index) => {
    // Todo: Add 'newColor' to 'colors' at the designated 'index'
    // and update state
    let tempList = [...colors]
    tempList.splice(index, 0, newColor)

    setColors(tempList);
    console.log(colors)
  };
  
  const renderedColors = colors.map((color, i) => {
      return <li key={i}>{color}</li>
  });
  
  return (
    <div>
      <Input onSubmit={addColorAtIndex} max={colors.length} />
      <ul>
        {renderedColors}
      </ul>
    </div>
  );
}

export default App;
