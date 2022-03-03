import { DownloadComponent } from "../styled/DownloadComponent.styled"

const Download = ({download}) => {
  return (
    <DownloadComponent>
        <div>
            <p>{download.name}</p>
            <button>Download</button>
        </div>

    </DownloadComponent>
  )
}

export default Download