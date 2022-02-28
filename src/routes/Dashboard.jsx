import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { Outlet } from 'react-router'
import { Main, DashboardPage } from '../styled/Dashboard.styled'

const Dashboard = () => {
  return (
    <DashboardPage>
      <Header />
      <Main>
        <Nav />
        <Outlet/>
      </Main>
    </DashboardPage>
  )
}

export default Dashboard