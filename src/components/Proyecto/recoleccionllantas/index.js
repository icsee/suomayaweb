import React from 'react'
import './styles.css'
import Button from "../../Button"

import ReactPlayer from 'react-player'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'



class Proyectorecoleccionllantas extends React.Component {
    
  constructor(props) {
    super(props);
    this.state =  {

    };
    
    
  




  }


  
  
  render() {
    var x =this.state.width;

     
        

    return(
      <div className='info column'>
          <h1>Sistema dashboard IoT para recolección de llantas</h1>
          <center>
          <section  className="column">          
            <div >   
              <p></p>
            <p>

            El proyecto consiste en un sistema de dashboard implementado en una página web que facilite tanto al recolector, como a los puntos fijos designados llevar un mejor control de las llantas usadas en la ciudad de Bogotá, adicional a este dashboard los vehículos de recolección cuentan con un dispositivo Boron con un id único, el cual nos ayuda a controlar las emisiones emitidas por los vehículos, todos estos datos son recopilados en una base de datos estructurada en el lenguaje de programación Java. Este proyecto está enfocado para una empresa de limpieza.
</p>
            
            {//<iframe src="https://sebasapk.github.io/Paneles-Solares/" height="700" width="1000" frameborder="0"></iframe>
          }
            
            </div>
        
            
              <nav><ul>
          <li><a href="https://uaviot.suomaya.co">
          
            
          
        
          </a></li>

        

      
        </ul></nav>
              
           
          </section>
          </center>
</div>
 
    );
  }


  
  
  
}




export default Proyectorecoleccionllantas