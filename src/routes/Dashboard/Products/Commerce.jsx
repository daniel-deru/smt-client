import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"

import { IoMdArrowBack } from "react-icons/io"
import axios from "axios"


import { CommercePage } from "../../../styled/Products/Commerce.styled"

import Website from "../../../components/Products/Commerce/Website"

const Commerce = () => {

  const navigate = useNavigate()
  const { products } = useSelector(state => state.products)

  const websiteRef = useRef()

  const [websiteList, setWebsiteList] = useState([])
  const [error, setError] = useState("")


  const addWebsite = async () => {
    const website = websiteRef.current.value
    const date = new Date(Date.now()).toLocaleDateString()

    if(website){
      if(!websiteExists(website)){

        const request = await axios.post("http://localhost:8000/api/commerce/websites?action=add", {website, date}, { withCredentials: true })
        if(request.data.pass){

          setWebsiteList(prevList => ([...prevList, {website, date}]))
          websiteRef.current.value = ""
          setError("")
        }
      }
    }

    else {
      setError("Please enter a website address.")
    }
  }


  const websiteExists = (website) => {
    const websiteRegEx = /^(https:\/\/)?(\w+\.)?\w+\.\w{1,9}(\.{1,5})?$/
    if(websiteRegEx.test(website)){

      const result = websiteList.filter(item => item.website == website)

      if(result.length == 0){
        return false
      } 

      else {
        setError("This website has already been added")
      }

    } else {
        setError("The website you entered is not valid.")
      }
    return true
    
  }


  const getwebsites = async () => {
    try {
      const request = await axios.post("http://localhost:8000/api/commerce/websites?action=get", {}, { withCredentials: true })
      if(request.data.pass){
        setWebsiteList(request.data.websites)
      }
    } catch (e){
      console.log(e.response)
    }
  }

  const deleteWebsite = async (item) => {
    const remainingWebsites = websiteList.filter(account => item.website != account.website)
    setWebsiteList(remainingWebsites)

    try {
      const request = await axios.post("http://localhost:8000/api/commerce/websites?action=delete", {website: item.website}, { withCredentials: true })
      setError("")
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(async () => {
    getwebsites()
  }, [])

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

          <div className="error">
              <p>{error}</p>
          </div>

          <div className="headers">
            <div>Website</div>
            <div>Date Registered</div>
            <div>Delete</div>
          </div>

          <div className="display">
              {websiteList.map(item => (
                  <Website key={item.website}  item={item} deleteWebsite={deleteWebsite}/>
              ))}
          </div>
        </main>

    </CommercePage>
  )
}

export default Commerce