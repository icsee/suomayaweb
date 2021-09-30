import React from 'react'
import './styles.css'
import Button from "../../Button"


import MapContainer from '../Interoperabilidad/map.js'


import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

import Chart from "./chart";

class ProyectoInventarios extends React.Component {
    
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
          <h1>Paneles solares</h1>
          <center>
          <section  className="column">          
            <div >   
              <p>Smart and Clean energy</p>
            <p>

          Sistema de generación de energía solar fotovoltaica de 3Kw de potencia instalado en el Centro de Gestión de Mercados Logística y TI monitoreado con un sistema de tipo IoT compuesto por paneles monocristalinos y policristalinos.
</p>
            {//<iframe src="https://sebasapk.github.io/Paneles-Solares/" height="700" width="1000" frameborder="0"></iframe>
          }
            <iframe src="https://giovanniagudelo.github.io/Paneles-Solares/" height="700" width="1000" frameborder="0"></iframe>
            </div>
        
            
              <nav><ul>
          <li><a href="https://dashboard.suomaya.co/">
          
            <Button link="https://dashboard.suomaya.co/">
                    Aplicación
                </Button>
          
        
          </a></li>

        

      
        </ul></nav>
              
           
          </section>
          </center>
</div>
 
    );
  }


  
  
  
}




export default ProyectoInventarios