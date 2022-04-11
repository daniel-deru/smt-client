import { Link } from 'react-router-dom'
import { CreateAccountPage } from "../styled/routes/CreateAccount.styled"

const CreateAccount = () => {
  return (
    <CreateAccountPage>
        <div>
            <img src="./images/smt-logo-full.png" alt="" />  
        </div>

        <form >
            <div>
                <label htmlFor="">First Name</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Last Name</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" />
            </div>
            <div>
                <button type="button">Submit</button>
            </div>
        </form>
        <p>Already have an account? <Link to={"../login"}>Login</Link></p>
    </CreateAccountPage>
  )
}

export default CreateAccount