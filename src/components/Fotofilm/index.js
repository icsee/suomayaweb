import React from 'react'
import Button from '../Button'
import './styles.css'
import logo from '../../assets/img/ExploraTECHbanner.jpeg'
import ganadores from '../../assets/img/ganadores.jpeg'
import ganador1 from '../../assets/img/ganador1.jpeg'
import ganador2 from '../../assets/img/ganador2.jpg'
import ganador3 from '../../assets/img/ganador3.jpeg'
import ganador4 from '../../assets/img/ganador4.jpeg'
import ganador5 from '../../assets/img/ganador5.jpeg'
import wick from '../../assets/img/wick.png'
import ardilla from '../../assets/img/ardilla.png'
import avatarfb from '../../assets/img/facebook.jpg'
import logoig from '../../assets/img/fondo_ig.jpeg'

class Fotofilm extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {   
    return (
      <div className="fotofilm-content-text">
      <div className="fotofilm">
        <section className="fotofilm-header column">
          <img src={logo} alt="sena" width="1300" />
          
          <p>
           
            El Grupo de Investigación SUOMAYA convocó a los aprendices SENA, 
            a participar en el concurso Explora TECH 2024 que se desarrolló en el marco del 
            “IV Simposio de Ciencia, Innovación y Tecnología” en sus tres categorías: Hackathon, 
            podcast y mini-tutorial.
          </p>
        </section>
        {/*
        <section className="fotofilm-content column">
          <h2>¡Elige una de las categorías y conoce las bases del concurso!</h2>
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
        </section>*/}
        <div className='fotofilm-winners '>

       
        <section className="column">
          <h2>Ganadores del Concurso Explora TECH 2024</h2>
          
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Categoría</th>
                  <th scope="col">Aprendiz</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={2}>A- Categoría Podcast</td>
                  <td>Fredy Alfonso Henríquez Ardila,</td>
                 
                </tr>
                <tr>
                  <td>Nicolle Valeria Correa Olano</td>
                 
                </tr>
                <tr>
                  <td rowSpan={2}>B- Categoría minitutorial o social media</td>
                  <td>Jarol David Bejarano Morales</td>
                 
                </tr>
                <tr>
                  <td>Nicolas Arturo Espitia Paez</td>
                </tr>
                <tr>
                  <td rowSpan={7}>C- Categoría software </td>
                  <td>Leandro Ramírez</td>
                 
                </tr>
                <tr>
                  <td>Daniel López</td>
                </tr>
                <tr>
                  <td>Miguel Mendivelso</td>
                </tr>
                <tr>
                  <td>Leidy Espinel</td>
                </tr>
                <tr>
                  <td>Cristian Rangel</td>
                </tr>
                <tr>
                  <td>Ricardo Mora</td>
                </tr>
                <tr>
                  <td>Gabriel Masutier</td>
                </tr>
              </tbody>
            </table>
           
          </div>
        </section>

        <hr className="line container" />
        </div>
        </div>
        <div className='fotofilm-ganadores column'>
        <section className="revista-team">
     
          <div className="team-content column">
            <h1>Conozca a los ganadores:</h1>
            <div className="team-members row">
            <div className="member column memberFototilm">
              <img src={ganador1} alt="avatar" />
              <p className="member-name">Daniel Santiago López Isaza</p>
             <p className="member-detail">santiagolopez10d@gmail.com</p>
             <p className="member-detail2">Centro de gestion de mercados, Logistica y Tecnologias de la Información</p>
            </div>
            <div className="member column memberFototilm">
              <img src={ganador2} alt="avatar" />
              <p className="member-name">Leandro Jossue Ramírez Vezga</p>
            
              <p className="member-detail">developer.leandro.ramirez@gmail.com</p>
              <p className="member-detail2">Tecnólgo en Análisis y Desarrollo de Sistemas de Información</p>
            </div>
            <div className="member column memberFototilm">
              <img src={ganador3} alt="avatar" />
              <p className="member-name">Cristian Humberto Rangel Buitrago</p>
            
              <p className="member-detail">rangelcristian200217@gmail.com </p>
              <p className="member-detail2">Tecnólgo en Análisis y Desarrollo de Sistemas de Información</p>
            </div>
            <div className="member column memberFototilm">
              <img src={ganador4} alt="avatar" />
              <p className="member-name">Freddy Alfonso Henríquez Ardila</p>
            
              <p className="member-detail">freddy.aha@gmail.com </p>
              <p className="member-detail2">Técnico en Construcción, Mantenimiento y Reparación de Estructuras en Guadua </p>
            
            </div>
            <div className="member column memberFototilm">
              <img src={ganador5} alt="avatar" />
              <p className="member-name">Gabriel Eduardo Masutier Robayo</p>
            
              <p className="member-detail">gabrielmasutier@gmail.com</p>
              <p className="member-detail2">Programación para Analitica de Datos</p>
             
            </div>
            
          </div>
          </div>
        </section>
        <h2>Premiación</h2>
        <img src={ganadores} alt="sena" width="800" />
        </div>
      </div>
    )
  }
}

export default Fotofilm
