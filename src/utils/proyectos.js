

import iconLogistica from '../assets/img/proyectoBlockchain2.png'
import iconBlockhain from '../assets/img/proyectoLogistica.png'
import iconIOT from '../assets/img/proyectoIOT.png'
import iconEnergia from '../assets/img/proyectoEnergia.png'



export function getProyecto(proyecto){
    switch(proyecto){
        case 'logistica': 
            return {
                title: 'Aplicación de un modelo logístico 4.0 para la gestión de inventarios de productos en cadena frio',
                icon: iconLogistica,
                url: 'proyecto/logistica',
                type:'intern'
            };
        case 'blockchain':
            return {
                title: 'Modelo de gestión de inventarios en cadena de frio a través de Blockchain e IoT ',
                icon: iconBlockhain,
                url: 'proyecto/inventarios',
                type:'intern'
            };  
        case 'iot': 
        return {
            title: 'Sistema de evalución y gestión de tecnologías inalámbricas orientadas a iot y big data para manejo el manejo e integración de aplicaciones móviles',
            icon: iconIOT,
            url: 'proyecto/interoperabilidad',
            type:'intern'
        }; 
        case 'energia': 
        return {
            title: 'Proyecto paneles',
            icon: iconEnergia,
            url: 'proyectos',
            type:'intern'
        };
        default: 
            return {
                title: 'default',
                icon: iconLogistica,
                url: 'proyecto/logistica'
                ,type:'intern'
            };
    }
    
}
