

import iconLogistica from '../assets/img/proyectoLogistica.png'
import iconBlockhain from '../assets/img/proyectoBlockchain.png'
import iconIOT from '../assets/img/proyectoIOT.png'
import iconEnergia from '../assets/img/proyectoEnergia.png'



export function getProyecto(proyecto){
    switch(proyecto){
        case 'logistica': 
            return {
                title: 'Aplicación de un modelo logístico 4.0 para la gestión de inventarios de productos en cadena frio',
                icon: iconLogistica
            };
            case 'blockchain':
                return {
                    title: 'Modelo de gestión de inventarios en cadena de grio a través de frío a traves de Blockchain e IoT ',
                    icon: iconBlockhain
                };  
            case 'iot': 
            return {
                title: 'Sistema de evalución y gestión de tecnología inalámbricas orientadasa iot y big data para manejo el manejo e integración de aplicaciones móviles',
                icon: iconIOT
            }; 
            case 'energia': 
            return {
                title: 'Proyecto paneles',
                icon: iconEnergia
            };
        default: 
            return {
                title: 'default',
                icon: iconLogistica
            };
    }
    
}
