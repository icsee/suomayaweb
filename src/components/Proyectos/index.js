import React from 'react'
import './styles.css'
import Button from '../Button'
import {  getProyecto } from '../../utils/proyectos'

const listProyecos = ['logistica', 'blockchain', 'iot', 'energia']

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
                      <img src={proyecto.icon} alt={proyecto.title} />
                      <div>

                        <p> {proyecto.title}</p>
                        <Button  variant="small">
                            Ir al proyecto
                        </Button>
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