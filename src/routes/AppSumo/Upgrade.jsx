import { UpgradePage } from "../../styled/AppSumo/Upgrade.styled"

const Upgrade = () => {
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
                    <button type="button">Upgrade</button>
                </div>
            </form>
        </main>
    </UpgradePage>
  )
}

export default Upgrade