import React from 'react'
import Navbar from '../Navbar'
import Button from '../Button'
import './styles.css'
import logoImg from '../../assets/img/logoimg.png'


const TopSection = ({ location }) =>{
    if (location === '/') {
      return(
        <div className="top-section img">
          <div className="container">
            <Navbar variant="home" type="home" />
            <div className="top-section-content column">
              <img src={logoImg} alt="img" />
              <h1>Investigación. Innovación. Desarrollo</h1>
              <p>Con el fin de difundir y posicionar los procesos de investigación, desarrollo 
                 tecnológico e innovación realizados en el Centro de Gestión de Mercados, 
                 Logística y Tecnologías de la Información, nace el Grupo de Investigación SUOMAYA, 
                 que cuenta con Semilleros de Investigación de los programas de formación de Mercadeo, 
                 Logística, Industrias Creativas y Teleinformática.
              </p>
              <Button variant="big" route="semilleros">
                CONOCE MÁS
              </Button>
            </div>
          </div>
        </div>
      )
    } else{
        return(
          <div className="top-section-default">
            <div className="container">
              <Navbar />
            </div>
          </div>
        )
    }
}
export default TopSection