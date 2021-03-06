import React from 'react'
import './styles.css'


import ProveedorService from "../../Services/proveedor.services";
import MenuLogistica from "../../Menu";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import { NavLink } from  'react-router-dom'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


  
 function BasicTable(proveedores) {
  
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
  proveedores.delete(id);
 }
 
  return (
    <Paper>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nit</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Pais</TableCell>
            <TableCell align="right">Departamento</TableCell>
            <TableCell align="right">Ciudad</TableCell>
            <TableCell align="right">Dirección</TableCell>
            <TableCell align="right">Telefono</TableCell>
            <TableCell align="right">Contacto</TableCell>
            <TableCell align="right">Correo</TableCell>
            <TableCell align="right">Observaciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {proveedores.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.idprov}>
              <TableCell component="th" scope="row">
                {row.nit}
              </TableCell>
              <TableCell align="right">{row.nombre}</TableCell>
              <TableCell align="right">{row.pais}</TableCell>
              <TableCell align="right">{row.departamento}</TableCell>
              <TableCell align="right">{row.ciudad}</TableCell>
              <TableCell align="right">{row.direccion}</TableCell>
              <TableCell align="right">{row.telefono}</TableCell>
              <TableCell align="right">{row.contacto}</TableCell>
              <TableCell align="right">{row.correo}</TableCell>
              <TableCell align="right">{row.observaciones}</TableCell>
              <TableCell align="right">

              <TableCell align="right">
                <NavLink to={`proveedor-editar/${row.idprov}`}>
                  <input type='button' value='Modificar'  className="btn btn-secondary"/>                  
                </NavLink> 
              </TableCell>
              </TableCell>
              <TableCell align="right"><input type='button' value='Eliminar' onClick={()=>eliminar(row.idprov)} className="btn btn-danger"/> </TableCell>


             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          labelRowsPerPage="Filas por pagina:"
          count={proveedores.rows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </Paper>
  );
}


class ProyectoLogisticaProveedores extends React.Component {
  constructor(props) {
    super(props);
    this.deleteProveedor = this.deleteProveedor.bind(this);
    this.retrieveProveedores = this.retrieveProveedores.bind(this);
    
    this.state = {
      proveedores: [],
      width: 0, height: 0
     };
     this.retrieveProveedores();
     this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
     
     
     
  }
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    return(
      <div className='info'>
        <MenuLogistica/>
          <h1>Lista de proveedores</h1>
          
          <BasicTable rows={this.state.proveedores} delete={this.deleteProveedor} />
      </div>
 
    );
  }

  
  deleteProveedor(id){
    
    ProveedorService.delete(id)
    .then(response => {
      console.log(response.data);
      this.retrieveProveedores();
    })
    .catch(e => {
      console.log(e);
    });

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

export default ProyectoLogisticaProveedores