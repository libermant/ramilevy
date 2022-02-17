import React from 'react'



const DairyProducts = ({dairyProducts}) => {
  return (
    <div className='products'>        
      <h4 className='name'>{dairyProducts.name}</h4>
      <div>{dairyProducts.description}</div>
      <div>{dairyProducts.price}</div> 
      <img src={dairyProducts.image}/>
   </div>
  )
}

export default DairyProducts