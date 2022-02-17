import React from 'react'
import Bread from './Bread'
import Sweets from './Sweets'
import DairyProducts from './DairyProducts'

const CategoriesOther = ({cat}) => {
  return (
    <div className='categoryaName'>
        <h3>{cat.title}</h3>
        {cat.bread?
            cat.productsB.map((bread,i)=>
                <Bread key={i} bread={bread} />)
            :!cat.sweets?
                cat.productsD.map((dairyProducts,i)=>
                    <DairyProducts key={i} dairyProducts={dairyProducts} />)
                    :cat.productsS.map((sweets,i)=>
                    <Sweets key={i} sweets={sweets} />)            
        }
    </div>
  )
}

export default CategoriesOther