import { useState, useRef } from "react"
import { useNavigate } from "react-router"
import { FaTimes } from "react-icons/fa"
import { IoMdArrowBack } from "react-icons/io"


import { CommercePage } from "../../../styled/Products/Commerce.styled"

const Commerce = () => {

  const navigate = useNavigate()

  const websiteRef = useRef()

  const [websiteList, setWebsiteList] = useState([])

  const addWebsite = () => {
    const website = websiteRef.current.value
    const date = new Date(Date.now()).toLocaleDateString()

    if(website){
      setWebsiteList(prevList => ([...prevList, {website, date}]))
      websiteRef.current.value = ""
    }
  }

  return (
    <CommercePage>
        <header>
            <IoMdArrowBack className="back" onClick={() => navigate("../")}/>
            <h1>Manage Your Commerce Account</h1>
        </header>
        <main>

          <div className="add">
            <input type="text" ref={websiteRef}/>
            <button onClick={() => addWebsite()}>Add</button>  
          </div>

          <div className="headers">
            <div>Website</div>
            <div>Date Registered</div>
            <div>Delete</div>
          </div>

          <div className="display">
              {websiteList.map(item => (
                <div className="display-item" key={item.website}>
                  <div>{item.website}</div>
                  <div>{item.date}</div>
                  <div><FaTimes className="delete"/></div>
                </div>
              ))}
          </div>
        </main>

    </CommercePage>
  )
}

export default Commerce