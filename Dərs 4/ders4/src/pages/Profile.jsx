import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {setUser, user} = useAuth();
  const handleLogout = () => {
    setUser(false)
    navigate(location?.state?.return_url || '/')

  }

  return (
    <div>
        Mənim hesabım səhifəsi
        {!user && <Link to='/auth/login'>Giriş et</Link>}
        {user && <button onClick={handleLogout}>çıxış</button>}
        
    </div>
  )
}

export default Profile