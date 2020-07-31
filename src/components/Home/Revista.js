import React from 'react'
import Dots from '../Dots'
import Button from '../Button'
import portada from '../../assets/img/portadaSmall.png'

const Revista = () =>
  <section className="revista-home row">
    <img src={portada} alt="portada" />
    <div className="info-revista-home column">
      <h1 className="title-home">Revista Reto</h1>
      <Dots />
      <p className="text-home" >
        La Revista RETO es una publicación del Centro de Gestión 
        de Mercados, Logística y Tecnologías de la Información del SENA, 
        para fortalecer y visibilizar el conocimiento que generan 
        los grupos de investigación y dar mayor alcance a los desarrollos
        y resultados de los proyectos de investigación.
      </p>
      <Button route="revista">
        IR A LA REVISTA
      </Button>
    </div>
  </section>

export default Revista