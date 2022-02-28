import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <img src="./images/SMT Logo 1000x600.png" alt="" />
      <nav>
        <ul>
          <li>
            <Link to="https://www.smartmetatec.com">Home</Link>
          </li>
          <li>
            <Link to="https://www.smartmetatec.com/products">Our Products</Link>
          </li>
          <li>
            <Link to="https://www.smartmetatec.com/account">Account</Link>
          </li>
          <li>
            <button type='button'>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header