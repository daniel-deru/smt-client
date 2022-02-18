import { useRef, useState, useEffect } from "react"
import { SignUpPage } from "../styled/SignUp.styled"
import axios from "axios"


const SignUp = () => {
    const EmailRef = useRef()
    const PasswordRef = useRef()
    const ConfirmPasswordRef = useRef()

    const [messages, setMessages] = useState([])

    const addMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message])
    }

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


        setMessages([])

        let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if(!email){
            addMessage("Please enter your email.")
        }
        
        if(!emailRegEx.test(email)){
           addMessage("Your email is not valid.")
        }

        if(!password1){
            addMessage("Please enter a password.")
        }



        if(password1.length < 8 || password1.length > 16){
            addMessage("password must be between 8 and 16 characters long.")
        }

        if(!password2){
            addMessage("Please confirm password.")
        }

        if(password1 !== password2){
            addMessage("Passwords don't match.")
        }

        if(messages.length == 0){
            return true
        } 
        else {
           return false
        }
    }


    useEffect(() => {
        // console.log(messages)
    }, [messages])


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