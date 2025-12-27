

function BtnCounter({count,setCount}) {

  function addClickListener(){
    setCount(prev => prev + 1);
  }

  return (
    <div>
      <button className='clicked-btn' onClick={addClickListener}>Clicked {count} {count ===1 ? (
        <>time</>):(
        <>times</>)}
      </button>
    </div>
  )
}

export default BtnCounter