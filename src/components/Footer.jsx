import React from 'react';
import logoLong from '../assets/logo-long.png'
const Footer = () => {
  return (
    <footer>
      <img src={logoLong} alt="" width={200} />
      <h3>Dormant Navigation</h3>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Reservations</a>
        </li>
        <li>
          <a href="">Order Online</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
      <h3>Contact</h3>
      <ul>
        <li>
          Email
        </li>
        <li>
          Phone number
        </li>
        <li>
          Adress
        </li>
      </ul>
      <h3>Social Media Link</h3>
      <ul>
        <li>
          Email
        </li>
        <li>
          Phone number
        </li>
        <li>
          Adress
        </li>
      </ul>
    </footer>
  )
}

export default Footer