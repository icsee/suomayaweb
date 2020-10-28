
import React from 'react'
import './styles.css'


import AlmacenService from "../../Services/almacen.service";
import MenuLogistica from '../../Menu';

class ProyectoLogisticaAlmacenAdd extends React.Component {
    constructor(props) {
      super(props);
      
      this.onChangeTipo = this.onChangeTipo.bind(this);  
      this.onChangeDescripcion = this.onChangeDescripcion.bind(this);  
      this.onChangeTemperatura = this.onChangeTemperatura.bind(this);  
      this.onChangeHumedad = this.onChangeHumedad.bind(this);  
      this.onChangeCapacidad= this.onChangeCapacidad.bind(this);  
      
      this.saveAlmacen = this.saveAlmacen.bind(this);
      this.newAlmacen = this.newAlmacen.bind(this);
      
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);


      this.state = {
        
            id:0,
            tipo: "",
            descripcion: "", 
            temperatura: "",
            humedad: "",
            capacidad: "",
            published: false,
      
            submitted: false,
          
        width: 0, height: 0
       };
       
       
    }
    componentDidMount() {
      window.scrollTo(0,0)
    }
    /*
    his.onChangeTipo = this.onChangeTipo.bind(this);  
      this.onChangeDescripcion = this.onChangeDescripcion.bind(this);  
      this.onChangeTemperatura = this.onChangeTemperatura.bind(this);  
      this.onChangeHumedad = this.onChangeHumedad.bind(this);  
      this.onChangeCapacidad= this.onChangeCapacidad.bind(this);  
      
    */

   onChangeTipo(e) {
        this.setState({
          tipo: e.target.value
        });
     }

     onChangeDescripcion(e) {
        this.setState({
          descripcion: e.target.value
        });        
      }
      onChangeTemperatura(e) {
        this.setState({
          temperatura: e.target.value
        });        
      }
      onChangeHumedad(e) {
        this.setState({
          humedad: e.target.value
        });        
      }
      onChangeCapacidad(e) {
        this.setState({
          capacidad: e.target.value
        });        
      }
      

    render() {
      return(
        <div className='info'>
           <MenuLogistica/>
            <div className="submit-form">
            {this.state.submitted ? (
          <div>
            <h4>Almacen creado con exito !</h4>
            <button className="btn btn-success" onClick={this.newAlmacen}>
              Crear almacen
            </button>
          </div>
        ) : (
            <div className="form-cliente">

          <h1>Agregar almacen</h1>     


                
          <div className="form-group">
              <label htmlFor="tipo">Tipo</label>
              <input
                type="text"
                className="form-control"
                id="tipo"
                required
                value={this.state.tipo}
                onChange={this.onChangeTipo}
                name="tipo"
                
                placeholder="Tipo"
              />
            </div>
            
            
            <div className="form-group">
              <label htmlFor="descripcion">Descripción</label>
              <input
                type="text"
                className="form-control"
                id="descripcion"
                required
                value={this.state.descripcion}
                onChange={this.onChangeDescripcion}
                name="descripcion"
                placeholder="Descripción"
              />
            </div>

            <div className="form-group">
              <label htmlFor="temperatura">Temperatura</label>
              <input
                type="text"
                className="form-control"
                id="temperatura"
                value={this.state.temperatura}
                onChange={this.onChangeTemperatura}
                name="temperatura"
                placeholder="Temperatura"
              />
            </div>

            <div className="form-group">
              <label htmlFor="humedad">Humedad</label>
              <input
                type="text"
                className="form-control"
                id="humedad"
                value={this.state.humedad}
                onChange={this.onChangeHumedad}
                name="humedad"
                placeholder="Humedad"
              />
            </div>

            <div className="form-group">
              <label htmlFor="capacidad">Capacidad</label>
              <input
                type="text"
                className="form-control"
                id="capacidad"
                value={this.state.capacidad}
                onChange={this.onChangeCapacidad}
                name="capacidad"
                placeholder="Capacidad"
              />
            </div>

            <button onClick={this.saveAlmacen} className="btn btn-success">
              Guardar
            </button>
            </div>
            )}
            </div>
        </div>
   
      );
    }
  
    newAlmacen() {
        this.setState({
            id:0,
            tipo: "",
            descripcion: "", 
            temperatura: "",
            humedad: "",
            capacidad: "",
            published: false,
      
            submitted: false,
        });
      }

      saveAlmacen() {
          
        var data = {
            tipo: this.state.tipo,
            descripcion: this.state.descripcion, 
            temperatura: this.state.temperatura,
            humedad: this.state.humedad,
            capacidad: this.state.capacidad           
        };
    
        AlmacenService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,
              submitted: true
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
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
  
  export default ProyectoLogisticaAlmacenAdd