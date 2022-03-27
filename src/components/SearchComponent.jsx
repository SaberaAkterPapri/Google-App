import React from 'react';
import mic from '../assests/images/google-mic.svg';


const SearchComponent = () => {
  return (
    <React.Fragment>
      
        <div id='search-box'>
          <input type="text" placeholder='' />
          <img src={mic} alt="" className='mic-icon'/> 
        </div>
      
    </React.Fragment>
  )
}

export default SearchComponent;