import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

import Download from "../../components/Download"
import { DownloadsPage } from "../../styled/Dashboard/Downloads.styled"




const Downloads = () => {

  const [downloads, setDownloads] = useState()

  const navigate = useNavigate()

  const getDownloads = async () => {
    try {
      const requestDownloads = await axios.post("http://localhost:8000/users/downloads", {}, {withCredentials: true})
      setDownloads(requestDownloads.data)
    } catch (e) {
      if(e?.response?.status == 403){
        navigate("/login")
      }
    }
    
    
  }
  useEffect(() => {
    getDownloads()
  }, [])
  return (
    <DownloadsPage>
      <h1>Downloads</h1>
      {downloads.map(download => (
        <Download download={download}/>
      ))}

    </DownloadsPage>
  )
}

export default Downloads