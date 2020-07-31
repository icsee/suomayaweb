import { miercoles, jueves, viernes } from '../utils/agenda'

const getDayDetails = (index) => {
  if (index === 1) {
    return miercoles
  }
  if (index === 2) {
    return jueves
  }
  return viernes
}

export default getDayDetails