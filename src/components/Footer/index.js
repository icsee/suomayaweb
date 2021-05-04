import React from 'react'
import { NavLink } from  'react-router-dom'
import Logo from '../Logo'
import './styles.css'
import SocialFollow from "../SocialFollow/SocialFollow"


const phone =
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.09 18.08">
    <path  d="M18,14q-.08-.23-1-.68l-.69-.38-.81-.45-.68-.4-.32-.22a3.56,3.56,0,0,0-.45-.27.83.83,0,0,0-.36-.09,1.06,1.06,0,0,0-.64.36,6.24,6.24,0,0,0-.7.79,7.69,7.69,0,0,1-.68.79,1,1,0,0,1-.59.36.88.88,0,0,1-.29-.06l-.26-.11-.31-.18L10,13.31a13.41,13.41,0,0,1-3-2.22,13.41,13.41,0,0,1-2.22-3l-.15-.24-.18-.31q0-.09-.11-.26A.88.88,0,0,1,4.27,7a1,1,0,0,1,.36-.59,7.77,7.77,0,0,1,.79-.68A6.26,6.26,0,0,0,6.22,5a1.06,1.06,0,0,0,.36-.64A.83.83,0,0,0,6.5,4a3.52,3.52,0,0,0-.27-.45L6,3.23l-.4-.68-.45-.81L4.77,1q-.45-.89-.68-1a.72.72,0,0,0-.27,0,4.23,4.23,0,0,0-.9.13A5.07,5.07,0,0,0,2,.43,3.43,3.43,0,0,0,.69,2,5,5,0,0,0,0,4.37,4.91,4.91,0,0,0,.09,5a5.53,5.53,0,0,0,.16.74q.12.41.19.61l.26.71.23.63A11.62,11.62,0,0,0,2,10a18.94,18.94,0,0,0,2.76,3.38,19,19,0,0,0,3.38,2.76,11.56,11.56,0,0,0,2.24,1.06l.63.23.71.26.61.19A5.55,5.55,0,0,0,13,18a4.89,4.89,0,0,0,.67,0,5,5,0,0,0,2.38-.65A3.42,3.42,0,0,0,17.64,16a5.06,5.06,0,0,0,.27-.88,4.23,4.23,0,0,0,.13-.9A.71.71,0,0,0,18,14Z"/>
  </svg>

const address =
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.44 20.57">
    <path  d="M12.28,2.16a7.18,7.18,0,0,0-10.15,0,8.18,8.18,0,0,0-.67,10.09l5.75,8.31,5.74-8.29a8.18,8.18,0,0,0-.67-10.1Zm-5,7.63A2.62,2.62,0,1,1,9.89,7.17,2.62,2.62,0,0,1,7.27,9.79Zm0,0"/>
  </svg>

const mail =
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.1 10.54">
    <path d="M14.05,8.79a1.73,1.73,0,0,1-.22.84L9.41,4.68,13.78.86a1.74,1.74,0,0,1,.27.93Zm-7-3.21L13.13.26A1.73,1.73,0,0,0,12.3,0H1.8A1.72,1.72,0,0,0,1,.26Zm1.7-.32L7.34,6.49a.44.44,0,0,1-.58,0L5.35,5.26l-4.48,5a1.73,1.73,0,0,0,.92.27H12.3a1.73,1.73,0,0,0,.92-.27ZM.32.86a1.74,1.74,0,0,0-.27.93v7a1.73,1.73,0,0,0,.22.84L4.7,4.68Zm0,0"/>
  </svg>

const getContactDetails = (variant) => {
  if (variant === 'address') {
    return {
      icon: address,
      text: 'Calle 52 # 13 – 55 Bogotá, Colombia'
    }
  } else if (variant === 'phone') {
    return {
      icon: phone,
      text: '+57 1 594 13 01'
    }
  } else {
    return {
      icon: mail,
      text: 'gisuomaya@gmail.com'
    }
  }
}

const Footer = () =>
  <footer>
    <div className="container">
      <div className="footer-box column">
        <div className="footer-box-top row">
          <div className="footer-logo">
            <Logo />
          </div>
          <ContactBox />
          <SocialFollow />
        </div>
        <Privacy />
      </div>
    </div>

  </footer>

const ContactBox = () =>
  <div className="contact-box row">
    <Contact />
    <NavLinks />
  </div>

const Privacy = () =>
  <div className="privacy-box">
    SENA CGMLTI 2021 Copyright © 2021 Todos los derechos reservados
  </div>

const Contact = () =>
  <div className="contact-box-left column">
    <p className="contact-box-title">CONTÁCTANOS</p>
    <div className="contact-details">
      <ContactDetail variant="address" />
      <ContactDetail variant="phone" />
      <ContactDetail variant="mail" />
    </div>
  </div>

const NavLinks = () =>
  <div className="footer-navlinks">
    <p className="contact-box-title">ÁREAS DE INVESTIGACIÓN</p>
    <div className="menu-footer column">
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
        to='/simposio'
        activeClassName="selected"
        >
        Simposio
      </NavLink>
    </div>
  </div>

const ContactDetail = ({ variant }) => {
  const contact = getContactDetails(variant)
  return (
    <div className="contact-detail row">
      {/* <img
        src={contact.icon}
        alt={variant}
        className={`contact-detail-icon ${variant === 'address' ? 'small' : '' }`}
      /> */}
      {contact.icon}
      <p className="contact-detail-text">
        {contact.text}
      </p>
    </div>
  )
}

export default Footer
