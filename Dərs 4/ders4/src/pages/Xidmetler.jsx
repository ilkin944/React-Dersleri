import React from 'react'
import { Outlet } from 'react-router-dom'

const Xidmetler = () => {
  return (
    <div>
      <h1>Xidmetler sehifesi</h1>
      <nav>
        .. Qlobal olaraq xidmet və alt xidmetlerde görünür ..
      </nav>
      <Outlet/>
    </div>
  )
}

export default Xidmetler