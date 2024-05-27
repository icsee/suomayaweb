import React from 'react'
import './styles.css'
import Button from "../../Button"
import video from '../../../assets/video/RescatistaFinal-WMV.mp4'
import senaminuto from '../../../assets/video/unminutosena.mp4'
import ReactPlayer from 'react-player'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'



class Proyectochatoffline extends React.Component {
    
  constructor(props) {
    super(props);
    this.state =  {

    };
    
    
  




  }


  
  
  render() {
    var x =this.state.width;

     
        

    return(
      <div className='info column'>
          <h1>Chat Off-line</h1>
          <center>
          <section  className="column">          
            <div >   
              <p></p>
            <p>

            El proyecto es un dispositivo IoT pensado para los rescatistas que están en lugares donde el internet no es posible de usar. Esta herramienta les permite establecer comunicaciones con tecnología de red de 433MHz, la cual es una solución ideal para los rescatistas que se encuentran en situaciones donde el internet no es posible de usar, pues el dispositivo les permitirá mantenerse comunicados entre ellos, compartir su ubicación, y monitorear sus signos vitales, todo a través de un dispositivo que puedan llevar con ellos en todo momento.
</p>
              <ReactPlayer
                
                url= {video}
               
                controls = {true}

                />

             
            
            
            </div>
        
            
              <nav><ul>
          <li><a href="https://uaviot.suomaya.co">
          
           
        
          </a></li>
          <h1>SENA en un minuto</h1>
          <ReactPlayer
                
                url= {senaminuto}
               
                controls = {true}

                />
          <Button link="https://uaviot.suomaya.co">
                    Aplicacion
                </Button>
          

      
        </ul></nav>
              
           
          </section>
          </center>
</div>
 
    );
  }


  
  
  
}




export default Proyectochatoffline