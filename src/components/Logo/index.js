import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logosuomaya.png'
import './styles.css'

// const getLogo = (type) => (type === "home") ? logo2 : logo

const Logo = ({ variant, type }) =>{
  if (variant === 'link') {
    return(
      <NavLink
        exact
        to='/'
        >
        <Img variant="logo" type={type} />
      </NavLink>
    )
  }
  return <Img variant="logo-big" />
}



const Img = (props) =>
  <img
    src={logo}
    alt="logo"
    className={props.variant}
  />

Logo.defaultProps = {
  variant: 'No',
  type: 'normal'
}


export default Logo
