

import iconLogistica from '../assets/img/proyectoLogistica.png'
import iconBlockhain from '../assets/img/proyectoBlockchain.png'
import iconIOT from '../assets/img/proyectoIOT.png'
import iconEnergia from '../assets/img/proyectoEnergia.png'



export function getProyecto(proyecto){
    switch(proyecto){
        case 'logistica': 
            return {
                title: 'Aplicación de un modelo logístico 4.0 para la gestión de inventarios de productos en cadena frio',
                icon: iconLogistica,
                url: 'https://www.suomaya.co/'
            };
        case 'blockchain':
            return {
                title: 'Modelo de gestión de inventarios en cadena de frio a través de Blockchain e IoT ',
                icon: iconBlockhain,
                url: 'https://www.suomaya.co/'
            };  
        case 'iot': 
        return {
            title: 'Sistema de evalución y gestión de tecnologías inalámbricas orientadas a iot y big data para manejo el manejo e integración de aplicaciones móviles',
            icon: iconIOT,
            url: 'https://interopbigdatafront.azurewebsites.net/index.html'
        }; 
        case 'energia': 
        return {
            title: 'Proyecto paneles',
            icon: iconEnergia,
            url: 'https://www.suomaya.co/'
        };
        default: 
            return {
                title: 'default',
                icon: iconLogistica,
                url: 'https://www.suomaya.co/'
            };
    }
    
}
