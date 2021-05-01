import { martes, miercoles, jueves, viernes } from '../utils/agenda'

const getDayDetails = (index) => {
  if (index === 1) {
    return martes
  }
  if (index === 2) {
    return miercoles
  }
  if (index === 3) {
    return jueves
  }
  return viernes
}

export default getDayDetails