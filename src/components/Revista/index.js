import React from 'react'
import logoRevista from '../../assets/img/Logoretoazul.png'
import avatarfb from '../../assets/img/facebook.jpg'
import logoig from '../../assets/img/fondo_ig.jpeg'
import Button from '../Button'
import './styles.css'

class Revista extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    return(
      <div className="semillero-detail column">
        <div className="revista column">
          <img src={logoRevista} alt="logoRevista" />
          <p>
          RETO — Revista Especializada en Tecnologías Transversales de la Organización — es una publicación anual impresa y digital del SENA, Regional Distrito Capital, Centro de Gestión de Mercados, Logística y Tecnologías de la Información - CGMLTI. Tiene como objetivo difundir conocimiento teórico práctico, relacionado con las áreas de formación del CGMLTI: mercadeo, logística, teleinformática e industrias creativas.
            <br/><br/>
            Por su carácter científico, se prefieren artículos del tipo de investigación científica y tecnológica, de revisión y de reflexión. No obstante, como complemento a la formación, se pueden tener en cuenta cartas al editor, traducciones o reseñas bibliográficas. Se publican manuscritos originales que superen el proceso de revisión por pares y contengan la unidad interna característica de un artículo científico.
            <br/><br/>
          La revista se ha publicado desde 2012 y está dirigida a todo aquel que esté interesado en temas de mercadeo, logística, teleinformática e industrias creativas.
          </p>
          <h1>Explore las publicaciones de RETO</h1>
          <p>
           
          </p>
          {/* <Button link="http://revistas.sena.edu.co/index.php/RETO">
            IR A LA REVISTA
             </Button>*/}
            </div>
       <section className="revista-team">
     
          <div className="team-content column">
            <h1>Conozca:</h1>
            <div className="team-members row">
            <div className="member column">
              <img src={avatarfb} alt="avatar" />
              <p className="member-name">Facebook</p>
              <a href='https://www.facebook.com/revistaretosena/' target="_blank"><p className="member-detail">@Revistaretosena</p></a>
             
            </div>
            <div className="member column">
              <img src={logoig} alt="avatar" />
              <p className="member-name">Instagram</p>
              <a href='https://instagram.com/revistaretosena' target="_blank">
              <p className="member-detail">@Revistaretosena</p>
              </a>
            </div>
          </div>
          </div>
        </section>
       
        <hr className="line container" />
        <div className="revista column">
          <h1>Número actual</h1>
          <iframe width="620px" height="600px" src="https://www.yumpu.com/es/embed/view/TjHsqrJBileyR5DN" frameborder="0" allowfullscreen="true"  allowtransparency="true"></iframe>
        </div>
        <section className="revista-join column">
          <h1>¿Quieres ser parte de nuestra revista?</h1>
          <p>
          La revista Reto selecciona sus artículos mediante el proceso de revisión por pares según el método de evaluación a ciegas, por parte de académicos y expertos revisores anónimos dentro del campo de estudio del artículo. Se evalúan los manuscritos recibidos y se determinan que los artículos cumplen con las normas de estilo y contenido indicadas en las directrices para los autores. En el siguiente enlace puedes encontrar toda la información necesaria para hacer parte de la revista.
          </p>
          <h2>rrevistareto@misena.edu.co</h2>
        </section>
      </div>
    )
  }
}

export default Revista