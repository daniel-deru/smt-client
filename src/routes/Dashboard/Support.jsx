import { SupportPage } from "../../styled/Dashboard/Support.styled"
import { useNavigate } from "react-router"


const Support = () => {

  const navigate = useNavigate()

  return (
    <SupportPage>
      <h1>Contact Us</h1>
      <p>If you have any questions feel free to contact us.</p>

      <section className="btn-container">
          <button onClick={() => navigate("createticket")}>Create New Ticket</button>
          <button>View Tickets</button>
      </section>
    </SupportPage>
  )
}

export default Support