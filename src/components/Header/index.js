import React from 'react';
import coverImage from '../../assets/Jojo_Pics-10.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-3">
      <h1>Joseph Teklu</h1>
      <img src={coverImage} alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;
