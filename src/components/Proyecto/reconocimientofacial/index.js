import React from 'react'
import './styles.css'
import Button from "../../Button"

import ReactPlayer from 'react-player'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'



class Proyectoraconocimientofacial extends React.Component {
    
  constructor(props) {
    super(props);
    this.state =  {

    };
    
    
  




  }


  
  
  render() {
    var x =this.state.width;

     
        

    return(
      <div className='info column'>
          <h1>SIPRO</h1>
          <center>
          <section  className="column">          
            <div >   
              <p></p>
            <p>

            El proyecto consiste en un sistema de reconocimiento facial para autorizar la entrada a un lugar. La imagen del sujeto es capturada en tiempo real mediante una cámara para detectar y reconocer su rostro. Si la persona está registrada en la base de datos SIPRO, se le da el ingreso. En caso contrario, se realiza el entrenamiento y registro de la persona en la base de datos y se procede a realizar la gestión de autorización de ingreso. Finalmente, se activa el mecanismo de acceso y se le da el ingreso al sujeto. </p>
              
            
            
            </div>
        
            
              <nav><ul>
          <li><a href="https://uaviot.suomaya.co">
          
           
        
          </a></li>
          
          <Button link="https://sipro.suomaya.co/">
                    Aplicacion
                </Button>
          

      
        </ul></nav>
              
           
          </section>
          </center>
</div>
 
    );
  }


  
  
  
}




export default Proyectoraconocimientofacial