import React from 'react'
import './NavlistItem.css'
import { NavLink } from 'react-router-dom'

const NavlistItem = ({name , link}) => {

  return (
    <>
    <li><NavLink to={link}>{name}</NavLink></li></>
  
  )
}

export default NavlistItem
