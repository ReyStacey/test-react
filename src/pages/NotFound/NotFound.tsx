import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="text">
      This page doen't not exist. Go <NavLink to="/"> home</NavLink>
    </div>
  )
}

export default NotFound
