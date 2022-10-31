import React from 'react'
import { NavLink } from  'react-router-dom'
import './styles.css'
import Logo from '../Logo'
import Hamburger from '../Hamburger';

const Navbar = ({variant, type}) => {
    return(
      <div className={`navbar row ${variant}`}>
        <Logo variant="link" type={type} />
        <div className="menu row">
          <NavLink
            to='/semilleros'
            activeClassName="selected"
            >
              Semilleros
          </NavLink>
          <NavLink
            to='/revista'
            activeClassName="selected"
            >
            Revista Reto
          </NavLink>
          <NavLink
            to='/proyectos'
            activeClassName="selected"
            >
            Proyectos
          </NavLink>
          <NavLink
            to='/congreso'
            activeClassName="selected"
            >
            Congreso
          </NavLink>
          <NavLink
            to='/fotofilm'
            activeClassName="selected"
            >
            Fotofilm
          </NavLink>
        </div>
        <Hamburger />
      </div>
    )
}

Navbar.defaultProps = {
  variant: 'classic'
}

export default Navbar