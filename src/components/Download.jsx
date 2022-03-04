
import axios from "axios"

import { DownloadComponent } from "../styled/DownloadComponent.styled"

const Download = ({download}) => {


  const downloadClicked = () => {
    console.log(download)
    try {
      const requestDownload = axios.post("http://localhost:8000/users/downloadproduct", {id: download.id}, {withCredentials: true})
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