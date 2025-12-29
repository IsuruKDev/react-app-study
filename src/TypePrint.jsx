import React, { useState } from 'react'

function TypePrint() {

  const [inputText, setInputText] = useState('');

  const textChangeListener = (event)=>{
    setInputText(event.target.value);
  }

  const textReset = ()=>{
    setInputText('');
  }

  const addExample = ()=>{
    setInputText("Alice");
    
  }

  return (
    <>
        <div className='input-text'>
            <input type='text' onChange={textChangeListener} placeholder='Type a name here' value={inputText}/>
            <button onClick={textReset}>Reset</button>
            <button onClick={addExample}>Example</button>
        </div>
        Hello {inputText}
    </>
    
  )
}

export default TypePrint