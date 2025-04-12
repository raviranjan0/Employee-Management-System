import React from 'react'
import { useAuth } from '../context/authContext'
import AdminSidebar from '../components/AdminSidebar'
import Navbar from '../components/dashboard/Navbar'
import AdminSummary from '../components/dashboard/AdminSummary'

const AdminDashboard = () => {
  const {user} = useAuth()

  return (
    <div className='flex'>
      <AdminSidebar/>

      <div className='flex-1 ml-70 bg-gray-100 h-screen'> 
        <Navbar/>
        <AdminSummary/>
        </div>
     
    </div>
  )
}

export default AdminDashboard