import React from 'react'
import Button from '../Button'
import Agenda from './Agenda'
import './styles.css'
// import flyer from '../../assets/img/simposio.jpg'
import flyer from '../../assets/img/seminario.png'
import flyer2 from '../../assets/img/poster1-01.png'
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
            <h1>VI SIMPOSIO DE CIENCIA INNOVACIÓN Y TECNOLOGÍA</h1>
            <h2>GRUPO SUOMAYA</h2>
            <p>
              Este evento busca difundir las iniciativas, avances y resultados 
              de los proyectos de investigación, desarrollo tecnológico e innovación 
              alineados a las temáticas de investigación del grupo Suomaya, generados por
              la academia y las empresas ganadoras de convocatorias de innovación, a la
              comunidad SENA, SENNOVA y público en general.
              
              
              <br /> <br /> <strong>Agenda del evento: </strong>
              <br />Julio 7: 
              <br />Camilo Mendivelso 8:30 am - 9:00 am  🇨🇴
              <br />Fabiola Velarde Galicia 9:00 am - 9:45 am  🇲🇽 
              <br />Nick Neal-Useche 9:50 am - 10:35 am 🇬🇧
              <br />Rogger O. Morán S. 10:40 am - 11:25 am 🇵🇪
              <br />Jorge Santos 11:30 am - 12:15 pm 🇨🇴
              <br />Oscar Parra Baquero 2:00 pm - 4:00 pm 🇨🇴
              <br />Jorge Eliécer Posada Pinzón 4:00 pm - 5:00 pm 🇨🇴
              <br />
              <br />Julio 8: 
              <br />Juan Sebastian Daza 8:30 am - 10:30 am 🇨🇴
              <br />Juan Manuel Aparicio Camargo  10:30 am - 11:30 am 🇨🇴             
              <br />Hernan Eduardo Saldaña  11:30 am - 12:30 pm 🇨🇴
              <br />Oscar Parra Baquero 2:00 pm - 4:00 pm  🇨🇴
              <br />Beatriz Botello 4:00 pm - 6:00 pm  🇨🇴
              <br />
              <br />Julio 9: 
              <br />Juan Sebastian Daza  8:30 am - 10:30 am  🇨🇴 
              <br />Jorge Gil Roa 10:30 am - 12:30 pm 🇨🇴
              <br />Oscar Parra Baquero 2:00 pm - 4:00 pm 🇨🇴
              <br />Jorge Eliécer Posada Pinzón 4:00 pm - 5:00 pm 🇨🇴
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
              <Button link="https://docs.google.com/forms/d/e/1FAIpQLSeDGZ2pKucJ0UqP8YDIewhcBzrzQm9kes7FjvimHU7TMIaBlw/viewform?vc=0&c=0&w=1&flr=0&gxids=7628">
                  INSCRÍBETE AQUÍ
              </Button>
              <Button link="https://suomaya.co/build/static/media/Circular%20001%20de%202022.pdf">
                  DESCARGA 
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