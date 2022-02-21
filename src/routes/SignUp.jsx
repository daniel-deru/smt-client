import { useRef, useState, useEffect } from "react"
import { SignUpPage } from "../styled/SignUp.styled"
import axios from "axios"
import { useSearchParams } from "react-router-dom"


const SignUp = () => {
    const PASSWORD = 0
    const CONFIRM_PASSWORD = 1
    const EmailRef = useRef()
    const PasswordRef = useRef()
    const ConfirmPasswordRef = useRef()

    const [searchParams] = useSearchParams()

    const [errors, setErrors] = useState([])

    
    const submit = async () => {
        
        let payload = {
            email: EmailRef.current.value,
            password1: PasswordRef.current.value,
            password2: ConfirmPasswordRef.current.value
        }

        let goodInfo = verify(payload)
        if(goodInfo){
            // console.log("good to send")
            // const createAccount = await axios.post("https://localhost:8000/signup", payload)
            // let response = createAccount.data
        }
    }

    const verify = ({email, password1, password2}) => {
        let passwordLowerRegEx = /[a-z]+/g
        let passwordUpperRegEx = /[A-Z]+/g
        let passwordNumericRegEx = /[0-9]+/g
        let passwordAlpha = /[^0-9a-z]+/gi
        let errorArray = []
        setErrors([])

        if(!password1){
            errorArray[PASSWORD] = 'Please Provide a password.'
            setErrors(errorArray)
        } else if(password1.length < 8 || password1.length > 16){
            errorArray[PASSWORD] = "password must be between 8 and 16 characters long."
            setErrors(errorArray)
        } else if(!passwordLowerRegEx.test(password1)){
            errorArray[PASSWORD] = "password must contain lowercase and uppercase letters."
            setErrors(errorArray)
        } else if(!passwordUpperRegEx.test(password1)){
            errorArray[PASSWORD] = "password must contain lowercase and uppercase letters."
            setErrors(errorArray)
        } else if(!passwordNumericRegEx.test(password1)){
            errorArray[PASSWORD] = "password must contain atleast one number"
            setErrors(errorArray)
        } else if(!passwordAlpha.test(password1)){
            errorArray[PASSWORD] = "password must contain atleast one special character"
            setErrors(errorArray)
        }



        if(!password2){
            errorArray[CONFIRM_PASSWORD] = "Please confirm password."
            setErrors(errorArray)
        }

        if(password1 !== password2){
            errorArray[CONFIRM_PASSWORD] = "Passwords don't match."
            setErrors(errorArray)
        }

        if(errorArray.length == 0){
            return true
        } 
        else {
           return false
        }
    }

    const verifyUser = async () => {
        console.log(searchParams.get("id"))
        let verified = await axios.post("http://localhost:8000/api/verify/email", {code: searchParams.get("id")})
        let result = verified.data
        if(result.pass){
            EmailRef.current.value = result.email
        }
    }


    useEffect(() => {
        verifyUser()
    }, [])


    return (
        <SignUpPage>
                <div>
                    <img src="./images/SMT Logo 1000x600.png" alt="" />     
                </div>
                <section>
                    <h1>Last Step!</h1>
                    <p>Confirm your email address and set a password</p>
                </section>
                <form >

                    <div className="form-field">
                        <label >Email</label>
                        <input ref={EmailRef} type="email" readOnly className="field"/>
                    </div>

                    <div className="form-field">
                        <label >Password {errors[PASSWORD] && <span className="error-message">{errors[PASSWORD]}</span>}</label>
                        <input ref={PasswordRef} type="password" className={errors[PASSWORD] ? "error": "field"}/>
                    </div>

                    <div className="form-field">
                        <label >Confirm Password {errors[CONFIRM_PASSWORD] && <span className="error-message">{errors[CONFIRM_PASSWORD]}</span>}</label>
                        <input ref={ConfirmPasswordRef} type="password" className={errors[CONFIRM_PASSWORD] ? "error": "field"}/>
                    </div>

                    <div className="form-field">
                        <button type='button' onClick={() => submit()}>Create Account</button>
                    </div>

                </form>
                <ul>
                    {/* {messages.map((message) => <li key={message}>{message}</li>)} */}
                </ul>
            
        </SignUpPage>
    )
}

export default SignUp