import React from 'react'
import './styles.css'


import ProductoService from "../../Services/producto.service";


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import MenuLogistica from '../../Menu';
import { NavLink } from  'react-router-dom'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


  
 function BasicTable(productos) {
  
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

  const eliminar =(id)=>{   
    productos.delete(id);
  }
  return (
    <Paper>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Descripción</TableCell>
            <TableCell align="right">Registro invima</TableCell>
            <TableCell align="right">Unidad de medida</TableCell>
            <TableCell align="right">Peso</TableCell>
            <TableCell align="right">Volumen</TableCell>
            <TableCell align="right">Costo</TableCell>
            <TableCell align="right">Precio venta</TableCell>            
            <TableCell align="right">Stock min</TableCell>
            <TableCell align="right">Lead time</TableCell>
            <TableCell align="right">Tipo almacenamiento</TableCell>
            <TableCell align="right">Pais origen</TableCell>            
            <TableCell align="right">Observaciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productos.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.idprod}>
              <TableCell align="right">{row.nombre}</TableCell>
              <TableCell align="right">{row.descripcion}</TableCell>
              <TableCell align="right">{row.registro_invima}</TableCell>
              <TableCell align="right">{row.unidad_medida}</TableCell>
              <TableCell align="right">{row.peso}</TableCell>
              <TableCell align="right">{row.volumen}</TableCell>              
              <TableCell align="right">{row.costo}</TableCell>
              <TableCell align="right">{row.precio_venta}</TableCell>
              <TableCell align="right">{row.stockmin}</TableCell>
              <TableCell align="right">{row.leadtime}</TableCell>
              <TableCell align="right">{row.tipo_almacenamiento}</TableCell>
              <TableCell align="right">{row.pais_origen}</TableCell>
              <TableCell align="right">{row.observaciones}</TableCell>
              <TableCell align="right">
                <NavLink to={`producto-editar/${row.idprod}`}>
                  <input type='button' value='Modificar'  className="btn btn-secondary"/>                  
                </NavLink> 
              </TableCell>
              <TableCell align="right"><input type='button' value='Eliminar' onClick={()=>eliminar(row.idprod)} className="btn btn-danger"/> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          labelRowsPerPage="Filas por pagina:"
          count={productos.rows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </Paper>
  );
}


class ProyectoLogisticaProductos extends React.Component {
  constructor(props) {
    super(props);
    
    this.deleteAlmacen = this.deleteAlmacen.bind(this);
    this.retrieveAlmacenes = this.retrieveAlmacenes.bind(this);    
    this.state = {
      productos: [],
      width: 0, height: 0
     };
     this.retrieveAlmacenes();
     this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
     
  }
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    return(
      <div className='info'>
        <MenuLogistica/>
          <h1>Lista de productos</h1>
          
          <BasicTable rows={this.state.productos} delete={this.deleteAlmacen} />
      </div>
 
    );
  }

    
  deleteAlmacen(id){
    
    ProductoService.delete(id)
    .then(response => {
      console.log(response.data);
      this.retrieveAlmacenes();
    })
    .catch(e => {
      console.log(e);
    });

  }

  retrieveAlmacenes() {
    
    ProductoService.getAll()
      .then(response => {
        this.setState({productos:response.data});
      
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

export default ProyectoLogisticaProductos