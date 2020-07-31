import React from 'react'
import Button from '../Button'
import './styles.css'
import logo from '../../assets/img/fotofilm.png'
import wick from '../../assets/img/wick.png'
import ardilla from '../../assets/img/ardilla.png'

class Fotofilm extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {   
    return (
      <div className="fotofilm">
        <section className="fotofilm-header column">
          <img src={logo} alt="sena" width="300" />
          <h1>Suomaya Fotofilm Festival 2019</h1>
          <p>
            El Grupo de Investigación SUOMAYA convoca a los aprendices
            del Centro de Gestión de Mercados, Logístca y Tecnologías de la información,
            a participar en el evento SUOMAYA FOTOFILM FESTIVAL 2019, que se desarrollará en el marco del
            “I Congreso Internacional de Industria 4.0 y Economía Naranja y III Simposio de Ciencia,
            Innovación y Tecnología” en sus dos categorías Cortometraje y Fotografía.
          </p>
        </section>
        <section className="fotofilm-content column">
          <h2>¡Elige una de las categorías y conoce las bases del concurso!</h2> 
          <div className="fotofilm-categories row">
            <div className="fotofilm-category column">
              <img src={wick} alt="sena" width="280" /> 
              <Button variant="small" route="cortometraje">
                  Cortometraje
              </Button>
            </div>
            <div className="fotofilm-category column">
              <img src={ardilla} alt="sena" width="280" /> 
              <Button variant="small" route="fotografia">
                  Fotografía
              </Button>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Fotofilm
