import React from 'react'
import './styles.css'

import image from '../../../assets/img/proyectoInventario.PNG'


class ProyectoInventarios extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    var x =this.state.width;
    var tipo=x>1000 ? 'row': 'column'; 
    var name=x>1000 ? 'imageInventario': ''; 
    var name2=x>1000 ? 'info space': 'info'; 
    return(
      <div className={name2}>
          <h1>Diseño de un modelo de gestión de inventarios en cadena de frío a través de Blockchain e IoT para pymes en Colombia</h1>
          <section  className="detalle column">          
            <div className={tipo}>   
            <div className={name}>              
            <img src={image} title='Diseño de un modelo de gestión de inventarios en cadena de frío'/>
                </div>
                <div className="information">
                <p>En Colombia, más del 90% de las empresas corresponden al sector MyPyme, convirtiéndolo en uno de los sectores más relevantes para la economía nacional. Sin embargo, la adopción de tecnologías en las micro, pequeñas y medianas empresas es mínima incidiendo en la productividad y competitividad. El presente proyecto tiene como objeto el diseño de un modelo para empresas de este sector que facilite la captura, trasmisión y procesamiento de los datos en el proceso de inventarios y transporte de productos en cadena de frío, a través de la integración de tecnologías avanzadas como IoT y Blockchain; garantizando la trazabilidad de la mercancía y el control de variables como la temperatura y humedad.
                    </p>
                    <h2>
                   
                    </h2>
          
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

export default ProyectoInventarios