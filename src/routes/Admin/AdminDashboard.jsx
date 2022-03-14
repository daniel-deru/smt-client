import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router'
import axios from 'axios'

import Header from '../../components/Admin/Header'

import { Dashboard } from '../../styled/Admin/Dashboard.styled'

const AdminDashboard = () => {
  const navigate = useNavigate()

  const getAdmin = async () => {
    try {
      const admin = await axios("http://localhost:8000/admin/get", {withCredentials:true})
      console.log("This is the request to see if the admin is logged in", admin.data)
      if(!admin?.data?.pass) navigate("../login")

    } catch (err){
        if(err) console.error(err)
        navigate("../login")
    }
  }

  useEffect(async () => {
    await getAdmin()
  })
  return (
    <Dashboard>
      <Header />
      <Outlet />
    </Dashboard>
  )
}

export default AdminDashboard