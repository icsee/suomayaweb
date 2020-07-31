import React from 'react'
import logoRevista from '../../assets/img/revistareto.png'
import Button from '../Button'
import './styles.css'

class Revista extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    return(
      <div className="container">
        <div className="revista column">
          <img src={logoRevista} alt="logoRevista" />
          <p>
            La revista Reto, es una revista especializada en tecnologías transversales de la organización,
            del Centro de de gestión de mercados, logística y tecnologias de la información, del servicio 
            de aprendizaje SENA, regional distrito capital, de publicación anual e impresa. En la revista 
            Reto se publican artículos teórico - prácticos relacionados con las áreas objeto de formación.
            <br/><br/>
            La revista es de acceso libre a su contenido, a partir de la premisa de llevar al público 
            el resultado de la investigación en forma gratuita, para aumentar el conocimiento de la humanidad.
            La revista acoge el código de conducta del comité de ética de publicaciones COPE / Commitee on
            publication ethics, COPE.
          </p>
          <h1>¿Quieres ser parte de nuestra revista?</h1>
          <p>
            La revista Reto selecciona sus artículos mediante el proceso de revisión por pares según el método
            de evaluación a ciegas, por parte de académicos y expertos revisores anónimos dentro del campo de
            estudio del artículo. Se evalúan los manuscritos recibidos y se determinan que los artículos cumplen
            con las normas de estilo y contenido indicadas en las directrices para los autores. En el siguiente
            enlace puedes encontrar toda la información necesaria para hacer parte de la revista.
          </p>
          <Button link="http://revistas.sena.edu.co/index.php/RETO">
            IR A LA REVISTA
          </Button>
        </div>
        <hr className="line container" />
        <div className="revista column">
          <h1>Número actual</h1>
          <iframe width="620px" height="600px" src="https://www.yumpu.com/es/embed/view/TjHsqrJBileyR5DN" frameborder="0" allowfullscreen="true"  allowtransparency="true"></iframe>
        </div>
      </div>
    )
  }
}

export default Revista