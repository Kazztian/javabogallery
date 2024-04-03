import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>

<>
        <Link to="/ListUser">CRUD persona</Link>
        <Link to="/ListLugar">CRUD Lugar</Link>
        <Link to="/ListActividad">CRUD Actividad</Link>
    </>
    </div>

  )
}
