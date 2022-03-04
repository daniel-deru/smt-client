import { useRef, useState } from "react"
import { LoginPage } from "../styled/Login.styled"
import {FaEyeSlash, FaEye} from "react-icons/fa"
import axios from "axios"
import { useNavigate } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { login } from "../store/user"

 



const Login = () => {
    const EmailRef = useRef()
    const PasswordRef = useRef()

    const navigate = useNavigate()

    const [passwordVisibility, setPasswordVisibility] = useState()
    const [error, setError] = useState("")

    let user = useSelector(state => state.user)
    let dispatch = useDispatch()

    const updatePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility)
        PasswordRef.current.type = passwordVisibility ? "password" : "text"
    
    }

    const loginHandler = async () => {
        const payload = {
            email: EmailRef.current.value,
            password: PasswordRef.current.value
        }
        const headers = {
            'Access-Control-Allow-Credentials': true,
            'content-type': "application/json",
            'accept': 'application/json',
            withCredentials: true
        }
        try {
            const login_request = await axios.post("http://localhost:8000/users/login", payload, headers)
            const response = login_request.data
            if(response.pass){
                dispatch(login(
                    {
                    name: response.name,
                    email: response.email,
                    }
                ))
            navigate("/dashboard")
            }
        } catch (e) {
            console.log(e)
            setError(e?.response?.data?.message)
        }
        
    }
  return (
    <LoginPage>
                <div>
                    <img src="./images/smt-logo-full.png" alt="" />     
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
                        <button type='button' onClick={() => loginHandler()}>Login</button>
                    </div>

                </form>
                <div className="error">{error}</div>
            
        </LoginPage>
  )
}

export default Login