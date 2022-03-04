import { useSelector } from "react-redux"
import { useEffect } from "react"

import Product from "../../components/Product"

const Products = () => {
  const { products } = useSelector(state => state.products)


  useEffect(() => {
    console.log(products)
  }, [])
  return (
    <div>
      
      {products.map(product => (
        <Product product={product}/>
      ))}
    </div>
  )
}

export default Products