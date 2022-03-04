import { ProductComponent } from "../styled/Product.styled"

const Product = ({product}) => {
  return (
    <ProductComponent>
      {/* {JSON.stringify(product)} */}
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div>{product.expiry}</div>
      <div>{product.active ? "active": "inactive"}</div>
      <div>
        <button type="button">Manage</button>
      </div>
    </ProductComponent>
  )
}

export default Product