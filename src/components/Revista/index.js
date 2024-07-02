import React from 'react'
import logoRevista from '../../assets/img/Logoretoazul.png'
import avatarfb from '../../assets/img/facebook.jpg'
import logoig from '../../assets/img/fondo_ig.jpeg'
import latindex from '../../assets/img/latindex.png'
import google from '../../assets/img/google.jpg'
import correo from '../../assets/img/correo2.jpeg'
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
          <p>EISSN 2619-4112 &nbsp;&nbsp;&nbsp;&nbsp; ISSN 2322-8059</p>
          <h1>RETO: un espacio para compartir conocimiento</h1>
          <p>
          RETO — Revista Especializada en Tecnologías Transversales de la Organización — es una publicación anual impresa y digital del SENA, Regional Distrito Capital, Centro de Gestión de Mercados, Logística y Tecnologías de la Información - CGMLTI. Tiene como objetivo difundir conocimiento teórico práctico, relacionado con las áreas de formación del CGMLTI: mercadeo, logística, teleinformática e industrias creativas.
            <br/><br/>
            Por su carácter científico, se prefieren artículos del tipo de investigación científica y tecnológica, de revisión y de reflexión. No obstante, como complemento a la formación, se pueden tener en cuenta cartas al editor, traducciones o reseñas bibliográficas. Se publican manuscritos originales que superen el proceso de revisión por pares y contengan la unidad interna característica de un artículo científico.
            <br/><br/>
          La revista se ha publicado desde 2012 y está dirigida a todo aquel que esté interesado en temas de mercadeo, logística, teleinformática e industrias creativas.
          </p>
        
         
          {/* <Button link="http://revistas.sena.edu.co/index.php/RETO">
            IR A LA REVISTA
             </Button>*/}
            </div>

            <div className="revista column">
        <h1>Explore las publicaciones de RETO</h1>
        <iframe title="Publicaciones Revista RETO" frameborder="0" width="1000" height="675"  src="https://view.genially.com/662fee3264d18e0014e546e0" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe>
        </div>
        <div className='revista column'>
          <h1>Conozca</h1>
        <div className='row'> 
        <Button link="https://revistas.sena.edu.co/index.php/RETO">
        Portal de RETO
          </Button>&nbsp;
          <Button link="https://revistas.sena.edu.co/index.php/RETO/about/submissions">
          Directrices para autores
          </Button>&nbsp;
          <Button link="https://revistas.sena.edu.co/index.php/RETO/about/editorialTeam">
          Equipo RETO
          </Button>
        </div>
        </div>
       <section className="revista-team">
     
          <div className="team-content column">
            <h1>Contáctenos:</h1>
            <div className="team-members row">
            <div className="member column">
              <img src={avatarfb} alt="avatar" className="revista-redes" />
              <p className="member-name">Facebook</p>
              <a href='https://www.facebook.com/revistaretosena/' target="_blank"><p className="member-detail">@Revistaretosena</p></a>
             
            </div>
            <div className="member column">
              <img src={correo} alt="avatar" className="revista-redes" />
              <p className="member-name">Correo</p>
              <p className="member-detail">rrevistareto@misena.edu.co</p>
             
            </div>
            
            <div className="member column">
              <img src={logoig} alt="avatar" className="revista-redes" />
              <p className="member-name" >Instagram</p>
              <a href='https://instagram.com/revistaretosena' target="_blank">
              <p className="member-detail">@Revistaretosena</p>
              </a>
            </div>
          </div>
          </div>
        </section>
       
        <hr className="line container" />
        <div className="revista column">
        <h1>También estamos en</h1>
        <div className="team-members row">
        <div className="member column">
          <a href='https://latindex.org/latindex/ficha/28092' target='_blank'><img src={latindex} alt="avatar" className='imgrevista'/></a>
            <p className="revista-name">Latindex Directorio</p>
          </div>
       
        <div className="member column">
        <a target="_blank" href='https://scholar.google.com/citations?hl=e&view_op=list_works&authuser=8&gmla=AHoSzIUua_35J1Z4o6ac5dRIRHGzbpH9e1Qjm4J1R0ldaPLbU46fyB0jXKMBPbAbBg9Yq0fjifzzYifqz0s150RvJNCWyONRmlBhFAwcWKjdEVo&user=cm0KWg8AAAAJ'> 
         <img src={google} alt="avatar" className='imgrevista'/>
         </a>
            <p className="revista-name"> Google Académico</p>
          </div>
        </div>
        </div>
       {/**  <div className="revista column">
          <h1>Número actual</h1>
          <iframe width="620px" height="600px" src="https://www.yumpu.com/es/embed/view/TjHsqrJBileyR5DN" frameborder="0" allowfullscreen="true"  allowtransparency="true"></iframe>
        </div>*/}
        
        
        
        
      </div>
    )
  }
}

export default Revista