import React from 'react'
import Button from '../Button'
import Agenda from './Agenda'
import './styles.css'
// import flyer from '../../assets/img/simposio.jpg'
import flyer from '../../assets/img/seminario.png'
import flyer2 from '../../assets/img/congreso2022.jpg'
// import logoSimposio from '../../assets/img/simposio2.png'
import sena from '../../assets/img/sena.png'
import sennova from '../../assets/img/sennova.png'
// import foto1 from '../../assets/img/foto1.jpg'
// import foto2 from '../../assets/img/foto2.jpg'
// import foto3 from '../../assets/img/foto3.jpg'
// import foto4 from '../../assets/img/foto4.jpg'
// import foto5 from '../../assets/img/foto5.jpg'
// import foto6 from '../../assets/img/foto6.jpg'

class Simposio extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    return (
      <div className="simposio">
        <section className="simposio-top row">
          <div className="simposio-top-info column">
            <h1>IV Congreso Internacional de Investigación aplicada</h1>
            <h2>VII Simposio Internacional de Ciencia Innovación y tecnología</h2>
            <h3>Nuevas economías y tendencias tecnológicas </h3>
            <p>
            Dentro de las políticas de Investigación para el Servicio Nacional de Aprendizaje, 
            en el marco del sistema de Investigación SENNOVA, se plantea que la entidad debe procurar el desarrollo
             de la investigación aplicada; que permita a los aprendices la capacidad de plantear y desarrollar soluciones 
             a problemas que se enfoquen a mejorar la productividad de las empresas y el pais (SENA, 2014). En ese orden de 
             ideas, el SENA actúa como una entidad de fomento con un rol protagónico en la escena del desarrollo tecnológico 
             y la competitividad del país, que debe generar un conocimiento que permita retroalimentar los programas curriculares,
              los proyectos en Tecnoparques y el sector productivo (SENA, 2014) Así las cosas, se plantea el IV Congreso 
              Internacional de Investigación aplicada, nuevas economías y tendencias tecnológicas y VII Simposio Internacional de 
              Ciencia Innovación y tecnología, tomando como eje articulador el concepto de "nuevas economías" que será desplegado 
              a continuación.

              
              
              <br /> <br /> <strong>Agenda del evento: </strong>
              <br />PROXIMAMENTE 
             
              <br />
              
            
              <br />
            </p>
            <div className="simposio-top-support column">
              <h2>Con el apoyo de:</h2>
              <div className="support-logos row">
                <img src={sena} alt="sena" width="90" />
                <img src={sennova} alt="sennova" width="210" />
                {/* <img src={logoSimposio} alt="simposio" width="210" /> */}
              </div>
              {/* <p>Inscripciones cerradas</p> 
              https://docs.google.com/forms/d/e/1FAIpQLSeZa4JonFjq7s7oDPnDvMgRBAgRlPvMzPnNDFYcCo72-D0C6w/viewform*/}
              <Button link="https://docs.google.com/forms/d/e/1FAIpQLSenu8ypkFOjQEJUN0O7Nxyc-J7oZkw-_277PVLbA8nkSVJRfQ/viewform">
                  INSCRÍBETE AQUÍ
              </Button>
             
            </div>
          </div>
          <img 
            className="flyer"
            alt="flyer"
            src={flyer2}
          />
        </section>
        <hr className="line container" />
        <section className="simposio-agenda column">
        
        </section>
        
       
      </div>
    )
  }
}


export default Simposio