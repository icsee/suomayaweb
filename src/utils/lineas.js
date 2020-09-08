import logistica from '../assets/img/wifi.png'
import marketing from '../assets/img/marketing.svg'
import ti from '../assets/img/ti.svg'
import ic from '../assets/img/ic.svg'
import aleph from '../assets/img/aleph.png'
import innovatics from '../assets/img/innovatics.png'
import siam from '../assets/img/siam.png'
import neurocomarketing from '../assets/img/neurocomarketing.png'
import industriasc from '../assets/img/ic.png'
import siclog from '../assets/img/LogoSICLOG.png'

export function getLinea(linea){
  if(linea === 'logistica'){
    return {
      name: 'Logística',
      icon: logistica,
      semilleros: [
        {
          name: 'Siclog',
          description: 'La línea de investigación está orientada a la búsqueda de mejores prácticas logísticas en el desarrollo de redes de suministro en escenarios globalizados y sostenibles.',
          logo: siclog
        }
      ]
     }
  } else if(linea === 'mercadeo'){
      return {
        name: 'Mercadeo',
        icon: marketing,
        semilleros: [
          // {
          //   name: 'Neurocomarketing',
          //   description: 'El semillero de Investigación es un grupo que promueve la capacidad investigativa mediante la fundamentación técnica-Pedagógica en procesos de investigación aplicada al fortalecimiento de las organizaciones.',
          //   logo: neurocomarketing
          // },
          // {
          //   name: 'Siam',
          //   description: 'Semillero de investigación cuyo objetivo principal es incentivar los hábitos de investigación en los aprendices que pertenecen al programa de articulación con la media.',
          //   logo: siam
          // },
          {
            name: 'Aleph',
            description: 'El semillero de investigación tiene como fin fomentar la investigación formativa mediante un espacio académico en la búsqueda de nuevos conocimientos, generando proyectos que ayuden a resolver problemáticas de las empresas a nivel nacional.',
            logo: aleph
          }
        ]
      }
  } else if(linea === 'creativas') {
      return {
        name: 'Industrias Creativas',
        icon: ic,
        semilleros: [
          {
            name: 'Industrias Creativas',
            description: 'Semillero dedicado a la construcción de contenido creativo enfocado a las posibilidades de la que da la economía naranja y el impulso del gobierno al sector creativo.',
            logo: industriasc
          }
        ]
      }
  } else if(linea === 'tics') {
      return {
        name: 'Tecnología',
        icon: ti,
        semilleros: [
          {
            name: 'Innovatics',
            description: 'Somos un equipo de aprendices e instructores, que promueven la innovación e investigación, mediante el estudio sistemático y la aplicación de nuevas tecnologías en los procesos de mantenimiento de infraestructura de TI, la  gestión de redes de datos, el diseño y el desarrollo de software y videojuegos.',
            logo: innovatics
          }
        ]
      }
  }
}