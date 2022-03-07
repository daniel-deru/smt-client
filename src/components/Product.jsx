import { useNavigate } from "react-router"

import { ProductComponent } from "../styled/Product.styled"

const Product = ({product}) => {

  const navigate = useNavigate()

  const showProduct = () => {
    navigate(product.name.toLowerCase())
  }
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