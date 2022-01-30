import React from 'react';

const Header = ({header}) => {
  return (
    <header>
        {header}
    </header>
  )
}
Header.defaultProps={
   header:'Buy cheap' 
}
export default Header;
