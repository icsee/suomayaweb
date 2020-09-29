import React, { useEffect, useState } from 'react'
import './styles.css'

import {Line} from 'react-chartjs-2';

import MapContainer from './map.js'


class ProyectoInteroperabilidad extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
    
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
   }


  render() {
    var x =this.state.width;
    

    const optionsAnimations = {
      animation: false,
    maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },  
      legend: {
        display: false
      },
      responsive: true,
    scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            maxTicksLimit: 5,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function(value, index, values) {
              return number_format(value);
            }
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }],
      },
    tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: 'index',
        caretPadding: 10,
        callbacks: {
          label: function(tooltipItem, chart) {
            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
            return datasetLabel + number_format(tooltipItem.yLabel);
          }
        }
      }
    }

    const data = {
      labels: [0],
      datasets: [{
        data: [0],
        label: 'rssi-particle',
        // backgroundColor: '#ff6600'
        borderColor: '#F44436',
        pointBackgroundColor: '#F44440'
      },
      {
        data: [1],
        label: 'rssi-lora',
        //backgroundColor: '#ff6600',
        borderColor: '#41D519',
        pointBackgroundColor: '#229954'
      },
      {
        data: [2],
        label: 'rssi-bluetooth',
        //backgroundColor: '#ff6600',
        borderColor: ' #262c88',
        pointBackgroundColor: '#1924d5'
      },{
        data: [3],
        label: 'CSQ',
        //backgroundColor: '#ff6600',
      borderColor: '#f55a07',
        pointBackgroundColor:'#f5c307'
      },
    
    
    ]
    }
      
   

    return(
      <div className="space">
      
        
          <h1>Interoperabilidad</h1>
          <section  className="detalle column">          
            <div className="row">   
                  <div className="col-xl-6 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">CSQ 4G</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800" id="csq">0DBi</div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-rss fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

            
            <div className="col-xl-6 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">RSSI Lora</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800" id="rssiLora">0DBi</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-rss fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="col-xl-6 col-md-6 mb-4">
              <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1" >RSSI BLUETOOTH</div>
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800" id="rssiBLE">0DBi</div>
                        </div>
                       
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-rss fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="col-xl-6 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">RSSI WI-FI</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800" id="rssiWIFI">0DBi</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-rss fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              </div>

              <div className="column">


<div className="col-xl-12 col-lg-15">
  <div className="card shadow mb-4">
    
    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
      <h6 className="m-0 font-weight-bold text-primary">GRÁFICO DE RSSI&nbsp;</h6>
      
    </div>
    
    <div className="card-body" >
    <div className="chart-area" >
      <Line  data={data}  
      options={optionsAnimations } 
      />
      </div>
    </div>
  </div>
</div>





<div className="row">


    <div className="col-lg-6 mb-4">

      
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">GPS</h6>
        </div>
      
  
         <div className="chart-area" id="map">
           <MapContainer/>
          </div>
        
      
      </div>
        
      
      <div className="row">
      


    </div>

    </div>

    <div className="col-lg-6 mb-4">

      

      
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Descripción del proyecto</h6>
        </div>
        <div className="card-body">
          <p className="mb-0">El sistema propuesto pretende incorporar tecnologías inalámbricas emergentes para aplicaciones de IoT desplegadas en el centro de formación. El Internet de las Cosas (IoT) es una evolución tecnológica que representa el futuro de la informática y las comunicaciones. Estas aplicaciones generalmente involucran sensores, visualización, medios de trasporte y almacenamiento, su desarrolló depende de la innovación técnica dinámica en una serie de campos importantes. Al incorporar el concepto de Big Data nos referimos al conjunto de datos o combinaciones de conjuntos de datos que se alojan en bases de datos, cuyo tamaño, complejidad y velocidad de crecimiento dificultan su captura, gestión, procesamiento y análisis, mediante tecnologías y herramientas convencionales.</p>
        
        </div>
      </div>

    </div>
    </div>
    <div className="row">
      <div className="col-xl-12 col-lg-15">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary" >Imagenes del proyecto</h6>
          </div>
          <iframe src="https://sebasapk.github.io/Paneles-Solares/" height="700" width="1000" frameborder="0"></iframe>
        </div>
      </div>
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
  
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
}

function number_format(number){
  return number;
}


export default ProyectoInteroperabilidad
