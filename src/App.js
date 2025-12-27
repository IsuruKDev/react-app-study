
import { useState } from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState(0);

  function addClickListener(){
    setCount(prev => prev + 1);
  }

  return (
    <div className="App">
      <button onClick={addClickListener}>Clicked {count} times</button>
    </div>
  );
}

export default App;
