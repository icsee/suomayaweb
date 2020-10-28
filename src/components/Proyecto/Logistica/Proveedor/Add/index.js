
import React from 'react'
import './styles.css'

import MenuLogistica from "../../Menu";
import ProveedorService from "../../Services/proveedor.services";

class ProyectoLogisticaProveedorAdd extends React.Component {
    constructor(props) {
      super(props);
      
      this.onChangeNombre = this.onChangeNombre.bind(this);  
      this.onChangeNit = this.onChangeNit.bind(this);  
      this.onChangeContacto = this.onChangeContacto.bind(this);  
      this.onChangeCorreo = this.onChangeCorreo.bind(this);  
      this.onChangePais = this.onChangePais.bind(this);  
      this.onChangeDepartamento = this.onChangeDepartamento.bind(this);  
      this.onChangeCiudad = this.onChangeCiudad.bind(this);  
      this.onChangeDireccion = this.onChangeDireccion.bind(this);  
      this.onChangeTelefono = this.onChangeTelefono.bind(this);  
      this.onChangeObservaciones = this.onChangeObservaciones.bind(this);  

      this.saveProveedor = this.saveProveedor.bind(this);
      this.newProveedor = this.newProveedor.bind(this);
      
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);


      this.state = {
        
       
            nit: "",
            nombre: "", 
            contacto: "",
            correo: "",
            pais: "",
            departamento: "",
            ciudad: "",
            direccion: "",
            telefono: "",
            observaciones: "",
            published: false,
      
            submitted: false,
          
        width: 0, height: 0
       };
       
       
    }
    componentDidMount() {
      window.scrollTo(0,0)
    }

    onChangeNit(e) {
        this.setState({
          nit: e.target.value
        });
     }

     onChangeNombre(e) {
        this.setState({
          nombre: e.target.value
        });        
      }
      onChangeContacto(e) {
        this.setState({
          contacto: e.target.value
        });        
      }
      onChangeCorreo(e) {
        this.setState({
          correo: e.target.value
        });        
      }
      onChangePais(e) {
        this.setState({
          pais: e.target.value
        });        
      }
      onChangeDepartamento(e) {
        this.setState({
          departamento: e.target.value
        });        
      }
      onChangeCiudad(e) {
        this.setState({
          ciudad: e.target.value
        });        
      }
      onChangeDireccion(e) {
        this.setState({
          direccion: e.target.value
        });        
      }
      onChangeTelefono(e) {
        this.setState({
          telefono: e.target.value
        });        
      }
      onChangeObservaciones(e) {
        this.setState({
          observaciones: e.target.value
        });        
      }

    render() {
      return(
        <div className='info'>
           <MenuLogistica/>
            <div className="submit-form">
            {this.state.submitted ? (
          <div>
            <h4>Proveedor creado con exito !</h4>
            <button className="btn btn-success" onClick={this.newProveedor}>
              Crear Proveedor
            </button>
          </div>
        ) : (
            <div className="form-cliente">

            <h1>Agregar proveedor</h1>


                
          <div className="form-group">
              <label htmlFor="nit">Nit</label>
              <input
                type="text"
                className="form-control"
                id="nit"
                required
                value={this.state.nit}
                onChange={this.onChangeNit}
                name="nit"
                
                placeholder="nit"
              />
            </div>
            
            
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                required
                value={this.state.nombre}
                onChange={this.onChangeNombre}
                name="nombre"
                placeholder="Nombre completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="correo">Correo</label>
              <input
                type="text"
                className="form-control"
                id="correo"
                value={this.state.correo}
                onChange={this.onChangeCorreo}
                name="correo"
                placeholder="ejemplo@correo.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Telefono</label>
              <input
                type="text"
                className="form-control"
                id="telefono"
                value={this.state.telefono}
                onChange={this.onChangeTelefono}
                name="telefono"
                placeholder="Numero de telefono"
              />
            </div>

            <div className="form-group">
              <label htmlFor="pais">Pais</label>
              <input
                type="text"
                className="form-control"
                id="pais"
                value={this.state.pais}
                onChange={this.onChangePais}
                name="pais"
                placeholder="Pais"
              />
            </div>

            <div className="form-group">
              <label htmlFor="departamento">Departamento</label>
              <input
                type="text"
                className="form-control"
                id="departamento"
                value={this.state.departamento}
                onChange={this.onChangeDepartamento}
                name="departamento"
                placeholder="Departamento"
              />
            </div>


            <div className="form-group">
              <label htmlFor="ciudad">Ciudad</label>
              <input
                type="text"
                className="form-control"
                id="ciudad"
                value={this.state.ciudad}
                onChange={this.onChangeCiudad}
                name="ciudad"
                placeholder="Ciudad"
              />
            </div>

            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input
                type="text"
                className="form-control"
                id="direccion"
                value={this.state.direccion}
                onChange={this.onChangeDireccion}
                name="direccion"
                placeholder="Direccion"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contacto">Contacto</label>
              <input
                type="text"
                className="form-control"
                id="contacto"
                value={this.state.contacto}
                onChange={this.onChangeContacto}
                name="contacto"
                placeholder="contacto"
              />
            </div>

            <div className="form-group">
              <label htmlFor="observaciones">Observaciones</label>
              <input
                type="text"
                className="form-control"
                id="observaciones"
                value={this.state.observaciones}
                onChange={this.onChangeObservaciones}
                name="observaciones"
                placeholder="Observaciones"
              />
            </div>

            <button onClick={this.saveProveedor} className="btn btn-success">
              Guardar
            </button>
            </div>
            )}
            </div>
        </div>
   
      );
    }
  
    newProveedor() {
        this.setState({
            idprov: 0,
            nit: "",
            nombre: "", 
            contacto: "",
            correo: "",
            pais: "",
            departamento: "",
            ciudad: "",
            direccion: "",
            telefono: "",
            observaciones: "",
            published: false,
      
            submitted: false,
        });
      }

      saveProveedor() {
          
        var data = {
            nit: this.state.nit,
            nombre: this.state.nombre, 
            contacto: this.state.contacto,
            correo: this.state.correo,
            pais: this.state.pais,
            departamento: this.state.departamento,
            ciudad: this.state.ciudad,
            direccion: this.state.direccion,
            telefono: this.state.telefono,
            observaciones: this.state.observaciones
        };
    
        ProveedorService.create(data)
          .then(response => {
            this.setState({
              idprov: response.data.idprov,
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
  
  export default ProyectoLogisticaProveedorAdd;