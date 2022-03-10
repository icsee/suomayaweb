import React from 'react'
import DiaAgenda from './DiaAgenda'
import './styles.css'

const Agenda = () => {
  const [day, setDay] = React.useState(1)

  const isSelected = React.useCallback(
    (currentDay) => {
      if (currentDay === day) {
        return 'selected'
      }
      return ''
    }
  , [day])
  
  return (
    <>
      <div className="simposio-agenda-menu column">
        <h1>Agenda del evento</h1>
        <ul className="row">
        
          <li className={isSelected(1)} onClick={() => setDay(1)}>
            Miércoles
          </li>
          <li className={isSelected(2)} onClick={() => setDay(2)}>
            Jueves
          </li>
          <li className={isSelected(3)} onClick={() => setDay(3)}>
            Viernes
          </li>
          
        </ul>
      </div>
      <div className="simposio-agenda-content column">
        <DiaAgenda dayIndex={day}/>
      </div>
    </>
  )
}

export default Agenda
