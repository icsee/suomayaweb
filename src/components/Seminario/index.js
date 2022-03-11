import React from 'react'
import Button from '../Button'
import Agenda from './Agenda'
import './styles.css'
// import flyer from '../../assets/img/simposio.jpg'
import flyer from '../../assets/img/seminario.png'
import flyer2 from '../../assets/img/baner.jpeg'
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
            <h1>III SEMINARIO DE INVESTIGACIÓN GRUPO SUOMAYA </h1>
            <h2>TRANSFORMACIÓN DIGITAL E INDUSTRIA 4.0</h2>
            <p>
              Este evento busca difundir las iniciativas, avances y resultados 
              de los proyectos de investigación, desarrollo tecnológico e innovación 
              alineados a las temáticas de investigación del grupo Suomaya, generados por
              la academia y las empresas ganadoras de convocatorias de innovación, a la
              comunidad SENA, SENNOVA y público en general.
              
              
              <br /> <br /> <strong>Agenda del evento: </strong>
              <br />Conferencias especializadas Marzo 16: 
              <br />Tecnologías maduras Vs. Tecnologías emergentes para las organizaciones y la industria 4.0. 8:00 am - 8:30 am  🇨🇴
              <br />Analítica de datos más allá de los algoritmos. 8:30 am - 9:00 am 🇨🇴 
              <br />Reclutamiento automatizado, basado en Machine Learning. 9:10 am - 9:30 am 🇨🇴
              <br />Contenidos Makemake mediante innovaciones de software. 9:40 am - 10:00 am 🇨🇴
              <br />Gestión de proyectos de construcción de Software Chat Bot Sena. 10:10 am - 10:30 am 🇨🇴
              <br />Oportunidades en la Cuarta Revolución Industrial.  10:30 am - 11:00 am 🇨🇴
              <br />Aplicación de sistemas de monitorización para la gestión de la eficiencia energética. 11:10 am - 11:30 am 🇨🇴
              <br />Tecnologías 4.0 para la reducción del uso desmesurado de energía y agua. 11:40 am - 12:10 am 🇨🇴
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
              <Button link="https://forms.gle/L824eAM6fCxnvrog9">
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
          <Agenda />
        </section>
        
        <Button link="https://www.youtube.com/channel/UCCRJH1Uau7xpxiKJE1S8ijw">
                  ÚNETE AL EVENTO
        </Button>
      </div>
    )
  }
}


export default Simposio