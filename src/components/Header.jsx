import React from 'react'
import myImage from '../me.jpg';
import '../style/Header.css';
export default function Header() {
  return (
    <div className='header'>
      <div className="image">
        <img src={myImage} alt="" />
      </div>
      <div className="name">
        <span>Mahmoud</span>
        <span>Elbalhi</span>
        <h3>Front-End developer</h3>
      </div>
    </div>
  )
}
