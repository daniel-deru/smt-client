import { useSelector } from "react-redux"
import { AccountPage } from "../../styled/Dashboard/Account.styled"
import axios from "axios"


const Account = () => {

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

          <div className='field-container'>
            <label>Cellphone Number</label>
            <input type="text" />
          </div>

          <div className='field-container'>
            <label>Address Line 1</label>
            <input type="text" />
          </div>

          
          <div className='field-container'>
            <label>Company Name</label>
            <input type="text" />
          </div>

          <div className='field-container'>
            <label>Address Line 2</label>
            <input type="text" />
          </div>
        </form>
        <div>
          <button onClick={() => update()} className="submit" type="button">Save</button>
        </div>
    </AccountPage>
  )
}

export default Account