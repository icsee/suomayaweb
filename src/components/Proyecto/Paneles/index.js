import React from 'react'
import './styles.css'



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
    
    
  
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);



  }


  componentDidMount() {

    window.scrollTo(0,0);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
/*
    this.ws = new WebSocket("wss://suomayaback.azurewebsites.net/suomayaback-websocket");


    this.ws.onmessage = e => {*/
      var socket = new SockJS('https://suomaya.co:8081/suomayaApiRest/suomayaback-websocket');
    this.state.stompClient = Stomp.over(socket);
    this.state.stompClient.connect({}, frame=> {
      //  setConnected(true);
        console.log('Connected: ' + frame);
        this.state.stompClient.subscribe('/topic/iot', e => {
           
       
   //   const messageData = JSON.parse(e);
   var  messageData = JSON.parse(e.body).content;

          const message=JSON.parse( messageData.substring(0,messageData.search('}:')+1) );
   console.log(message);

      const oldBtcDataSet = this.state.lineChartData.data.datasets[0];
      const newBtcDataSet = { ...oldBtcDataSet };
      newBtcDataSet.data.push(message.rssiParticle);
      
 
      var oldlabel = this.state.lineChartData.labels;
      var newLabel = { ...oldlabel };
      var array= Object.values(newLabel);
      console.log(      message.rssiParticle);
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
    });
  });

   

   
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
        <div className='row chart-area-p'>
            <div className="chart-area-p" >
            <h2>Temperatura</h2>
                  <Chart
                  data={this.state.lineChartData}
                  options={this.state.lineChartOptions}
                />
            </div>
            <div className="chart-area-p" >
            <h2>Presión</h2>
                  <Chart
                  data={this.state.lineChartData}
                  options={this.state.lineChartOptions}
                />
            </div>
            </div>
            

            <div className='row chart-area-p'>
            <div className="chart-area-p" >
            <h2>Humedad</h2>
                  <Chart
                  data={this.state.lineChartData}
                  options={this.state.lineChartOptions}
                />
            </div>
            <div className="chart-area-p" >
            <h2>Decibeles </h2>
                  <Chart
                  data={this.state.lineChartData}
                  options={this.state.lineChartOptions}
                />
            </div>
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
    if (this.state.stompClient!=null)
    this.state.stompClient.disconnect();
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

  }
}




export default ProyectoInventarios