import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>

<>
        <Link to="/ListUser">CRUD persona</Link>
        <Link to="/ListPlan">CRUD Planes</Link>
    </>
    </div>

  )
}
