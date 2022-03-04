import { useEffect } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

import { DownloadComponent } from "../styled/DownloadComponent.styled"

const Download = ({product}) => {

  const downloadClicked = () => {
    try {
      window.location.assign(`http://localhost:8000/users/downloadproduct?id=${product.product_id}`)
    } catch (e) {

    }
  }

  // useEffect(() => {
  //   console.log(product)
  // })
  return (
    <DownloadComponent>
        <div>
            <p>{product.name}</p>
            <button onClick={() => downloadClicked()}>Download</button>
        </div>

    </DownloadComponent>
  )
}

export default Download