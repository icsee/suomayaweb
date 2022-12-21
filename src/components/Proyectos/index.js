import React from 'react'
import './styles.css'
import Button from '../Button'
import {  getProyecto } from '../../utils/proyectos'
import { Link } from 'react-router-dom'

const listProyecos = ["chatoffline","recoleccionllantas","iotcognitivo","sipro", 'logistica', 'blockchain', 'iot', 'energia']

class Proyectos extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    return(
      <div className="proyectos column">
          {
              listProyecos.map((item,index) => {
                const proyecto = getProyecto(item)
                return (
                  <section key={item} className="fila column">
                    <div className="proyecto">
                    <div className="itemproyecto row">
                      <img src={proyecto.icon} alt={proyecto.title} width="110px" height="130px" />
                    <div>

                      <p> {proyecto.title}</p>
                      {proyecto.type == 'external' &&
                          <a href={proyecto.url} target="_blank">
                          <input type ='button' value="Ir al proyecto" className="button small"/>
                          </a>  
                        
                      }
                      {proyecto.type == 'intern' &&
                          <Button variant="small" route={proyecto.url}>
                            Ir al proyecto
                          </Button>  
                        
                      }
                       
                       
                        
                      </div>
                      </div>
                    </div>
                  { index < 5 &&
                    <hr />
                  }
                  </section>
                
                )

              })
          }
      </div>
    );
  }
}

export default Proyectos