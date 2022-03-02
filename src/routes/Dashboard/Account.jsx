import { useSelector } from "react-redux"
import { AccountPage } from "../../styled/Dashboard/Account.styled"
import axios from "axios"
import { useState, useRef, useEffect } from "react"


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

  const checkData = () => {
    const first_name = firstNameRef.current.value
    const last_name = lastNameRef.current.value
    const display_name = displayNameRef.current.value
    const contact_email = contactEmailRef.current.value
    const contact_number = contactNumberRef.current.value
    const company_name = companyNameRef.current.value
    const country = countryRef.current.value
    const province = provinceRef.current.value
    const city = cityRef.current.value
    const postal = postalRef.current.value
    const address1 = address1Ref.current.value
    const address2 = address2Ref.current.value

    let info = {
      first_name,
      last_name,
      display_name,
      contact_email,
      contact_number,
      company_name,
      country,
      province,
      city,
      postal,
      address1,
      address2,
    }
    let iterableInfo = Object.entries(info)
    let filledInData = iterableInfo.filter((item) => item[1] ? true : false)
    // Compare the data to the previous data to see what needs to be updated
    console.log(filledInData)
  }


  const update = async () => {
      checkData()
    // Use some kind of api that fires in a useEffect to request the data
  }

  useEffect(async () => {
    try {
      const requestUser = await axios.post("http://localhost:8000/users/account/get", null, {withCredentials: true})
      const user = requestUser.data
      console.log(user)
    } catch (e) {
      console.log(e)
    } 
    
  }, [])
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