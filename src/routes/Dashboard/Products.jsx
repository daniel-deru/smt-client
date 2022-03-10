import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

import Product from "../../components/Product"
import { ProductsPage } from "../../styled/Dashboard/Products.styled"

const HEADER = ["Name", "Price", "Expiry", "Uses", "Download", "Manage"]

const Products = () => {
  const { products } = useSelector(state => state.products)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(products)
  }, [])
  return (
    <ProductsPage>

      <div className="top">
        <button onClick={() => navigate("../../../appsumo/upgrade")}>Redeem Code</button>
        <h1>All your glorious products</h1>
      </div>
      
      <div className="header">
        {HEADER.map(head => (
          <div>{head}</div>
        ))}
      </div>

        {products.map(product => (
          <Product product={product} key={product.product_id}/>
        ))}


    </ProductsPage>
  )
}

export default Products