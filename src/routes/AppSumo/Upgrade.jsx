import { UpgradePage } from "../../styled/AppSumo/Upgrade.styled"
import { useSelector } from "react-redux"

const Upgrade = () => {
    
    const { user } = useSelector(state => state.user)
    console.log(user)
  return (
    <UpgradePage>
        <header>
            <img src="../images/smt-logo-name.png" alt="" />
        </header>
        <main>
            <form>
                <div>
                    <label>Enter your AppSumo Code</label>
                    <input type="text" />
                </div>
                <div>
                    <button type="button">Claim</button>
                </div>
            </form>
            <section className="user-info">
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </section>
        </main>
    </UpgradePage>
  )
}

export default Upgrade