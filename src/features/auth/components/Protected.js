import React from 'react'
import { useSelector } from 'react-redux'
import { selectLoggedInUsers } from '../authSlice'
import { Navigate } from 'react-router-dom'

function Protected({children}) {
    const user = useSelector(selectLoggedInUsers)
  if(!user){
    return <Navigate to="/login" replace={true}></Navigate>
  }
  return children
}

export default Protected
