import React from 'react'
import './styles.css'


import ClinteService from "../../Services/cliente.services";


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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


  
 function BasicTable(clientes) {
  
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
            <TableCell>Nit</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Pais</TableCell>
            <TableCell align="right">Departamento</TableCell>
            <TableCell align="right">Ciudad</TableCell>
            <TableCell align="right">Dirección</TableCell>
            <TableCell align="right">Telefono</TableCell>
            <TableCell align="right">Contacto</TableCell>
            <TableCell align="right">Correo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientes.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id}>
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
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          labelRowsPerPage="Filas por pagina:"
          count={clientes.rows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </Paper>
  );
}


class ProyectoLogisticaClientes extends React.Component {
  constructor(props) {
    super(props);
    this.retrieveClientes = this.retrieveClientes.bind(this);
     this.deleteCliente = this.deleteCliente.bind(this);
     
    this.state = {
      clientes: [],
      width: 0, height: 0
     };
     this.retrieveClientes();
     this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
     
  }
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    return(
      <div className='info'>
        <MenuLogistica/>
          <h1>Lista de clientes</h1>
          
          <BasicTable rows={this.state.clientes} />
      </div>
 
    );
  }

  retrieveClientes() {
    
    ClinteService.getAll()
      .then(response => {
        this.setState({clientes:response.data});
      
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteCliente(id){
    ClinteService.delete(id)
    .then(response => {
      console.log(response.data);
      this.retrieveClientes();
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

export default ProyectoLogisticaClientes