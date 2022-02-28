import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { Outlet } from 'react-router'
import { Main, DashboardPage, DashboardNestedRoutes } from '../styled/Dashboard.styled'


const Dashboard = () => {
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