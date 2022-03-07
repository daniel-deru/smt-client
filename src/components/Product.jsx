import { useNavigate } from "react-router"
import { useEffect, useState } from "react"

import { ProductComponent } from "../styled/Product.styled"

const Product = ({product: p}) => {

  const [product, setProduct] = useState(p)

  const navigate = useNavigate()

  const showProduct = () => {
    navigate(product.name.toLowerCase())
  }

  useEffect(() => {
    let expiry = new Date(p.expiry).toLocaleDateString()
    let display = expiry
    setProduct(prevProduct => ({...prevProduct, expiry}))
  }, [])

  return (
    <ProductComponent>
      <div>{product.name}</div>
      <div>${product.price}.00</div>
      <div>{product.expiry}</div>
      <div>{product.active ? "active": "inactive"}</div>
      <div>
        <button type="button" onClick={() => showProduct()}>Manage</button>
      </div>
    </ProductComponent>
  )
}

export default Product