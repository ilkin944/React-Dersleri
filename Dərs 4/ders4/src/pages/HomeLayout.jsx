import React from 'react'
import { AiOutlineHome, AiOutlineLogin } from 'react-icons/ai'
import { MdMiscellaneousServices, MdOutlineAccountCircle } from 'react-icons/md';
import { FaBlogger } from 'react-icons/fa'
import { RiContactsBookUploadLine } from 'react-icons/ri'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
const HomeLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {user, setUser} = useAuth();
    const handleLogout = () => {
        setUser(false)
        navigate(location?.state?.return_url || '/')
    
      }
    return (
        <>
            <nav>
                <div className="container">
                    <div className="logo">
                        <Link style={{ textDecoration: "none" }} to="/">Logo</Link>
                    </div>
                    <div className="navbar-nav">
                        <ul>
                            <li>
                                <NavLink to='/'>
                                    <AiOutlineHome />
                                    Ana səhifə
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/xidmetler'><MdMiscellaneousServices />Xidmətlər</NavLink>
                            </li>
                            <li>
                                <NavLink to='/blog'> <FaBlogger /> Bloq</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'> <RiContactsBookUploadLine /> Əlaqə</NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className="navbar-cta">
                        <ul>
                            {!user && <li>
                                <NavLink to='/auth'> <AiOutlineLogin /> Giriş</NavLink>
                            </li>}
                            
                            <li>
                                <NavLink to='/profil'> <MdOutlineAccountCircle /> Hesabım</NavLink>
                            </li>
                            {user && <li>
                                <button onClick={handleLogout}> <AiOutlineLogin /> Çıxış</button>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav></>
    )
}

export default HomeLayout