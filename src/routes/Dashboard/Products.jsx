import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

import Product from "../../components/Product"
import { ProductsPage } from "../../styled/Dashboard/Products.styled"

const HEADER = ["Name", "Price", "Expiry", "Uses", "Download", "Manage"]

const Products = () => {
  const { products } = useSelector(state => state.products)

  const [redeemModel, setRedeemModal] = useState(false)


  useEffect(() => {
    console.log(products)
  }, [])
  return (
    <ProductsPage>
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