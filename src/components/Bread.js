import React from 'react'

const Bread = ({pro}) => {
  return (
    <div className='partC'>
        <div className='product'>
            <h4 className='name'>{pro.name}</h4>
            <div>{pro.description}</div>
            <div>{pro.price}</div> 
            <img src={pro.image}/>   
        </div>

    </div>
  )
}

export default Bread