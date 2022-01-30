import React from 'react';

const Categories = ({name,description,price,image}) => {
  return (
    <div className='categorya'>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h4>{price}</h4>
        <img src={image}/>
    </div>);
};

export default Categories;
