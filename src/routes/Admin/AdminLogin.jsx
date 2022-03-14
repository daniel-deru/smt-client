import { useRef, useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa"

import { Login } from '../../styled/Admin/Login.styled'

const AdminLogin = () => {

    const [error, setError] = useState("")
    const [passwordVisibility, setPasswordVisibility] = useState(false)

    const EmailRef = useRef()
    const PasswordRef = useRef()

    const updatePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility)
        PasswordRef.current.type = passwordVisibility ? "password" : "text"
    
    }


    return (
        <Login>
            <div>
                <img src="../images/smt-logo-full.png" alt="" />     
            </div>
            <form >

                <div className="form-field">
                    <label >Email</label>
                    <input ref={EmailRef} type="email" className="field"/>
                </div>

                <div className="form-field">
                    <label >Password </label>
                    <span>
                        <input ref={PasswordRef} type="password" className="field"/>
                        <div className="visible" id="password" onClick={() => updatePasswordVisibility()}>
                            {passwordVisibility ? <FaEye  /> : <FaEyeSlash />}
                        </div>
                    </span>
                    
                </div>
                <div className="form-field">
                    <button type='button'>Login</button>
                </div>

            </form>
            <div className="error">{error}</div>
        </Login>
    )
}

export default AdminLogin