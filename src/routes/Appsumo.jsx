import axios from "axios"
import { useRef } from "react"

import { AppSumoPage } from '../styled/AppSumo.styled'

const Appsumo = () => {
  const codeRef = useRef()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()

  const submit = async () => {
    let payload = {
      code: codeRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value
    }

  
    const check = await axios.post("http://localhost:8000/appsumo", payload)
    const data = check.data
    console.log(data)
  }
  return (
    <AppSumoPage>
        <header>
            <img id='smt-logo' src="./images/SMT logo.svg" alt="" />
            <span className='separator'>&amp;</span>
            <img id='appsumo-logo' src="./images/appsumo-logo.svg" alt="" />
        </header>
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
        <form>
            <div className="form-field">
              <label htmlFor="first-name">First Name</label>
              <input type="text" ref={firstNameRef}/>
            </div>
            <div className="form-field">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" ref={lastNameRef}/>
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="text" ref={emailRef}/>
            </div>
            <div className="form-field">
              <label htmlFor="appsumo-code">AppSumo Code</label>
              <input type="text" ref={codeRef}/>
            </div>
            <div className='form-field'>
              <button type="button" onClick={() => submit()}>Let's Go</button>
            </div>
        </form>
    </AppSumoPage>
  )
}

export default Appsumo