import axios from 'axios'
import { useEffect, useState } from 'react'

import { DispayTickets } from '../../styled/Admin/Tickets.styled'

const AdminTickets = () => {
  const [tickets, setTickets] = useState()

  const getTickets = async () => {
    try {
      const requestTickets = await axios("http://localhost:8000/admin/gettickets", {withCredentials: true})
      // if(!requestTickets.data.tickets) setTickets(null)
      console.log(requestTickets.data)
      setTickets(requestTickets.data.tickets)
    } catch (err) {
        if(err) console.error(err)
    }
  }

  useEffect(async () => {
    await getTickets()
  }, [])
  return (
    <DispayTickets>
      <main>
        <ul>
          {tickets && tickets.map((ticket, index) => (
            <li key={ticket.id}>
              <div>{index+1}</div>
              <div>{ticket.first_name} {ticket.last_name}</div>
              <div>{ticket.subject}</div>
            </li>
          ))}
        </ul>
      </main>
    </DispayTickets>
  )
}

export default AdminTickets