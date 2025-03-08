import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
    const isLogin = true
  return (
    <>
        {isLogin ? <Outlet/> : <Navigate to='/signup' replace={true} />}
    </>
  )
}
