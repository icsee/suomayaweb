 
import React from 'react'
import './styles.css'


import ProductoService from "../../Services/producto.service";
import ClienteService from "../../Services/cliente.services";
import ProveedorService from "../../Services/proveedor.services";
import MenuLogistica from '../../Menu';

class ProyectoLogisticaProductoEdit extends React.Component {
    constructor(props) {
      super(props);      
      var idproducto=props.match.params.id;
      this.retrieveProveedores = this.retrieveProveedores.bind(this);  
      this.onChangeDescripcion = this.onChangeDescripcion.bind(this);  
      this.onChangeNombre = this.onChangeNombre.bind(this);  
      this.onChangeCodigo = this.onChangeCodigo.bind(this);  
      this.onChangeRegistroInvima = this.onChangeRegistroInvima.bind(this);  
      this.onChangeUnidadMedida = this.onChangeUnidadMedida.bind(this);
      this.onChangePeso = this.onChangePeso.bind(this);  
      this.onChangeVolumen = this.onChangeVolumen.bind(this);  
      this.onChangeCosto = this.onChangeCosto.bind(this);  
      this.onChangePrecioVenta = this.onChangePrecioVenta.bind(this);  
      this.onChangeStockmin = this.onChangeStockmin.bind(this);  
      this.onChangeLeadtime = this.onChangeLeadtime.bind(this);  
      this.onChangeTipoAlmacenamiento = this.onChangeTipoAlmacenamiento.bind(this);  
      this.onChangePaisOrigen = this.onChangePaisOrigen.bind(this);  
      this.onChangeObservaciones = this.onChangeObservaciones.bind(this); 
      this.onChangeProveedor = this.onChangeProveedor.bind(this); 
      this.onChangeCliente = this.onChangeCliente.bind(this); 
      
      
      this.saveProducto = this.saveProducto.bind(this);
      this.newProducto = this.newProducto.bind(this);
      
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);


      this.state = {
        
            id:idproducto,
            codigo: "",
            nombre: "",
            descripcion: "", 
            registro_invima: "",
            unidad_medida: "",
            peso: 0,
            volumen: 0,
            costo: 0,
            precio_venta: 0,
            stockmin:0, 
            leadtime:0,
            tipo_almacenamiento:"",
            pais_origen:"",
            observaciones: "", 
            published: false,      
            submitted: false,
            proveedores:[],
            idproveedor:0,
            clientes:[],
            idcliente:0,
        width: 0, height: 0
       };
       
