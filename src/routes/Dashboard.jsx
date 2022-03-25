import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../components/Header'
import Nav from '../components/Nav'
import { Main, DashboardPage, DashboardNestedRoutes } from '../styled/Dashboard.styled'
import Loading from '../components/Loading'
import { login } from '../store/user'
import { setProducts } from "../store/products"
import axios from '../config/axios'






const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const { user } = useSelector((state) => state.user)
  // const { products } = useSelector((state) => state.products)

  // Get all the relevant data and store it in the redux store to reduce requests
  // Create endpoint where all the data will be sent from
  // Things required
  // user details
  // user products
  const getUser = async () => {
    try {
      const request = await axios.post("users/account/get", null)
      const response = request.data
      // console.log("This is the response from the dashboard request", response)
      if(response){
        dispatch(setProducts(response.products))
        dispatch(login(response.user))
        setLoading(false)

      }
    } catch (e) {
      console.log(e.response)
      navigate("../login")
      if(e?.response?.status == 403){
        navigate("../login")
      }
    } 
  }
  useEffect(async () => {
   
    await getUser()
    // console.log(`is the data loading? ${loading}`)
  }, [])
  if(!loading){
    return (
      <DashboardPage>
        <Header />
        <Main>
  
          <Nav />
  
          <DashboardNestedRoutes>
            <Outlet/>
          </DashboardNestedRoutes>
  
        </Main>
      </DashboardPage>
    )
  } else {
    return (
      <Loading/>
    )
  }
  
}

export default Dashboard