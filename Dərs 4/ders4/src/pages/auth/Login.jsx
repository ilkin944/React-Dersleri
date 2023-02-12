import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()
  const location = useLocation();
  const {setUser} = useAuth();


  const handleLogin = () => {
    setUser({
      id:1,
      username: "ilkin944"
    })
    navigate("/", {
      replace:true,
      state:{
        name: "ilkin"
      }
    })
  }

  return (
    <div>
      <h1>Login page</h1>

      <button onClick={handleLogin}>giris et</button>
    </div>
  )
}

export default Login