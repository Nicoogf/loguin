import React from 'react' ;
import { useAuth } from './context/authContext';
import { Navigate , Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { loading , isAuthenticated } = useAuth()
  console.log(loading , isAuthenticated)


  if(loading) return <h2>Loading ...</h2>
  if(!isAuthenticated) return <Navigate to="/loguin" replace />

  return (
    <Outlet />
  )
}

export default ProtectedRoutes