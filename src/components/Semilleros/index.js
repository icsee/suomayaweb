import React from 'react'
import Button from '../Button'
import './styles.css'
import { getLinea } from '../../utils/lineas'

const lineas = ['logistica', 'mercadeo', 'creativas', 'tics']

class Semilleros extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    return(
      <div className="semilleros column">
        <div className="box"></div>
        <section className="semilleros-header column">
          <h1>Semilleros Suomaya</h1>
          <p>
            El Grupo de Investigación SUOMAYA cuenta con Semilleros de Investigación 
            en los programas de formación de Mercadeo, Logística, Industrias Creativas
            y Teleinformática.
          </p>
        </section>
        {
          lineas.map((item, index) => {
            const linea = getLinea(item)
            return(
              <section key={linea.name} className="linea column">
                <div className="linea-header row">
                  <h2>{linea.name}</h2>
                  <img src={linea.icon} alt={linea.name} />
                </div>
                <div className="semilleros-list">
                  {
                    linea.semilleros.map((item) => (
                      <div key={item.name} className="semillero row">
                        <img src={item.logo} alt="logo"  className="semillero-img"/>
                        <div>
                          <h1>{item.name}</h1>
                          <p>{item.description}</p>
                          <Button route={item.name.toLowerCase().replace(/\s/g, '')} variant="small">
                            Ir al semillero
                          </Button>
                        </div>
                      </div>
                    ))
                  }
                </div>
                { index < 3 &&
                  <hr />
                }
              </section>
            )
          })
        }
      </div>
    )
  }
}

export default Semilleros