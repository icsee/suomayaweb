
import iconChatoffline from '../assets/img/Rescatistas.png'
import iconLlantaslogo from '../assets/img/LlantasLOGO.png'
import iconLogistica from '../assets/img/proyectoBlockchain2.png'
import iconBlockhain from '../assets/img/proyectoLogistica.png'
import iconDesinfeccion from '../assets/img/logo_desinfeccion.png'
import iconIotCultivos from '../assets/img/iot-en-cultivos.png'
import iconVisionArtificial from '../assets/img/vision-artificial.png'
import iconIOT from '../assets/img/proyectoIOT.png'
import iconEnergia from '../assets/img/proyectoEnergia.png'
import iconIotCognitivo from '../assets/img/IOT Cognitivo LOGO.png'
import iconReconocimientoFacial from '../assets/img/Reconocimiento facial LOGO.png'

export function getProyecto(proyecto){
    switch(proyecto){
        case 'chatoffline': 
            return {
                title: 'Chat off-line ',
                icon: iconChatoffline,
                url: 'proyecto/chatoffline',
                type:'intern'
            };
        case 'recoleccionllantas': 
            return {
                title: 'Sistema dashboard IoT para ',
                icon: iconLlantaslogo,
                url: 'proyecto/recoleccionllantas',
                type:'intern'
            };    
        case 'iotcognitivo': 
            return {
                title: 'IoT Cognitivo ',
                icon: iconIotCognitivo,
                url: 'proyecto/iotcognitivo',
                type:'intern'
            };    

        case 'sipro': 
            return {
                title: 'SIPRO ',
                icon: iconReconocimientoFacial,
                url: 'proyecto/reconocimientofacial',
                type:'intern'
            };         
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
            url: 'proyecto/paneles',
            type:'intern'
        };
        case 'desinfeccion':
            return {
                title: 'Desinfección',
                icon: iconDesinfeccion,
                url: 'proyecto/desinfeccion',
                type:'intern'
            };
        case 'visionartificial':
            return {
                title: 'Visión artificial - Aplicación web para el control y reporte de asistencia en aulas presenciales mediante el uso de visión artificial  ',
                icon: iconVisionArtificial,
                url: 'proyecto/vision-artificial',
                type:'intern'
            };
        case 'iotcultivos':
            return {
                title: 'Iot en Cultivos - Solución integral para incrementar competitividad y productividad de los cultivos agrícolas, integrando tecnologías de Machine Learning e IoT',
                icon: iconIotCultivos,
                url: 'proyecto/iot-en-cultivos',
                type:'intern'
            };
        default: 
            return {
                title: 'default',
                icon: iconLogistica,
                url: 'proyecto/logistica',
                type:'intern'
            };
    }
    
}
