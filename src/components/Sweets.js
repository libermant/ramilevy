import React from 'react'

const Sweets = ({sweets}) => {
  return (
    <div className='products'>        
      <h4 className='name'>{sweets.name}</h4>
      <div>{sweets.description}</div>
      <div>{sweets.price}</div> 
      <img src={sweets.image}/>
    </div>
  )
}

export default Sweets