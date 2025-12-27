

function BtnClear({setCount}) {

  function handleClear() {
    setCount(0);
  }
  
  return (
    <div className='clear-btn' onClick={handleClear}>Clear</div>
  )
}

export default BtnClear