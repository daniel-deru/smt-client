import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"

import { setProducts } from "../store/products"

import { ProductComponent } from "../styled/Product.styled"

const Product = ({product: p}) => {



  const navigate = useNavigate()
  const { products } = useSelector(state => state.products)

  const [product, setProduct] = useState(p)
  const [activations, setActivations] = useState(1)

  useEffect(async () => {
    if(Date.parse(p.expiry)){
      let expiry = new Date(p.expiry).toLocaleString()
      setProduct(prevProduct => ({...prevProduct, expiry}))
    }
    await getActiveUses()

  }, [])

  

  const downloadProduct = () => {
    window.location.assign(`http://localhost:8000/users/downloadproduct?id=${product.product_id}`)
  }

  const getActiveUses = async () => {
    try {
      const request = await axios.post(`http://localhost:8000/api/${product.name.toLowerCase()}/websites?action=get`, {}, { withCredentials: true })
      if(request.data.pass){
        setActivations(request.data.accounts.length)
      }
    } catch (e) {
      console.log(e)
    }
    
    
  }



  return (
    <ProductComponent>
      <div>{product.name}</div>
      <div>${product.price}.00</div>
      <div>{product.expiry}</div>
      <div>{activations}/{product.uses}</div>
      <div>
        <button className="download" type="button" onClick={() => downloadProduct()}>Download</button>
      </div>
      <div>
        <button type="button" onClick={() => navigate(product.name.toLowerCase())}>Manage</button>
      </div>
    </ProductComponent>
  )
}

export default Product