import React from 'react'
import './styles.css'


import AlmacenService from "../../Services/almacen.service";


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


  
 function BasicTable(almancenes) {
  
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
            
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Descripción</TableCell>
            <TableCell align="right">Temperatura</TableCell>
            <TableCell align="right">Humedad</TableCell>
            <TableCell align="right">Capacidad</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {almancenes.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.tipo}</TableCell>
              <TableCell align="right">{row.descripcion}</TableCell>
              <TableCell align="right">{row.temperatura}</TableCell>
              <TableCell align="right">{row.humedad}</TableCell>
              <TableCell align="right">{row.capacidad}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          labelRowsPerPage="Filas por pagina:"
          count={almancenes.rows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </Paper>
  );
}


class ProyectoLogisticaAlmacenes extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      almancenes: [],
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
          <h1>Lista de almacenes</h1>
          
          <BasicTable rows={this.state.almancenes} />
      </div>
 
    );
  }

  retrieveAlmacenes() {
    
    AlmacenService.getAll()
      .then(response => {
        this.setState({almancenes:response.data});
      
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

export default ProyectoLogisticaAlmacenes