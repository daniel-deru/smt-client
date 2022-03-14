import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'


import { DispayTickets } from '../../styled/Admin/Tickets.styled'

const AdminTickets = () => {

  const navigate = useNavigate()
  const [tickets, setTickets] = useState()

  const getTickets = async () => {
    try {
      const requestTickets = await axios("http://localhost:8000/admin/gettickets", {withCredentials: true})
      if(!requestTickets.data.tickets) setTickets(null)
      console.log(requestTickets.data)
      setTickets(requestTickets.data.tickets)
    } catch (err) {
        if(err) console.error(err)
    }
  }

  // const respondTicket = () => {

  // }

  useEffect(async () => {
    await getTickets()
  }, [])
  return (
    <DispayTickets>
      <main>
        <div className='headers'>
          <div>No</div>
          <div>Name</div>
          <div>Email</div>
          <div>Subject</div>
        </div>
        <ul>
          {tickets && tickets.map((ticket, index) => (
            <li key={ticket.id} onClick={() => null}>
              <div>{index+1}</div>
              <div>{ticket.first_name} {ticket.last_name}</div>
              <div>{ticket.email}</div>
              <div>{ticket.subject}</div>
            </li>
          ))}
        </ul>
      </main>
    </DispayTickets>
  )
}

export default AdminTickets