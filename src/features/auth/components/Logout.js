import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectLoggedInUsers, signOutUserAsync } from '../authSlice'

function Logout() {
    const dispatch = useDispatch()
    const user = useSelector(selectLoggedInUsers)
    useEffect(()=>{
        dispatch(signOutUserAsync())
    })
  return (
    <>
    {user===null &&  <Navigate to="/login" replace={true}></Navigate> }
    </>
  )
}

export default Logout
