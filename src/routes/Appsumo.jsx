import axios from "axios"
import { useRef, useState, useEffect } from "react"

import { AppSumoPage } from '../styled/AppSumo.styled'

const Appsumo = () => {
  const FIRSTNAME = 0
  const LASTNAME = 1
  const EMAIL = 2
  const CODE = 3
  const codeRef = useRef()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()

  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [firstNameError, setFirstNameError] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [codeError, setcodeError] = useState("")
  const [errors, setErrors] = useState([])


  const verify = async ({code, firstName, lastName, email}) => {
    let nameRef = /^[a-zA-Z\s]*$/gi
    let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    // setFirstNameError("")
    // setLastNameError("")
    // setEmailError("")
    // setcodeError("")
    setErrors([])
    let errorArray = []

    if(!firstName){
      errorArray[FIRSTNAME] = "First name cannot be empty."
      // setErrors((prevErrors) => prevErrors[FIRSTNAME] = "First name cannot be empty.")
      // setFirstNameError("First name cannot be empty.")
    }else if(!nameRef.test(firstName)){
      errorArray[FIRSTNAME] = "First name cannot be empty."
      // setErrors((prevErrors) => prevErrors[FIRSTNAME] = "First name is not a valid name.")
      // setFirstNameError("First name is not a valid name.")
    }

    if(!lastName){
      errorArray[FIRSTNAME] = "First name cannot be empty."
      // setErrors((prevErrors) => prevErrors[LASTNAME] = "Last Name cannot be empty.")
      // setLastNameError("Last Name cannot be empty.")
    } else if(!nameRef.test(lastName)){
      
      errorArray[FIRSTNAME] = "First name cannot be empty."
      // setErrors((prevErrors) => prevErrors[LASTNAME] = "Last name is not a valid name.")
      // setLastNameError("Last name is not a valid name.")
    }

    if(!email){
      errorArray[FIRSTNAME] = "First name cannot be empty."
      // setErrors((prevErrors) => prevErrors[EMAIL] = "Email cannot be empty.")
      // setEmailError("Email cannot be empty.")
    } else if(!emailRegEx.test(email)){
      errorArray[FIRSTNAME] = "First name cannot be empty."
      // setErrors((prevErrors) => prevErrors[EMAIL] = "Your email is invalid.")
      // setEmailError("Your email is invalid.")
    }


    if(!code){
      errorArray[FIRSTNAME] = "First name cannot be empty."
      // setErrors((prevErrors) => prevErrors[CODE] = "You did not provide a code.")
      // setcodeError("You did not provide a code.")
    } else if(code && !firstNameError && !lastNameError && !emailError){

      let validCode = await axios.post("http://localhost:8000/verify/appsumo", {code})
  
      if(!validCode.data.pass){
        errorArray[FIRSTNAME] = "First name cannot be empty."
        // setErrors((prevErrors) => prevErrors[CODE] = validCode.data?.message)
        // setcodeError(validCode.data?.message)
      }
    }



    if(!firstNameError && !lastNameError && !emailError && !codeError){
      return true
    } 
    else {
      return false
    }


  }

  const submit = async () => {
    let payload = {
      code: codeRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value
    }

    let validData = await verify(payload)
    if(validData){
      const check = await axios.post("http://localhost:8000/appsumo", payload)
      const data = check.data
      console.log(data)
      if(data.pass){
        setSubmitSuccess(true)
      }
    }

  }

  useEffect(() => {
  }, [submitSuccess])

 
  return (
    <AppSumoPage>
      
        <header>
            <img id='smt-logo' src="./images/SMT logo.svg" alt="" />
            <span className='separator'>&amp;</span>
            <img id='appsumo-logo' src="./images/appsumo-logo-white.png" alt="" />
        </header>

        { !submitSuccess && 
        
        <section>
          <h4>Hello Sumo-lings!</h4>
          <p>
            Please share your AppSumo email and AppSumo redemption code to claim your amazing deal.
          </p>
          <p>
            After your you will be prompted to create your free account where you can access all our amazing products and services.
          </p>
          <p>Thank you for your support!</p>
        </section>
        
        }
        { submitSuccess && 
          <section className="success">
            <h4>Thanks for your support</h4>
            <p>
              You will receive an email with a link to create your account where you can download your newly purchased product.
            </p>
            <p>
              If you did not receive an email please click the resend button or ask our support team.
            </p>
            <p>We hope you enjoy our great products and services and we love hearing from you!</p>
          </section>
        }

        { !submitSuccess && 
        <form>
            <div className="form-field">
              <label htmlFor="first-name">First Name {firstNameError && <span className="error-message">{firstNameError}</span>}</label>
              <input type="text" ref={firstNameRef} className={firstNameError ? "error" : "field"}/>
              
            </div>

            <div className="form-field">
              <label htmlFor="last-name">Last Name {lastNameError && <span className="error-message">{lastNameError}</span>}</label>
              <input type="text" ref={lastNameRef} className={lastNameError ? "error" : "field"}/>
              
            </div>

            <div className="form-field">
              <label htmlFor="email">Email  {emailError && <span className="error-message">{emailError}</span>}</label>
              <input type="text" ref={emailRef} className={emailError ? "error" : "field"}/>
             
            </div>

            <div className="form-field">
              <label htmlFor="appsumo-code">AppSumo Code  {codeError && <span className="error-message">{codeError}</span>}</label>
              <input type="text" ref={codeRef} className={codeError ? "error" : "field"}/>
             
            </div>

            <div className='form-field'>
              <button type="button" onClick={() => submit()}>Let's Go</button>
            </div>

        </form>}

        { submitSuccess && 
          <div className="resend">
            <button>Resend Email</button>
          </div>
        }
    </AppSumoPage>
  )
}

export default Appsumo