       this.retrieveProveedores();
       this.newProducto();  
    }
    retrieveProveedores() {
    
      ProveedorService.getAll()
        .then(response => {
          this.setState({proveedores:response.data});
        
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

        
      ClienteService.getAll()
      .then(response => {
        this.setState({clientes:response.data});      
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });

      
    }

    componentDidMount() {
      window.scrollTo(0,0)
    }

    onChangeProveedor(e) {
      
      this.setState({ idproveedor: e.target.value });
    }

    onChangeCliente(e) {
      console.log("cliente Selected!! "+e.target.value);
      this.setState({ idcliente: e.target.value });
    }

    onChangeCodigo(e) {
      this.setState({
        codigo: e.target.value
      });        
    }
  
   onChangeNombre(e) {
    this.setState({
      nombre: e.target.value
    });        
  }

     onChangeDescripcion(e) {
        this.setState({
          descripcion: e.target.value
        });        
      }

      onChangeRegistroInvima(e) {
        this.setState({
          registro_invima: e.target.value
        });        
      }
      onChangeUnidadMedida(e) {
        this.setState({
          unidad_medida: e.target.value
        });        
      }
     onChangePeso(e) {
      this.setState({
        peso: e.target.value
      });        
    }
    
    onChangeVolumen(e) {
      this.setState({
        volumen: e.target.value
      });        
    }
    onChangeCosto(e) {
      this.setState({
        costo: e.target.value
      });        
    }
    onChangePrecioVenta(e) {
      this.setState({
        precio_venta: e.target.value
      });        
    }
    onChangeStockmin(e) {
      this.setState({
        stockmin: e.target.value
      });        
    }
    onChangeLeadtime(e) {
      this.setState({
        leadtime: e.target.value
      });        
    }
    onChangeTipoAlmacenamiento(e) {
      this.setState({
        tipo_almacenamiento: e.target.value
      });        
    }  
    onChangePaisOrigen(e) {
      this.setState({
        pais_origen: e.target.value
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
            <h4>Producto modificado con exito !</h4>
            <button className="btn btn-success" onClick={this.newProducto}>
              Modificar producto
            </button>
          </div>
        ) : (
            <div className="form-cliente">

          <h1>Modificar producto</h1>     

          <div className="form-group">
              <label htmlFor="codigo">Código</label>
              <input
                type="text"
                className="form-control"
                id="codigo"
                required
                value={this.state.codigo}
                onChange={this.onChangeCodigo}
                name="codigo"
                placeholder="Código"
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
                placeholder="Nombre"
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
              <label htmlFor="registroInvima">Registro invima</label>
              <input
                type="text"
                className="form-control"
                id="registroInvima"
                required
                value={this.state.registro_invima}
                onChange={this.onChangeRegistroInvima}
                name="registroInvima"
                placeholder="Registro Invima"
              />
            </div>

            <div className="form-group">
              <label htmlFor="unidad_medida">Unidad de Medida</label>
              <input
                type="text"
                className="form-control"
                id="unidad_medida"
                required
                value={this.state.unidad_medida}
                onChange={this.onChangeUnidadMedida}
                name="unidad_medida"
                placeholder="Unidad de medida"
              />
            </div>

            <div className="form-group">
              <label htmlFor="peso">Peso</label>
              <input
                type="text"
                className="form-control"
                id="peso"
                required
                value={this.state.peso}
                onChange={this.onChangePeso}
                name="peso"
                placeholder="Peso"
              />
            </div>

            <div className="form-group">
              <label htmlFor="volumen">Volumen</label>
              <input
                type="text"
                className="form-control"
                id="volumen"
                required
                value={this.state.volumen}
                onChange={this.onChangeVolumen}
                name="volumen"
                placeholder="Volumen"
              />
            </div>

            <div className="form-group">
              <label htmlFor="costo">Costo</label>
              <input
                type="text"
                className="form-control"
                id="costo"
                required
                value={this.state.costo}
                onChange={this.onChangeCosto}
                name="costo"
                placeholder="Costo"
              />
            </div>
            <div className="form-group">
            <label htmlFor="proveedor">Proveedor</label>
          <select value={this.state.idproveedor} onChange={this.onChangeProveedor}  id="proveedor" name="proveedor"
               className="form-control"
          >
          <option value="">seleccione una opción</option>
            {this.state.proveedores.map((proveedor) => (
              <option value={proveedor.idprov} key={proveedor.idprov} >{proveedor.nombre}</option>
            ))}
              </select>
            </div>

            <div className="form-group">
            <label htmlFor="cliente">Cliente</label>
          <select value={this.state.idcliente}  onChange={this.onChangeCliente}  id="cliente" name="cliente"
               className="form-control"
          >
          <option value="">seleccione una opción</option>
            {this.state.clientes.map((cliente) => (
              <option value={cliente.id} key={cliente.id}>{cliente.nombre}</option>
            ))}
              </select>
            </div>
      
            <div className="form-group">
              <label htmlFor="precioVenta">Precio venta</label>
              <input
                type="text"
                className="form-control"
                id="precioVenta"
                required
                value={this.state.precio_venta}
                onChange={this.onChangeCosto}
                name="previoVenta"
                placeholder="Previo de Venta"
              />
            </div>
            <div className="form-group">
              <label htmlFor="stockmin">Stock Minimo</label>
              <input
                type="text"
                className="form-control"
                id="stockmin"
                required
                value={this.state.stockmin}
                onChange={this.onChangeStockmin}
                name="stockmin"
                placeholder="Stock minimo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="leadtime">Lead time (dias)</label>
              <input
                type="text"
                className="form-control"
                id="leadtime"
                required
                value={this.state.volumen}
                onChange={this.onChangeLeadtime}
                name="leadtime"
                placeholder="leadtime"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tipo_almacenamiento">Tipo de almacenamiento</label>
              <input
                type="text"
                className="form-control"
                id="tipo_almacenamiento"
                required
                value={this.state.tipo_almacenamiento}
                onChange={this.onChangeTipoAlmacenamiento}
                name="tipo_almacenamiento"
                placeholder="Tipo almacenamiento"
              />
            </div>
            <div className="form-group">
              <label htmlFor="pais_origen">Pais Origen</label>
              <input
                type="text"
                className="form-control"
                id="pais_origen"
                required
                value={this.state.pais_origen}
                onChange={this.onChangePaisOrigen}
                name="pais_origen"
                placeholder="Pais origen"
              />
            </div>
            <div className="form-group">
              <label htmlFor="observaciones">Observaciones</label>
              <input
                type="text"
                className="form-control"
                id="observaciones"
                required
                value={this.state.observaciones}
                onChange={this.onChangeObservaciones}
                name="observaciones"
                placeholder="Observaciones"
              />
            </div>
          

            <button onClick={this.saveProducto} className="btn btn-success">
              Guardar
            </button>
            </div>
            )}
            </div>
        </div>
   
      );
    }
  
    newProducto() {
        
        ProductoService.get(this.state.id)
        .then(response => {
            this.setState({
              codigo: response.data.codigo,  
              nombre: response.data.nombre,
            descripcion: response.data.descripcion,
            registro_invima: response.data.registro_invima,
            unidad_medida:response.data.unidad_medida,
            peso: response.data.peso,
            volumen: response.data.volumen,
            costo: response.data.costo,
            precio_venta:response.data.precio_venta,
            stockmin: response.data.stockmin,
            leadtime: response.data.leadtime,
            tipo_almacenamiento:response.data.tipo_almacenamiento,
            pais_origen: response.data.pais_origen,
            observaciones: response.data.observaciones,
            idcliente: response.data.id_cliente,
            idproveedor: response.data.id_proveedor_prod     ,
              published: false,
        
              submitted: false,
          });           
          
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      }

      saveProducto() {
          
        var data = {
            idprod: this.state.id,
            codigo: this.state.codigo,
            nombre: this.state.nombre,
            descripcion: this.state.descripcion,
            registro_invima: this.state.registro_invima,
            unidad_medida: this.state.unidad_medida,
            peso: this.state.peso,
            volumen: this.state.volumen,
            costo: this.state.costo,
            precio_venta:this.state.precio_venta,
            stockmin: this.state.stockmin,
            leadtime: this.state.leadtime,
            tipo_almacenamiento:this.state.tipo_almacenamiento,
            pais_origen: this.state.pais_origen,
            observaciones: this.state.observaciones,
            id_cliente: this.state.idcliente,
            id_proveedor_prod: this.state.idproveedor     
        };
    
        ProductoService.update(data)
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
  
  export default ProyectoLogisticaProductoEdit