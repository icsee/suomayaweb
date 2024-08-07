import logistica from '../assets/img/LogoSICLOG.png'
import avatar from '../assets/img/avatar.png'
import avatarCristina from '../assets/img/AvatarCristinaRamírez.PNG'
import avatarMonica from '../assets/img/AvatarMonicaDiaz.PNG'
import avatarfb from '../assets/img/facebook.jpg'
import avatarcristian from '../assets/img/fotocristian.jpeg'
import avatarJuan from '../assets/img/juanAmezquit.jpeg'
import avatarweb from '../assets/img/paginaweb.png'
import aleph from '../assets/img/aleph.png'
import innovatics from '../assets/img/Innovatics2.png'
import siam from '../assets/img/siam.png'
import neurocomarketing from '../assets/img/neurocomarketing.png'
import industriasc from '../assets/img/ic.png'
import avatarFredyUrrea from '../assets/img/fredy_urrea.jpeg'
import avatarFredyIsaza from '../assets/img/FELIPE_ISAZA_FOTO.jpg'

import Nelson from '../assets/img/nelson.jpeg'
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
          detail: 'Maestría en ciencias de la información y las comunicaciones',
          avatar: Nelson  ,
        },
        {
          name: 'Juan Carlos Amezquita',
          mail: 't.amezquita.juancarlos@gmail.com',
          detail: 'Maestría en arquitectura de software',
          avatar: avatarJuan,
        },
        {
          name: 'Christian Rojas Diaz',
          mail: 'crissdiaz@misena.edu.co',
          detail: 'Ingeniero de sistemas',
          avatar: avatarcristian,
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
      contact: 'furrea@sena.edu.co',
      description: 'El semillero Aleph es el semillero del área de mercadeo del CGMLTI y ha centrado su accionar en la línea, marketing holístico como generación de valor para el sector empresarial en los mercados.  Desde esta línea, y teniendo en cuenta el alcance del concepto valor en el contexto colombiano, se vienen desarrollando proyectos orientados al reconocimiento, profundización y teorización sobre el marketing social, y, desde un enfoque investigación, acción, participación proyectos con comunidades, esto haciendo uso de endomarketing, el marketing cultural y el marketing digital.  También se viene trabajando, desde el proyecto INHOUSE, en la generación de soluciones de diseño de piezas publicitarias y audiovisuales para el centro de formación.  Todos los proyectos son interdisciplinarios e interáreas.  Allí se involucran:  Mercadeo, Industrias Creativas y Teleinformática. ',
      team: [
        {
          name: 'Freddy Urrea Urrea',
          mail: 'furrea@sena.edu.co',
          detail: 'Magíster en Educación',
          avatar: avatarFredyUrrea,
        },
        
        {
          name: 'Felipe Isaza',
          mail: 'felipeisaza@sena.edu.co',
          detail: 'Especialista en marketing',
          avatar: avatarFredyIsaza,
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