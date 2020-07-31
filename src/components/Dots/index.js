import React from 'react'
import './styles.css'

const Dots = () =>
  <div className="dots row">
    <Dot />
    <Dot />
    <Dot />
  </div>

  const Dot = () =>
    <div className="dot"></div>

export default Dots