import React from 'react'
import {useAuth} from "../context/AuthContext"
import { Navigate ,  useLocation} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user} = useAuth()
    const location = useLocation()

    if(!user){
        return <Navigate to='/auth/login' state={{
          return_url : location.pathname + location.search
        }}/>
    }
  return children
}

export default PrivateRoute