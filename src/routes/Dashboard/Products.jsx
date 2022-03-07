import { useSelector } from "react-redux"
import { useEffect } from "react"

import Product from "../../components/Product"
import { ProductsPage } from "../../styled/Dashboard/Products.styled"

const HEADER = ["Name", "Price", "Expiry", "Status", "Manage"]

const Products = () => {
  const { products } = useSelector(state => state.products)


  useEffect(() => {
    console.log(products)
  }, [])
  return (
    <ProductsPage>
      <div className="redeem-container">
        <button>Redeem Code</button>
      </div>
      <h1>All your glorious products</h1>
      <div className="header">
        {HEADER.map(head => (
          <div>{head}</div>
        ))}
      </div>

        {products.map(product => (
          <Product product={product}/>
        ))}


    </ProductsPage>
  )
}

export default Products