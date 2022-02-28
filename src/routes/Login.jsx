import { useRef, useState } from "react"
import { LoginPage } from "../styled/Login.styled"
import {FaEyeSlash, FaEye} from "react-icons/fa"
import axios from "axios"
import { Navigate } from "react-router"
import { useNavigate } from "react-router"

 



const Login = () => {
    const EmailRef = useRef()
    const PasswordRef = useRef()
    const navigate = useNavigate()
    const [passwordVisibility, setPasswordVisibility] = useState()

    

    const updatePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility)
        PasswordRef.current.type = passwordVisibility ? "password" : "text"
    
    }

    const login = async () => {
        const payload = {
            email: EmailRef.current.value,
            password: PasswordRef.current.value
        }
        console.log("hello")
        const login_request = await axios.post("http://localhost:8000/users/login", payload)
        const response = login_request.data
        console.log(response)
        if(response.pass){
           navigate("/dashboard")
        }
    }
  return (
    <LoginPage>
                <div>
                    <img src="./images/SMT Logo 1000x600.png" alt="" />     
                </div>
                <section>
                    <p>Log into your account</p>
                </section>
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
                        <button type='button' onClick={() => login()}>Login</button>
                    </div>

                </form>
                <ul>
                    {/* {messages.map((message) => <li key={message}>{message}</li>)} */}
                </ul>
            
        </LoginPage>
  )
}

export default Login