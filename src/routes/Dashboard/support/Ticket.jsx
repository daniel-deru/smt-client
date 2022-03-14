import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Ticket = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [customerReplies, setCustomerReplies] = useState()
    const [responses, setResponses] = useState()

    const id = searchParams.get("id")

    const getTicket = async () => {
        try{
            const ticketRequest = await axios.post("http://localhost:8000/api/tickets/getticket", {id})
            if(ticketRequest.data.pass){

            }
        } catch (err){
            if(err) console.error(err)
        }
    }

    useEffect(() => {

    })
    return (
        <div>
            <header>
                <div>Status:</div>
                <div>
                    <button>Reply</button>
                </div>
            </header>
        </div>
  )
}

export default Ticket