import { Link, useLocation, NavLink } from "react-router-dom"
import { NavComponent } from "../styled/Nav.styled"
import { useSelector } from "react-redux"
import { useEffect } from "react"

let username = "daniel"

const Nav = () => {
    const location = useLocation()
    
    const { user } = useSelector((state) => state.user)


        useEffect(() => {
            // console.log(user)
        }, [])

    return (
        <NavComponent>
            <section>
                <img  src={`https://avatars.dicebear.com/api/avataaars/${user.display_name}.svg`} alt="" />
                <h4>{user.display_name}</h4>
            </section>
            <ul>
                <li>
                    <NavLink to="downloads" activeClassName="active">Downloads</NavLink>
                </li>
                <li>
                    <NavLink to="products" activeClassName="active">Products</NavLink>
                </li>
                <li>
                    <NavLink to="account" activeClassName="active">Account</NavLink>
                </li>
                <li>
                    <NavLink to="support" activeClassName="active">Support</NavLink>
                </li>
                {/* <li>
                    <Link to="licences" >Licences</Link>
                </li> */}
            </ul>
        </NavComponent>
    )
}

export default Nav