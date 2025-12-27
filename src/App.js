
import { useState } from 'react';
import './App.css';
import BtnCounter from './BtnCounter';
import BtnClear from './BtnClear';

function App() {

  const [count,setCount] = useState(0);

  return (
    <div className='App'>
      <div className='container'>
        <BtnCounter
        count={count} 
        setCount={setCount} 
        />
        <BtnCounter 
          count={count} 
          setCount={setCount} 
        />
        <BtnClear 
          setCount={setCount}
        />
      </div>
      
    </div>
  );
}

export default App;
