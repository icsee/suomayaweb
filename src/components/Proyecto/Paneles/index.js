import React from 'react'
import './styles.css'



import MapContainer from '../Interoperabilidad/map.js'


import { render } from "react-dom";

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
    };
    
    
  
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
              <p>Smart and Clean energy</p>
            <p>

          Sistema de generación de energía solar fotovoltaica de 3Kw de potencia instalado en el Centro de Gestión de Mercados Logística y TI monitoreado con un sistema de tipo IoT compuesto por paneles monocristalinos y policristalinos.
</p>
            <iframe src="https://sebasapk.github.io/Paneles-Solares/" height="700" width="1000" frameborder="0"></iframe>
            </div>

            <div className="chart-area-p" >
            <h2>Ambiente</h2>
                  <Chart
                  data={this.state.lineChartData}
                  options={this.state.lineChartOptions}
                />
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
     console.log(     this.state.lineChartData.data);
     var x=Math.floor(Math.random() * 50) + 51  ;

     const oldBtcDataSet = this.state.lineChartData.data.datasets[0];
     const newBtcDataSet = { ...oldBtcDataSet };
     newBtcDataSet.data.push(x);
     

     var oldlabel = this.state.lineChartData.labels;
     var newLabel = { ...oldlabel };
     var array= Object.values(newLabel);
     console.log(      array);
     var y =new Date().toLocaleTimeString();
     array.push(y);
     if (newBtcDataSet.data.length>10)
     {
      newBtcDataSet.data.shift(); 
      array.shift(); 
     }

     const newChartData = {
       ...this.state.lineChartData,
       datasets: [newBtcDataSet],
       labels: array};


     this.setState({ lineChartData: newChartData });
   /*
    

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