import React from 'react'

const Bread = ({bread}) => {
  return (
    <div className='products'>        
      <h4 className='name'>{bread.name}</h4>
      <div>{bread.description}</div>
      <div>{bread.price}</div> 
      <img src={bread.image}/>
    </div>
  )
}

export default Bread