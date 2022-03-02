import { SupportPage } from "../../styled/Dashboard/Support.styled"
import { useState, useRef, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router"


const Support = () => {

  // Local State
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState()

  // References
  const nameRef = useRef()
  const emailRef = useRef()
  const subjectRef = useRef()

  // navigate function to navigate to different routes
  const navigate = useNavigate()

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
    setError(errorMessage)

    if(!errorMessage){
      try {
        const request = await axios.post("http://localhost:8000/api/verify/email", {email: email}, {withCredentials: true})
        const response = request.data
        if(response.pass){
          setError("")
          return true
        }
        return false
      } catch (e) {
          setError(e.response.data.message)
          if(e.response.status == 403){
            navigate("/login")
          }
      }
      
    }

  }

  const submit = async () => {
    const name = nameRef.current.value
    const email = emailRef.current.value
    const subject = subjectRef.current.value
    const verified = await verify(name, email, subject, message)
    console.log(verified)
    if(verified){
      // Send the email
      const mail = await axios.post("http://localhost:8000/api/mail/support", {name, email, subject, message})
      setSubmitSuccess(true)
    }


  }

  useEffect(() => {

  }, [])

  return (
    <SupportPage>
      <h1>Contact Us</h1>
      <p>If you have any questions feel free to contact us.</p>
      { !submitSuccess &&<form>

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
          <textarea name="" id="" cols="30" rows="10" onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>

        <div>
          <button type="button"  onClick={() => submit()}>Send</button>
        </div>
      </form>}

      {submitSuccess &&
        <div className="submit-message">
          <h1>Thank you</h1>
          <p>Our team will contact you shortly</p>
          <button onClick={() => setSubmitSuccess(false)}>Go Back</button>
        </div>
      
      
      }

      <div className="error">{error}</div>
    </SupportPage>
  )
}

export default Support