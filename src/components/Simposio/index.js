import React from 'react'
import Button from '../Button'
import Agenda from './Agenda'
import './styles.css'
// import flyer from '../../assets/img/simposio.jpg'
import flyer2 from '../../assets/img/seminario.png'
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
            <h1>II SEMINARIO DE INVESTIGACIÓN E INNOVACION</h1>
            <h2>GRUPO SUOMAYA</h2>
            <p>
              Este evento surge ante la necesidad de difundir  y posicionar  
              los  procesos de  investigación, desarrollo tecnológico e innovación
              realizados en CGMLTI como también los avances y resultados de los
              proyectos  SENNOVA y cuenta con la participación de diferentes invitados
              como empresarios, universidades, IES, líderes SENNOVA e investigadores. 
              
              
              <br /> <br /> <strong>Agenda del evento: </strong>
              <br />Mayo 11: 
              <br />Juan Carlos Amézquita 9:00 am - 10:00 am
              <br />Vladimir Ducon 10:00 am - 11:00 am
              <br />Luis Gabriel Moreno Sandoval 11:00 am - 12:00 pm
              <br />Juan Manuel Aparicio Camargo  2:00 pm - 3:00 pm
              <br />Hernan Eduardo Saldaña  3:00 pm - 4:00 pm
              <br />Daniel Restrepo Jimenez  4:00 pm - 5:00 pm
              <br />Alejandro Medina Franco  5:00 pm - 6:00 pm
              <br />
              <br />Mayo 12: 
              <br />Juan Sebastian Daza 9:00 am - 10:00 am 
              <br />Ana María Cruz Pacheco  10:00 am - 1:00 pm 
              <br />Juan Sebastian Daza  2:00 pm - 3:00 pm 
              <br />Jorge Eliécer Posada Pinzón 3:00 pm - 4:00 pm 
              <br />Rafael Socarrás Barros   4:00 pm - 5:00 pm 
              <br />Alejandro Medina Franco  5:00 pm - 6:00 pm
              <br />
              <br />Mayo 13: 
              <br />Juan Sebastian Daza  9:00 am - 10:00 am 
              <br />Ana María Cruz Pacheco   10:00 am - 1:00 pm 
              <br />Juan Sebastian Daza  2:00 pm - 3:00 pm 
              <br />Jorge Eliécer Posada Pinzón  3:00 pm - 4:00 pm 
              <br />Rafael Socarrás Barros   4:00 pm - 5:00 pm 
              <br />Alejandro Medina Franco  5:00 pm - 6:00 pm
              <br />
              <br />Mayo 14: 
              <br />Juan Sebastian Daza  9:00 am - 10:00 am 
              <br />Ana María Cruz Pacheco   10:00 am - 1:00 pm 
              <br />Juan Sebastian Daza  2:00 pm - 3:00 pm 
              <br />Nicolas Afanador  3:00 pm - 5:00 pm 
            
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
              <Button link="https://docs.google.com/forms/d/e/1FAIpQLSeDGZ2pKucJ0UqP8YDIewhcBzrzQm9kes7FjvimHU7TMIaBlw/viewform?vc=0&c=0&w=1&flr=0&gxids=7628">
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