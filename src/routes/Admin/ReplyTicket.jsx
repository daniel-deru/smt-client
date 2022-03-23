import { useEffect } from "react"
import { useLocation } from "react-router"
import axios from "axios"

const ReplyTicket = () => {
    const { state } = useLocation()

    const getTicket = async () => {
        try {
            const requestTicket = await axios.post("https://api.smartmetatec.com/admin/getticket", {id: state}, {withCredentials: true})
            console.log(requestTicket.data)
        } catch (e){

        }
    }

    useEffect(async () => {
        await getTicket()
    })
    return (
        <div>
            {state}
        </div>
    )
}

export default ReplyTicket