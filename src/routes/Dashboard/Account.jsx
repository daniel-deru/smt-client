import { useSelector } from "react-redux"
import { AccountPage } from "../../styled/Dashboard/Account.styled"
import axios from "axios"
import { useState, useRef } from "react"


const Account = () => {
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const displayNameRef = useRef()
  const contactEmailRef = useRef()
  const contactNumberRef = useRef()
  const companyNameRef = useRef()
  const countryRef = useRef()
  const provinceRef = useRef()
  const cityRef = useRef()
  const postalRef = useRef()
  const address1Ref = useRef()
  const address2Ref = useRef()




  const { user } = useSelector(state => state.user)


  const update = async () => {
    
    const request = await axios.post("http://localhost:8000/users/update", {test: "Test"}, { withCredentials: true })
    const response = request.data
    console.log(response)
  }
  return (
    <AccountPage>
        <section>
          <div>
            Name: <span>{user.name}</span>
          </div>
          <div>
            Email: <span>{user.email}</span>
          </div>
        </section>
        <h2>Set information for your account</h2>
        <form >
          <h1>Personal Details</h1>
          <div>
              <div className='field-container'>
                <label>First Name</label>
                <input type="text" ref={firstNameRef}/>
              </div>

              <div className='field-container'>
                <label>Last Name</label>
                <input type="text" ref={lastNameRef}/>
              </div>

              <div className='field-container'>
                <label>Display Name</label>
                <input type="text" ref={displayNameRef}/>
              </div>
              
              <div className='field-container'>
                <label>Contact Email</label>
                <input type="text"  ref={contactEmailRef}/>
              </div>
          </div>

          <h1>Billing Details</h1>
          <div>
              <div className='field-container'>
                <label>Contact Number</label>
                <input type="text" ref={contactNumberRef}/>
              </div>

              <div className='field-container'>
                <label>Company Name</label>
                <input type="text" ref={companyNameRef}/>
              </div>

              <div className='field-container'>
                <label>Country</label>
                <input type="text" ref={countryRef}/>
              </div>

              <div className='field-container'>
                <label>State/Province</label>
                <input type="text" ref={provinceRef}/>
              </div>

              <div className='field-container'>
                <label>City</label>
                <input type="text" ref={cityRef}/>
              </div>

              <div className='field-container'>
                <label>Zip/Postal Code</label>
                <input type="text" ref={postalRef}/>
              </div>

              <div className='field-container'>
                <label>Address Line 1</label>
                <input type="text" ref={address1Ref}/>
              </div>

              <div className='field-container'>
                <label>Address Line 2</label>
                <input type="text" ref={address2Ref}/>
              </div>
          </div>
          
        </form>
        <div>
          <button onClick={() => update()} className="submit" type="button">Save</button>
        </div>
    </AccountPage>
  )
}

export default Account