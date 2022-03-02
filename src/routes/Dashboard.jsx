import { useEffect } from 'react'
import { Outlet } from 'react-router'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../components/Header'
import Nav from '../components/Nav'
import { Main, DashboardPage, DashboardNestedRoutes } from '../styled/Dashboard.styled'
import { login } from '../store/user'





const Dashboard = () => {

  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.user)
  const getUser = async () => {
    try {
      const requestUser = await axios.post("http://localhost:8000/users/account/get", null, {withCredentials: true})
      const user = requestUser.data
      dispatch(login(user))
    } catch (e) {
      console.log(e)
    } 
  }

  useEffect(async () => {
   
    getUser()
  }, [])
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
}

export default Dashboard