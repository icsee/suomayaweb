import React from 'react'
import ScrollLock from 'react-scrolllock'
import { NavLink } from  'react-router-dom'
import Logo from '../Logo'

const SideMenu = (props) => {
  const isActive = props.isActive ? 'active' : ''
  return(
    <div className={`menu-responsive ${isActive}`}>
      { props.isActive &&
        <ScrollLock />
      }
      <div className="menu-responsive-content">
        <Links onClick={props.onClickMobile}/>
      </div>
      <div className="menu-responsive-footer">
        SENA CGMLTI 2019 Copyright © 2019 Todos los derechos reservados
      </div>
    </div>
  )
}

const Links = ({onClick}) => (
  <div className="menu-responsive-links column">
    <Logo variant="link" />
    <div className="responsive-links column">
      <NavLink
        to='/semilleros'
        activeClassName="selected"
        onClick={onClick}
        >
          Semilleros
      </NavLink>
      <NavLink
        to='/revista'
        activeClassName="selected"
        onClick={onClick}
        >
        Revista Reto
      </NavLink>
      <NavLink
        to='/proyectos'
        activeClassName="selected"
        onClick={onClick}
        >
        Proyectos
      </NavLink>
      <NavLink
        to='/simposio'
        activeClassName="selected"
        onClick={onClick}
        >
        Seminario
      </NavLink>
      <NavLink
        to='/fotofilm'
        activeClassName="selected"
        onClick={onClick}
        >
        Fotofilm
      </NavLink>
    </div>
  </div>
)

export default SideMenu