import React from 'react'
import './styles.css'
import Semilleros from './Semilleros'
import Revista from './Revista'

const Home = () => {
    return(
      <div>
        <Semilleros />
        <hr className="line container" />
        <Revista />
      </div>
    )
}

export default Home