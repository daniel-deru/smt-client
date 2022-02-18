import { useRef } from "react"
import { useParams } from "react-router"
import { SignUpPage } from "../styled/SignUp.styled"


const SignUp = () => {
    const EmailRef = useRef()
    const PasswordRef = useRef()
    const ConfirmPasswordRef = useRef()

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
                    <input ref={EmailRef} type="email" />
                </div>
                <div className="form-field">
                    <label >Password</label>
                    <input ref={PasswordRef} type="password" />
                </div>
                <div className="form-field">
                    <label >Confirm Password</label>
                    <input ref={ConfirmPasswordRef} type="password" />
                </div>
                <div className="form-field">
                    <button type='button'>Create Account</button>
                </div>
            </form>
        
    </SignUpPage>
  )
}

export default SignUp