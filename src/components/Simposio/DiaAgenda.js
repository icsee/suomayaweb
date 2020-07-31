import React from 'react'
import getDayDetails from '../../utils/simposio'
import './styles.css'

const DiaAgenda = ({ dayIndex }) => {
  const day = getDayDetails(dayIndex);
  return (
    <div key={dayIndex} className="day-section">
      <section className="day-header column">
        <h2>{`${day.fecha} de Octubre`}</h2>
        <p>Agenda</p>
      </section>
      <section className="day-cards column">
        {day.ponencias.map((ponencia) => (
          <div key={ponencia.nombre} className="day-card row">
            <img src={ponencia.avatar} alt="Avatar" />
            <div className="day-card-details column">
              <h3>{ponencia.nombre}</h3>
              <p className="day-card-detail-name">{ponencia.autor} <span>{ponencia.pais}</span></p>
              <p>{`Hora: ${ponencia.hora}`}</p>
              <p>{`Lugar: ${ponencia.lugar}`}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default DiaAgenda
