import React from 'react'
import './styles.css'
import DankMemes from "./chart.js";


import MapContainer from '../Interoperabilidad/map.js'
import {Line} from 'react-chartjs-2';

class ProyectoInventarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0
    
    ,
     data:{
      labels: ['a'],
      datasets: [
        {
       label: 'temperatura',
       fill: false,
       data: [1],
       backgroundColor: '#168ede',
       borderColor: '#168ede'
        },
        {
         label: 'humedad',
         fill: false,
         data: [],
         backgroundColor: '#ff4017',
         borderColor: '#ff4017'
          }
      ]
       },
        options:{
        maintainAspectRatio: false,
        tooltips: {
         enabled: false
        },
        legend: {
         display: true,
         position: 'bottom',
         labels: {
          fontColor: 'black'
         }
        },
        scales: {
          yAxes: [{
           ticks: {
            fontColor: "black"
           }
          }],
          xAxes: [{
         ticks: {
          fontColor: "black",
          beginAtZero: true
         }
          }]
        }
        }};
    
    
  
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);



  }

  intervalUpdate = null;
  componentDidMount() {
    window.scrollTo(0,0);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    this.intervalUpdate = setInterval(function(){
      this.showData();
     }.bind(this), 1000);
  }

  
  render() {
    var x =this.state.width;

     
        

    return(
      <div className='info column'>
          <h1>Paneles solares</h1>
          <center>
          <section  className="column">          
            <div >   
            <p>

            El sistema propuesto pretende incorporar tecnologías inalámbricas emergentes para aplicaciones de IoT desplegadas en el centro de formación. El Internet de las Cosas (IoT) es una evolución tecnológica que representa el futuro de la informática y las comunicaciones. Estas aplicaciones generalmente involucran sensores, visualización, medios de trasporte y almacenamiento, su desarrolló depende de la innovación técnica dinámica en una serie de campos importantes. Al incorporar el concepto de Big Data nos referimos al conjunto de datos o combinaciones de conjuntos de datos que se alojan en bases de datos, cuyo tamaño, complejidad y velocidad de crecimiento dificultan su captura, gestión, procesamiento y análisis, mediante tecnologías y herramientas convencionales.
</p>
            <iframe src="https://sebasapk.github.io/Paneles-Solares/" height="700" width="1000" frameborder="0"></iframe>
            </div>

            <div className="chart-area-p" >
            <h2>Ambiente</h2>
               <DankMemes/>
            </div>
            <div className="map-area">
           
                <MapContainer/>

            </div>
          </section>
          </center>
</div>
 
    );
  }


  
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    clearInterval(this.intervalUpdate);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

   showData() {
     console.log('holap');
   /*
    var x=Math.floor(Math.random() * 50) + 51  ;

    let chartTime = new Date();
    chartTime = chartTime.getHours() + ':' + ((chartTime.getMinutes() < 10) ? '0' + chartTime.getMinutes() : chartTime.getMinutes()) + ':' + ((chartTime.getSeconds() < 10) ? '0' + chartTime.getSeconds() : chartTime.getSeconds());
    this.chart.data.labels.push(chartTime);
    this.chart.data.datasets[0].data.push(x);
    

    x=Math.floor(Math.random() * 50) + 51  ;
    this.chart.data.datasets[1].data.push(x);
      console.log('aqui '+this.chart.data.datasets[1].data.length);
    if (this.chart.data.datasets[1].data.length>10){
      console.log('el shift ');
      this.chart.data.datasets[1].data.shift(); 
      this.chart.data.datasets[0].data.shift(); 
      this.chart.data.labels.shift(); 
    }

    this.chart.update();   

*/
  }
}




export default ProyectoInventarios