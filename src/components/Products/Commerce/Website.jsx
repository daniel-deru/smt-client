import axios from "axios"
import { FaTimes } from "react-icons/fa"
import { useEffect } from "react"


import { WebsiteItem } from "../../../styled/Components/Commerce/Website.styled"

const Website = ({ item }) => {

    const deleteWebsite = (e) => {
    }

    console.log(item)

    useEffect(() => {
        console.log(item)
    }, [])
    return (
        <WebsiteItem>
            <div>{item.website}</div>
            <div>{item.date}</div>
            <div onClick={(e) => deleteWebsite(e)}><FaTimes className="delete" /></div>
        </WebsiteItem>
    )
}

export default Website