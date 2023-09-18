import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Home from './components/Home'
import Semilleros from './components/Semilleros'
import Revista from './components/Revista'
import Proyectos from './components/Proyectos'
import ProyectoLogistica from './components/Proyecto/Logistica'
import ProyectoLogisticaClientes from './components/Proyecto/Logistica/Clientes/List'
import ProyectoLogisticaClientesAdd from './components/Proyecto/Logistica/Clientes/Add'
import ProyectoLogisticaClientesEdit from './components/Proyecto/Logistica/Clientes/Edit'

import ProyectoLogisticaProveedores from './components/Proyecto/Logistica/Proveedor/List'
import ProyectoLogisticaProveedorAdd from './components/Proyecto/Logistica/Proveedor/Add'
import ProyectoLogisticaProveedorEdit from './components/Proyecto/Logistica/Proveedor/Edit'

import ProyectoLogisticaAlmacenes from './components/Proyecto/Logistica/Almacen/List'
import ProyectoLogisticaAlmacenAdd from './components/Proyecto/Logistica/Almacen/Add'
import ProyectoLogisticaAlmacenEdit from './components/Proyecto/Logistica/Almacen/Edit'
import Proyectoraconocimientofacial from './components/Proyecto/reconocimientofacial'
import ProyectoLogisticaProductos from './components/Proyecto/Logistica/Producto/List'
import ProyectoLogisticaProductoAdd from './components/Proyecto/Logistica/Producto/Add'
import ProyectoLogisticaProductoEdit from './components/Proyecto/Logistica/Producto/Edit'
import Proyectochatoffline from './components/Proyecto/chatoffline'
import Proyectorecoleccionllantas from './components/Proyecto/recoleccionllantas'
import ProyectoInventarios from './components/Proyecto/Inventarios'
import ProyectoInteroperabilidad from './components/Proyecto/Interoperabilidad'
import Proyectoiotcognitivo from './components/Proyecto/iotcognitivo'
import ProyectoPaneles from './components/Proyecto/Paneles'
import Seminario from './components/Seminario'
import Simposio from './components/Simposio'
import TopSection from './components/TopSection'
import Footer from './components/Footer'
import Semillero from './components/Semillero'
import Fotofilm from './components/Fotofilm'
import Concurso from './components/Concurso'

import './App.css'
import ProyectoLogisticaReporte from './components/Proyecto/Logistica/Reporte'
import Desinfeccion from './components/Proyecto/desinfeccion';

const semilleros = ['innovatics', 'siclog', 'neurocomarketing', 'siam', 'aleph', 'industriascreativas']

class App extends Component {
  render() {
    return (
      <Router>
          <div className="app">
            <div className="content">
              <Route render={ (props) => {
                return (
                  <TopSection location={props.location.pathname} />
                )
              }} />
              <Route render={({ location }) =>
                <TransitionGroup exit={false}>
                  <CSSTransition key={location.pathname.split('/')[1]} timeout={250} classNames="fade">
                  <Switch location={location}>
                    <Route exact path="/" render={() => <Home  />} />
                    <Route path="/semilleros" render={() => <Semilleros  />} />
                    <Route path="/revista" render={() => <Revista />}/>
                    <Route path="/proyectos" render={() => <Proyectos />}/>
                    <Route path="/proyecto/logistica" render={() => <ProyectoLogistica />}/>
                    <Route path="/proyecto/desinfeccion" render={() => <Desinfeccion />}/>
                    <Route path="/logistica/clientes" render={() => <ProyectoLogisticaClientes />}/>
                    <Route path="/logistica/cliente-crear" render={() => <ProyectoLogisticaClientesAdd />}/>
                    <Route path="/logistica/cliente-editar/:id" component={ProyectoLogisticaClientesEdit }/>
                    <Route path="/logistica/proveedores" render={() => <ProyectoLogisticaProveedores />}/>
                    <Route path="/logistica/proveedor-crear" render={() => <ProyectoLogisticaProveedorAdd />}/>
                    <Route path="/logistica/proveedor-editar/:id" component={ProyectoLogisticaProveedorEdit }/>
                    <Route path="/logistica/almacenes" render={() => <ProyectoLogisticaAlmacenes />}/>
                    <Route path="/logistica/almacen-crear" render={() => <ProyectoLogisticaAlmacenAdd />}/>
                    <Route path="/logistica/almacen-editar/:id" component={ProyectoLogisticaAlmacenEdit }/>
                    <Route path="/logistica/productos" render={() => <ProyectoLogisticaProductos />}/>
                    <Route path="/logistica/producto-crear" render={() => <ProyectoLogisticaProductoAdd />}/>
                    <Route path="/logistica/producto-editar/:id" component={ProyectoLogisticaProductoEdit }/>
                    <Route path="/logistica/reporte" render={() => <ProyectoLogisticaReporte />}/>
                    <Route path="/proyecto/inventarios" render={() => <ProyectoInventarios />}/>                    
                    <Route path="/proyecto/interoperabilidad" render={() => <ProyectoInteroperabilidad />}/>
                    <Route path="/proyecto/chatoffline" render={() => <Proyectochatoffline />}/>
                    <Route path="/proyecto/recoleccionllantas" render={() => <  Proyectorecoleccionllantas />}/>
                    <Route path="/proyecto/iotcognitivo" render={() => <  Proyectoiotcognitivo />}/>
                    <Route path="/proyecto/reconocimientofacial" render={() => <  Proyectoraconocimientofacial />}/>
                    
                    <Route path="/proyecto/paneles" render={() => <ProyectoPaneles />}/>
                    <Route path="/seminario" render={() => <Seminario />}/>
                    <Route path="/congreso" render={() => <Simposio />}/>
                    <Route path="/fotofilm" render={() => <Fotofilm />}/>
                    <Route path="/cortometraje" render={() => <Concurso category="cortometraje" />}/>
                    <Route path="/fotografia" render={() => <Concurso category="fotografia" />}/>
                    {semilleros.map((item) => (
                      <Route key={item} path={`/${item}`} render={() => <Semillero variant={item} />}/>
                    ))}
                    <Route render={() => <h1>Page not found</h1>} />
                  </Switch>
                  </CSSTransition>
                </TransitionGroup>
              }/>
            </div>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
