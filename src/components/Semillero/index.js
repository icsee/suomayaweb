import React from 'react'
import './styles.css'
import TeamMembers from './TeamMembers.js'
import getSemillero from '../../utils/semilleros'

class Semillero extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { variant } = this.props
    const semillero = getSemillero(variant)
    return (
      <div className="semillero-detail column">
        <section className="semillero-header column">
          <img src={semillero.logo} alt="logo" className={variant} />
          <h1>{semillero.name}</h1>
          <p>{semillero.description}</p>
        </section>
        <section className="semillero-team">
          <div className="team-content column">
            <h1>Nuestro Equipo</h1>
            <TeamMembers members={semillero.team} />
          </div>
        </section>
        <section className="semillero-join column">
          <h1>¿Quieres ser parte de nuestro grupo?</h1>
          <p>
            Escríbenos un correo a la siguiente dirección y
            cuéntanos por qué quieres unirte a nosotros.
            Te esperamos!
          </p>
          <h2>{semillero.contact}</h2>
        </section>
      </div>
    )
  }
}

export default Semillero
