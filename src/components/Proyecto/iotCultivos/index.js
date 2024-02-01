import React from 'react'
import './styles.css'
import Button from "../../Button"



import MapContainer from '../Interoperabilidad/map.js'


import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

import Chart from "./chart";
import ReactPlayer from 'react-player';
import video from '../../../assets/video/iotCultivos.mp4';

class ProyectoIotCultivos extends React.Component {
    
  constructor(props) {
    super(props);
    this.state =  {
      lineChartData: {
        type: 'line',
      data: {
       labels: [],
       datasets: [
         {
        label: 'Temperatura',
        fill: false,
        data: [],
        backgroundColor: '#168ede',
        borderColor: '#168ede'
         },
         {
          label: 'intensidad',
          fill: false,
          data: [],
          backgroundColor: '#ff4017',
          borderColor: '#ff4017'
           }
       ]
        }
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          enabled: true
        },
        scales: {
          xAxes: [
            {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10
              }
            }
          ]
        }
      }
     ,stompClient:null
    };
    
    
  




  }


  
  
  render() {
    var x =this.state.width;

     
        

    return(
      <div className='info column'>
          <h1>Iot en Cultivos</h1>
          <center>
          <section  className="column">
              <ReactPlayer

                  url= {video}

                  controls = {true}

              />
            <div >   
            <p>
                Adéntrate en el fascinante mundo del Internet de las Cosas (IoT) aplicado a la agricultura a través de nuestro video y juego educativo 2D. Sumérgete en la integración de dispositivos y sensores conectados a la red, recopilando datos en tiempo real sobre variables ambientales y condiciones del cultivo. Esta innovadora tecnología permite una gestión precisa y eficiente, gracias a la automatización y análisis de datos. Aprende a cultivar de manera eficiente, sostenible y respetuosa con el medio ambiente mientras te diviertes. ¡Únete a nosotros para transformar la agricultura del futuro!
            </p>
            {//<iframe src="https://sebasapk.github.io/Paneles-Solares/" height="700" width="1000" frameborder="0"></iframe>
          }
            <iframe src="https://smileeart.github.io/juego-IoT-/" height="700" width="1000" frameborder="0"></iframe>
            </div>
        
            
              <nav><ul>
          <li><a href="https://dashboard.suomaya.co/">
          
           { <Button link="https://agro.suomaya.co/">
                    Aplicación
                </Button>}
          
        
          </a></li>

        

      
        </ul></nav>
              
           
          </section>
          </center>
</div>
 
    );
  }


  
  
  
}




export default ProyectoIotCultivos