
import React from 'react'
import { useSelector } from 'react-redux'
import { selectLoggedInUsers } from '../authSlice'
import { Navigate } from 'react-router-dom'
import { Children } from 'react'
function ProtectedAdmin({children}) {
    const user = useSelector(selectLoggedInUsers)
    if(user && user.role !=="admin"){
        return <Navigate to="/" replace={true}></Navigate>
      }
    return children
}

export default ProtectedAdmin
