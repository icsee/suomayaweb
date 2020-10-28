import React from 'react'
import './styles.css'
import ReactPlayer from 'react-player'
import video from '../../../assets/video/videoLogistica.mp4'
import MenuLogistica from './Menu'

class ProyectoLogistica extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    var x =this.state.width;
    var tipo=x>1000 ? 'column': 'column'; 
    var name=x>1000 ? '': ''; 
    var name2=x>1000 ? 'info space': 'info'; 
    return(
      <div className={name2}>
          <MenuLogistica/>

          <h1>Aplicación de un modelo lógistico 4.0 para la gestión de inventarios de productos en cadena de frío</h1>
          <section  className="column">          
            <div className={tipo}>   
            <div className={name}>              
            <ReactPlayer
                
                url= {video}
               
                controls = {true}

                />
                </div>
                <div>
                <p>
                    
        El desarrollo de los procesos logísticos en ambientes de bajas de temperatura es una tarea compleja que afecta tanto la productividad de las empresas como la salud del talento humano. Mediante este proyecto se busca disminuir la exposición de los operarios a bajas temperaturas, así como mejorar el acceso a información confiable en tiempo real y aumentar la productividad del proceso de inventarios en ambientes de temperatura controlada.  
        Para esto, se implementará un sistema ciberfisico que capture de forma autónoma la información de los productos almacenados, temperatura y humedad a través de IoT y visión artificial, la información será almacenada en la nube (cloud storage) y permitirá ser visualizada desde cualquier lugar y dispositivo conectado a la red.
                    </p>
                    <h2>
                    Aplicación interactiva: Conoce los efectos que tiene las bajas temperaturas en el funcionamiento del cuerpo humano
                    </h2>
                    <center>
                    <iframe src="https://sebasapk.github.io/ProblematicaCadenaDeFrio/" height="700" width="1000" frameborder="0"></iframe>  
                    </center>
                   
                    </div>
              </div>
          </section>
                  
</div>
 
    );
  }


  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
}

export default ProyectoLogistica