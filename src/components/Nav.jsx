import { Link } from "react-router-dom"
import { NavComponent } from "../styled/Nav.styled"
import { useState, useEffect} from "react"
import axios from "axios"

let username = "daniel"

const Nav = () => {


    return (
        <NavComponent>
            <section>
                <img  src={`https://avatars.dicebear.com/api/avataaars/${username}.svg`} alt="" />
                <h4>{username}</h4>
            </section>
            <ul>
                <li>
                    <Link to="downloads" >Downloads</Link>
                </li>
                <li>
                    <Link to="products" >Products</Link>
                </li>
                <li>
                    <Link to="account" >Account</Link>
                </li>
                <li>
                    <Link to="support" >Support</Link>
                </li>
                <li>
                    <Link to="downloads" >Downloads</Link>
                </li>
            </ul>
        </NavComponent>
    )
}

export default Nav