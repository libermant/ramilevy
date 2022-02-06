import React from 'react';
import { useState } from 'react';

/*function stateNav(item){
  if (item=="Bread") {
    
  }
  else if (item=="DairyProducts") {
    
  }
  else (item=="Sweets") {
    
  }
}*/


const   Nav = ({navy,image}) => {
  const[navs,setNewNav]=useState(navy)
  
  const categorya=()=>{    
  setNewNav(...navs/*stateNav(navy)*/)
  }

  return(    
    <div className='nav' onClick={categorya}>
      {navs}
      <img src={image}/> 
    </div>  
  )
}




export default Nav;


