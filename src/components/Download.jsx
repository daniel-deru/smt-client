
import { useNavigate } from "react-router"
import axios from "axios"

import { DownloadComponent } from "../styled/DownloadComponent.styled"

const Download = ({download}) => {

  const navigate = useNavigate()
  const downloadClicked = () => {
    console.log(download)
    try {
      // navigate("http://localhost:8000/users/downloadproduct")
      window.location.assign(`http://localhost:8000/users/downloadproduct?id=${download.id}`)
      // const requestDownload = axios.post("http://localhost:8000/users/downloadproduct", {id: download.id}, {withCredentials: true})
      // console.log(requestDownload.data)

    } catch (e) {

    }
  }
  return (
    <DownloadComponent>
        <div>
            <p>{download.name}</p>
            <button onClick={() => downloadClicked()}>Download</button>
        </div>

    </DownloadComponent>
  )
}

export default Download