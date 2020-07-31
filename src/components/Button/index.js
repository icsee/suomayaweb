import React from 'react'
import './styles.css'
import { NavLink } from  'react-router-dom'

const Button = ({children, route, variant, link}) => {
  if(link) {
    return (
      <a href={link} rel="noopener noreferrer" target="_blank" className={`button ${variant}`}>
        {children}
      </a>
    )
  }
  return (
    <NavLink to={`/${route}`} >
      <button className={`button ${variant}`}>
        {children}
      </button>
    </NavLink>
  )
}

Button.defaultProps = {
  variant: 'classic',
  route: '',
  link: ''
}

export default Button