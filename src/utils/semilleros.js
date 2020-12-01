import logistica from '../assets/img/LogoSICLOG.png'
import avatar from '../assets/img/avatar.png'
import avatarCristina from '../assets/img/AvatarCristinaRamírez.PNG'
import avatarMonica from '../assets/img/AvatarMonicaDiaz.PNG'
import avatarfb from '../assets/img/facebook.jpg'
import avatarweb from '../assets/img/paginaweb.png'
import aleph from '../assets/img/aleph.png'
import innovatics from '../assets/img/Innovatics2.png'
import siam from '../assets/img/siam.png'
import neurocomarketing from '../assets/img/neurocomarketing.png'
import industriasc from '../assets/img/ic.png'

import Nelson from '../assets/img/nelson.png'
const getSemillero = (semillero) => {
  if(semillero === 'innovatics') {
    return {
      logo: innovatics,
      name: 'Innovatics',
      contact: 'nagudeloc@sena.edu.co',
      description: 'Somos un equipo de aprendices e instructores del Centro de Gestión de Mercados, Logística y Tecnologías de la Información, de la Regional Distrito Capital -SENA, que promueven la innovación e investigación, mediante el estudio sistemático y la aplicación de nuevas tecnologías en los procesos de mantenimiento de infraestructura de TI, la gestión de redes de datos, el diseño y el desarrollo de software y videojuegos. Actualmente enfocados a la industria 4.0, realidad virtual inmersiva y aumentada, Big Data, IoT y Machine Learning.',
      team: [
        {
          name: 'Nelson Giovanni Agudelo C.',
          mail: 'nagudeloc@sena.edu.co',
          detail: 'Especialista en Telecomunicaciones y Teleinformática',
          avatar: Nelson  ,
        },
        {
          name: 'David Cáceres',
          mail: 'dlcaceres04@misena.edu.co',
          detail: 'Especialista en teleinformática',
          avatar: avatar,
        },
        {
          name: 'Gonzalo Salgado ',
          mail: 'gonzalo8416@misena.edu.co',
          detail: 'Diseñador Gráfico  ',
          avatar: avatar,
        },
        {
          name: 'Julián Urrea ',
          mail: 'jrurrea0@misena.edu.co',
          detail: 'Magister en Programación de Videojuegos',
          avatar: avatar,
        }
      ]
    }
  }
  if(semillero === 'siclog') {
    return {
      logo: logistica,
      name: 'Siclog',
      contact: 'cramirezm@sena.edu.co',
      description: `La línea de investigación está orientada la búsqueda de mejores prácticas logísticas para el desarrollo de cadenas de suministro en escenarios globalizados. Las nuevas expectativas de los mercados y las presiones tecnológicas del medio en el que se desarrollan las organizaciones, generan que los enfoques de la gestión estén reinventándose constantemente (García, 2006). El modelo de cadena de suministros funciona como una red integrada por varios proveedores, fabricantes, distribuidores, y consumidores finales, coordinados armoniosamente para satisfacer los requerimientos del cliente, con el menor costo y tiempo posible (Whitman et al, 1998, Ballou, 2000). La complejidad de su gestión depende de múltiples factores y no puede desligarse del desarrollo de sistemas logísticos para lograr el flujo eficiente de materiales, información y capital entre los actores involucrados.`,
      team: [
        {
          name: 'Cristina Ramírez Meneses',
          mail: 'cramirezm@sena.edu.co',
          detail: 'Líder de grupo de Investigación, Líder de línea de Investigación, investigadora',
          avatar: avatarCristina,
        },
        {
          name: 'Mónica Jazmín Díaz',
          mail: 'mjdiazr@sena.edu.co',
          detail: 'Apoyo en investigación',
          avatar: avatarMonica,
        },
        {
          name: 'Semillero SICLOG',
          mail: 'https://www.facebook.com/Semillero.Siclog/',
          detail: '',
          avatar: avatarfb,
        },
        {
          name: 'Página web ',
          mail: 'https://siclog.wixsite.com/siclog/por-que',
          detail: '',
          avatar: avatarweb,
        }
      ]
    }
  }
  if(semillero === 'siam') {
    return {
      logo: siam,
      name: 'Siam',
      contact: 'jauank@misena.edu.co',
      description: 'Semillero de investigación cuyo objetivo principal es incentivar los hábitos de investigación en los aprendices que pertenecen al programa de articulación con la media. En el momento el semillero esta realizando trabajos de investigación clásica dirigidos a la identificación de problemáticas relacionadas al área de mercadeo. ',
      team: [
        {
          name: 'Juan Carlos Saavedra',
          mail: 'jauank@misena.edu.co',
          detail: 'Especialista en marketing',
          avatar: avatar,
        },
        {
          name: 'Martha Patricia Milla',
          mail: 'marthamilla@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'Julieth Andrea Puentes',
          mail: 'juliethpuentes@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
      ]
    }
  }
  if(semillero === 'aleph') {
    return {
      logo: aleph,
      name: 'Aleph',
      contact: 'clapar@misena.edu.co',
      description: 'El semillero de investigación ALEPH tiene como fin fomentar la investigación formativa mediante un espacio académico multidisciplinario en donde estudiantes y los instructores se unan en la búsqueda de nuevos conocimientos, generando proyectos que ayuden a resolver problemáticas de las empresas a nivel nacional. Realizando una alianza entre los empresarios, diferentes semilleros de investigación SENA y universidades.',
      team: [
        {
          name: 'Claudia Patricia Ramírez',
          mail: 'clapar@misena.edu.co',
          detail: 'Especialista en marketing',
          avatar: avatar,
        },
        {
          name: 'Juan Carlos Saavedra',
          mail: 'jauank@misena.edu.co',
          detail: 'Especialista en marketing',
          avatar: avatar,
        },
        {
          name: 'Felipe Isaza',
          mail: 'felipeisaza@sena.edu.co',
          detail: 'Especialista en marketing',
          avatar: avatar,
        },
        {
          name: 'Gonzalo Salgado',
          mail: 'gonzalosalgado@sena.edu.co',
          detail: 'Especialista en marketing',
          avatar: avatar,
        }
      ]
    }
  }
  if(semillero === 'neurocomarketing') {
    return {
      logo: neurocomarketing,
      name: 'Neurocomarketing',
      contact: 'daisy.ramirez10@gmail.com',
      description: 'El semillero de Investigación NEUROCOMARKETING, es un grupo interdisciplinario compuesto por aprendices e instructores del programa Gestión de Mercados del CGMLTI, que promueve la capacidad investigativa mediante la fundamentación técnica-Pedagógica en procesos de investigación aplicada al fortalecimiento de las organizaciones. Dentro de su metodología incorpora conocimientos y herramientas correspondientes al campo del Neuromarketing, el cual se basa en el estudio de los procesos mentales que explican el comportamiento, preferencias y conductas de los consumidores y/o clientes para la toma de decisiones estratégicas.',
      team: [
        {
          name: 'Mariam Ramírez',
          mail: 'daisy.ramirez10@gmail.com',
          detail: 'Especialista en marketing',
          avatar: avatar,
        },
        {
          name: 'Clara Rocío Henao',
          mail: 'rociohenao@sena.edu.co',
          detail: 'Especialista en marketing',
          avatar: avatar,
        },
        {
          name: 'Cesar Medina',
          mail: 'cesarmedina@sena.edu.co',
          detail: 'Especialista en marketing',
          avatar: avatar,
        },
        {
          name: 'María Emma Lombana',
          mail: 'emmalombana@sena.edu.co',
          detail: 'Especialista en marketing',
          avatar: avatar,
        }
      ]
    }
  }
  if(semillero === 'industriascreativas') {
    return {
      logo: industriasc,
      name: 'Industrias Creativas',
      contact: 'vallejo1845@gmail.com',
      description: 'Semillero dedicado a la construcción de contenido creativo enfocado a las posibilidades de la que da la economía naranja y el impulso del gobierno al sector creativo. Enfocado a procesos culturales, educativo y entretenimiento',
      team: [
        {
          name: 'Luis Vallejo',
          mail: 'vallejo1845@gmail.com',
          detail: 'Especialista en diseño',
          avatar: avatar,
        },
        {
          name: 'Juan Pablo Navarro',
          mail: 'juannavarro@sena.edu.co',
          detail: 'Especialista en diseño',
          avatar: avatar,
        },
        {
          name: 'Ekaterine cardona',
          mail: 'ekacardona@misena.edu.co',
          detail: 'Especialista en diseño',
          avatar: avatar,
        },
        {
          name: 'Nicolás Álvarez',
          mail: 'nicolaslavarez@sena.edu.co',
          detail: 'Especialista en diseño',
          avatar: avatar,
        }
      ]
    }
  }
}

export default getSemillero