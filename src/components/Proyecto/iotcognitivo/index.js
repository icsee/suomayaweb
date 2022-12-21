import React from 'react'
import './styles.css'
import Button from "../../Button"
import video from '../../../assets/video/COGNITIVO.mp4'
import ReactPlayer from 'react-player'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'



class Proyectoiotcognitivo extends React.Component {
    
  constructor(props) {
    super(props);
    this.state =  {

    };
    
    
  




  }


  
  
  render() {
    var x =this.state.width;

     
        

    return(
      <div className='info column'>
          <h1>IoT Cognitivo</h1>
          <center>
          <section  className="column">          
            <div >   
              <p></p>
            <p>

            Las energías renovables y las tecnologías IOT cada día avanzan más, y se utilizan para un sin fin de proyectos e inventos que benefician a la sociedad en el emprendimiento de nuevos conocimientos, con la meta de que las nuevas generaciones logren superar la crisis ambiental y busquen alternativas con energías limpias, para eso iniciamos con este nuevo proyecto de investigación con el propósito de que la comunidad SENA comprenda la crisis ambiental en la que estamos actualmente y como el semillero de investigación SENNOVA trabaja con nuevos recursos y tecnologías IOT para el beneficio del centro y sus integrantes.

El proyecto tiene como objetivo administrar un sistema de energía fotovoltaica y eólica, analizando las diferencias cuando se usan paneles rígidos, paneles flexibles y generadores eólicos, Esta administración se hará a través de sensores que harán la medición de los diferentes parámetros y su compilación se hará a través de IoT. De esta forma, el usuario final podrá estar enterado de los valores de los parámetros que se generan en el sistema y tomar las decisiones adecuadas.

</p>
              <ReactPlayer
                
                url= {video}
               
                controls = {true}

                />
            {//<iframe src="https://sebasapk.github.io/Paneles-Solares/" height="700" width="1000" frameborder="0"></iframe>
          }
            
            </div>
        
            
              <nav><ul>
          <li><a href="https://iotcognitivo.suomaya.co">
          
            <Button link="https://iotcognitivo.suomaya.co">
                    Aplicacion
                </Button>
          
        
          </a></li>

        

      
        </ul></nav>
              
           
          </section>
          </center>
</div>
 
    );
  }


  
  
  
}




export default Proyectoiotcognitivo