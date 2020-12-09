import React from 'react'
import './styles.css'


import ReporteService from "../Services/reporte.service";
import ClienteService from "../Services/cliente.services";
import ProveedorService from "../Services/proveedor.services";
import ProductoService from "../Services/producto.service";


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import MenuLogistica from '../Menu';
import { NavLink } from  'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import iconBusqueda from '../../../../assets/img/buscar.png';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



  
 function BasicTable(registros) {
  
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  
  return (
    <Paper>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="right">Cliente</TableCell>
            <TableCell align="right">Proveedor</TableCell>
            <TableCell align="right">Código</TableCell>
            <TableCell align="right">Descripción</TableCell>
            <TableCell align="right">Cantidad</TableCell>            
            <TableCell align="right">Ubicación</TableCell>
            <TableCell align="right">Temperatura</TableCell>
            <TableCell align="right">Humedad</TableCell>
            <TableCell align="right">Fecha Vencimiento</TableCell>
            <TableCell align="right">Fecha Registro</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {registros.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.cliente}</TableCell>
              <TableCell align="right">{row.proveedor}</TableCell>
              <TableCell align="right">{row.codigo}</TableCell>
              <TableCell align="right">{row.descripcion}</TableCell>
              <TableCell align="right">{row.cantidad}</TableCell>
              <TableCell align="right">{row.ubicacion}</TableCell>
              <TableCell align="right">{row.temperatura}</TableCell>
              <TableCell align="right">{row.humedad}</TableCell>
              <TableCell align="right">{row.fecha_vencimiento}</TableCell>
              <TableCell align="right">{row.fecha}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          labelRowsPerPage="Filas por pagina:"
          count={registros.rows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </Paper>
  );
}


const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 }];

class ProyectoLogisticaReporte extends React.Component {
  constructor(props) {
    super(props);
    
    this.onChangeFilter = this.onChangeFilter.bind(this); 
    this.retrieveData = this.retrieveData.bind(this);    
    this.retrieveClientes = this.retrieveClientes.bind(this);  
    this.onChangeValue = this.onChangeValue.bind(this);  
    this.retrieveProveedores = this.retrieveProveedores.bind(this); 
    this.retrieveProductos = this.retrieveProductos.bind(this); 
     
    
    this.state = {
      registros: [],
      width: 0, height: 0,
      filtro:"cliente",
      loading:false,
      data: [],
      id:0,
      value:''
     };
     this.retrieveClientes();
     this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
     
  }
  componentDidMount() {
    window.scrollTo(0,0)
  }

  onChangeFilter(e) {
    console.log('filtro ->'+ e.target.value)
    this.setState({
      filtro: e.target.value,
      loading:true,
      id:0,
      
    });     
    switch ( e.target.value)   {
        case 'cliente':
          this.retrieveClientes();
        break;
        case 'proveedor':
          this.retrieveProveedores();
          break;
          case 'producto':
            this.retrieveProductos();
          break;
          
        
    }
  }
  
  onChangeValue(e) {
    console.log(e);
    var id=0;
    switch ( this.state.filtro)   {
      case 'cliente':
        id=e.id;
      break;
      case 'proveedor':
        id=e.idprov;
        break;
        case 'producto':
          id=e.codigo;
        break;
    }

    if (this.state.id!= id){
      this.setState({
        id: id
      });  
    }
    
  }


  render() {
    return(
      <div className='info'>
        <MenuLogistica/>
          <h1>Reporte</h1>
         
          <div className='row'>
              <Autocomplete
                id="combo-box-demo"
                options={this.state.data}
                value={this.state.value}
                onChange={(event, newValue) => {
                  this.setState({
                    value: newValue
                  });  
                }}
                getOptionSelected={(option, value) => {if (option==value) this.onChangeValue(option)}}
                getOptionLabel={(option) => option.nombre}
                style={{ width: 400 }}
                loading={this.state.loading}
                renderInput={(params) => <TextField {...params} label="Buscar por" variant="outlined"  />}
        />
        <img src={iconBusqueda} alt='buscar' width="45px" height="45px" title="buscar" onClick={this.retrieveData} className="btnBuscar"/>
    </div>
    <div className="row">
     <input type="radio" className="form-control" id="cliente" name="drone" value="cliente"    onChange={this.onChangeFilter} />
  <label for="cliente" >Cliente</label>
  <input type="radio"  className="form-control" id="proveedor" name="drone" value="proveedor" onChange={this.onChangeFilter}/>
  <label for="proveedor">Proveedor</label>
  <input type="radio" id="producto" name="drone" value="producto"  className="form-control" onChange={this.onChangeFilter}/>
  <label for="producto">Producto</label>
  </div>

          <BasicTable rows={this.state.registros}  />
      </div>
 
    );
  }

    

  retrieveData() {
    
    switch ( this.state.filtro)   {
      case 'cliente':
        ReporteService.getReporteInvCliente(this.state.id)
        .then(response => {
          this.setState({registros:response.data});
        
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      break;
      case 'proveedor':
        ReporteService.getReporteInvProveedor(this.state.id)
        .then(response => {
          this.setState({registros:response.data});
        
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        break;
        case 'producto':
          ReporteService.getReporteInvProducto(this.state.id)
          .then(response => {
            this.setState({registros:response.data});
          
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
        break;
    }



  }

  retrieveClientes() {
    
    ClienteService.getAll()
      .then(response => {
        this.setState({data:response.data});      
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  
  retrieveProveedores() {
    
    ProveedorService.getAll()
      .then(response => {
        this.setState({data:response.data});      
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
    
  retrieveProductos() {
    
    ProductoService.getAll()
      .then(response => {
        this.setState({data:response.data});      
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  
  ProductoService

  
    
    

  
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

export default ProyectoLogisticaReporte
