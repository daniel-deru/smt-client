import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import axios from "axios"

import Download from "../../components/Download"
import { DownloadsPage } from "../../styled/Dashboard/Downloads.styled"




const Downloads = () => {

  const [downloads, setDownloads] = useState()

  const navigate = useNavigate()

  const { products } = useSelector(state => state.products)

  const getDownloads = async () => {
    try {
      const requestDownloads = await axios.post("http://localhost:8000/users/downloads", {}, {withCredentials: true})
      setDownloads(requestDownloads.data)
      // console.log(requestDownloads.data)
    } catch (e) {
      if(e?.response?.status == 403){
        navigate("/login")
      }
    }
    
    
  }
  useEffect(() => {
    // getDownloads()
  }, [])
  return (
    <DownloadsPage>
      <h1>Downloads</h1>
      {products && products.map(product => (
        <Download product={product}/>
      ))}

    </DownloadsPage>
  )
}

export default Downloads