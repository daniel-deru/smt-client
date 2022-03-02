import { SupportPage } from "../../styled/Dashboard/Support.styled"
import { useState, useRef } from "react"
import axios from "axios"


const Support = () => {

  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState("")

  const nameRef = useRef()
  const emailRef = useRef()
  const subjectRef = useRef()
  const messageRef = useRef()

  const verify = async (name, email, subject, message) => {
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let errorMessage = ""
    switch(true){
      case !name:
        errorMessage = "Please provide your name"
        break
      case !email: 
        errorMessage = "Please provide an email"
        break
      case !emailRegEx.test(email):
        errorMessage = "Email address is not valid"
        break
      case !subject:
        errorMessage = "Please provide a subject"
        break
      case !message:
        errorMessage = "Please provide a message"
        break
    }

    if(!errorMessage){
      const request = await axios.post("http://localhost:8000/api/verify/email", {email: email}, {withCredentials: true})
      const response = request.data
      console.log(response)
    }
    setError(errorMessage)

  }

  const submit = async () => {
    const name = nameRef.current.value
    const email = emailRef.current.value
    const subject = subjectRef.current.value
    const message = messageRef.current.innerText
    console.log(messageRef)

    const errorMessage = await verify(name, email, subject, message)
    if(!errorMessage){
      // Send the email
    }


  }

  return (
    <SupportPage>
      <h1>Contact Us</h1>
      <p>If you have any questions feel free to contact us.</p>
      <form>

        <div className="wrapper">

          <div className="field-container">
            <label >Name</label>
            <input type="text" ref={nameRef}/>
          </div>

          <div className="field-container">
            <label >Email</label>
            <input type="text" ref={emailRef}/>
          </div>

        </div>
        
        <div className="field-container">
          <label >Subject</label>
          <input type="text" ref={subjectRef}/>
        </div>

        <div className="field-container">
          <label >Message</label>
          <textarea name="" id="" cols="30" rows="10" ref={messageRef}></textarea>
        </div>

        <div>
          <button type="button" onClick={() => submit()}>Send</button>
        </div>
      </form>

      <div className="error">{error}</div>
    </SupportPage>
  )
}

export default Support