import React from 'react';
import CategoriesOther from './CategoriesOther';


const Categories = ({categorya}) => {
  return (
    <div>
       {categorya.map((cat,i)=>
        <CategoriesOther key={i} cat={cat}/>
        )} 
    </div>
    );
};

export default Categories;
