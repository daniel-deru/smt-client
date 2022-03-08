import { useNavigate } from "react-router"
import { useEffect, useState } from "react"

import { ProductComponent } from "../styled/Product.styled"

const Product = ({product: p}) => {

  const [product, setProduct] = useState(p)

  const navigate = useNavigate()

  const showProduct = () => {
    navigate(product.name.toLowerCase())
  }

  const downloadProduct = () => {
    window.location.assign(`http://localhost:8000/users/downloadproduct?id=${product.product_id}`)
  }
  console.log(product)

  useEffect(() => {
    if(Date.parse(p.expiry)){
      let expiry = new Date(p.expiry).toLocaleDateString()
      setProduct(prevProduct => ({...prevProduct, expiry}))
    }

  }, [])

  return (
    <ProductComponent>
      <div>{product.name}</div>
      <div>${product.price}.00</div>
      <div>{product.expiry}</div>
      <div>{product.activations}/{product.uses}</div>
      <div>
        <button className="download" type="button" onClick={() => downloadProduct()}>Download</button>
      </div>
      <div>
        <button type="button" onClick={() => showProduct()}>Manage</button>
      </div>
    </ProductComponent>
  )
}

export default Product