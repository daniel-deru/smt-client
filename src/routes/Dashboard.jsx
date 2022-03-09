import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../components/Header'
import Nav from '../components/Nav'
import { Main, DashboardPage, DashboardNestedRoutes } from '../styled/Dashboard.styled'
import { Loading } from '../styled/Loading.styled'
import { login } from '../store/user'
import { setProducts } from "../store/products"





const Dashboard = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.user)
  const { products } = useSelector((state) => state.products)

  // Get all the relevant data and store it in the redux store to reduce requests
  // Create endpoint where all the data will be sent from
  // Things required
  // user details
  // user products
  const getUser = async () => {
    try {
      const request = await axios.post("http://localhost:8000/users/account/get", null, {withCredentials: true})
      const response = request.data
      dispatch(setProducts(response.products))
      dispatch(login(response.user))
    } catch (e) {
      if(e?.response?.status == 403){
        navigate("../login")
      }
    } 
  }
  useEffect(async () => {
   
    await getUser()
  }, [])
  if(Object.keys(user).length > 0 && products.length > 0){
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
      <Loading>
        {/* <h1>Loading</h1> */}
        </Loading>
    )
  }
  
}

export default Dashboard