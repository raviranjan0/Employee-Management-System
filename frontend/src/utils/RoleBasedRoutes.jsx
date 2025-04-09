import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const RoleBasedRoutes = ({children, requiredRole}) => {
    const {user, loading} = useAuth()

    if(loading){
        <div>Loading....</div>
    }

    if(!requiredRole.includes(user.role)) {
        <Navigate  to='/unauthorized'/>
    }

    return user ? children : <Navigate to="/login" />
 
}

export default RoleBasedRoutes