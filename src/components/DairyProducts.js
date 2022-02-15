import React from 'react'
import Bread from './Bread'
import Sweets from './Sweets'


const DairyProducts = ({categorya}) => {
  return (
    <div className='partA'>
       <h3>{categorya.title}</h3>
       {categorya.bread?
            categorya.products.map((pro,i)=>
                <Bread key={i} pro={pro}/>)
            :<div className='partB'>
                {!categorya.sweets?
                    <div></div>
                    :categorya.products.map((pro,i)=>
                        <Sweets key={i} pro={pro}/>
                    )
                }
            </div>    
            
       }  
        
    </div>
  )
}

export default DairyProducts