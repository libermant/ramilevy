import React from 'react';
import DairyProducts from './DairyProducts';


const Categories = ({categorya}) => {
  return (
    <div>
       {categorya.map((milk,i)=>
        <DairyProducts key={i} milk={milk}/>
        )} 
    </div>
    );
};

export default Categories;
