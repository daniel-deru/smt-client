import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderComponent } from '../styled/Header.styled'

const Header = () => {
  return (
    <HeaderComponent>
      <img src="../images/smt logo 400x200.png" alt="" />
      {/* <img src="./images/SMT Logo 1000x600.png" alt="" /> */}
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
        </ul>
        <button type='button'>Logout</button>
      </nav>
    </HeaderComponent>
  )
}

export default Header