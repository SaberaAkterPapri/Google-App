import React from 'react';
import logo from '../assests/images/google.jpg';

const LogoComponent = () => {
  return (
    <React.Fragment>
      <div className='box__logo-image'>
      <img src={logo} alt="" />
      </div>
    </React.Fragment>
  )
}

export default LogoComponent;