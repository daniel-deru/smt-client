import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import axios from 'axios'


import { HeaderComponent } from '../styled/Header.styled'

const Header = () => {
  const navigate = useNavigate()
  const logout = () => {
    try{
      const request = axios.post("/users/logout", {}, {withCredentials: true})
      if(request.data.pass){
        navigate("/login")
      }
    } catch (e){
      navigate("/login")
    }
  }
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
        </ul>
        <button type='button' onClick={() => logout()}>Logout</button>
      </nav>
    </HeaderComponent>
  )
}

export default Header