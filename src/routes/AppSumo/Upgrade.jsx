import { useEffect } from "react"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"


import { UpgradePage } from "../../styled/AppSumo/Upgrade.styled"
import { setProducts } from "../../store/products"
import { login } from "../../store/user"

const Upgrade = () => {
    
    const { user } = useSelector(state => state.user)
    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch()
    console.log(user, products)

    useEffect(async () => {
        try {
            const request = await axios.post("http://localhost:8000/users/account/get", null, { withCredentials: true })
            if(request){
                dispatch(login(request.data.user))
                dispatch(setProducts(request.data.products))
            }
        } catch (e) {
            console.log(e)
        }
    }, [])
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
                {/* <p>Name: {user.first_name} {user.last_name}</p>
                <p>Email: {user.email}</p>
                <div>
                    Product(s):
                    {products.map(product => (
                        <span> {product.name}</span>
                    ))}
                </div> */}
                <div className="labels">
                    <div>Name</div>
                    <div>Email</div>
                    <div>Products</div>
                </div>
                <div className="data">
                    <div>{user.first_name} {user.last_name}</div>    
                    <div>{user.email}</div>    
                    <div>
                        {products.map(product => (
                        <div>{product.name} ({product.uses} Account{product.uses > 1 ? "s" : ""})</div>
                        ))}
                    </div>    
                </div>
            </section>

        </main>
    </UpgradePage>
  )
}

export default Upgrade