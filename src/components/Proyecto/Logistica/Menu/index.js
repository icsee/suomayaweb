import React from 'react'
import './styles.css'
import Button from "../../../Button"
import { NavLink } from 'react-router-dom'
const MenuLogistica = () => {

  return (
    <div className="row">
      <nav><ul>
        <li><a href="#">
          <NavLink to='/proyecto/logistica'>
          <button  className='item'>     Logistica</button>    
         </NavLink>
        </a></li>

        <li><a href="#"> <button  className='item'>     Bases</button>  </a>
          <ul><li><a href="">
            <NavLink to='/logistica/clientes'>
            <button  className='item'>     Clientes</button>  
            </NavLink>
          </a></li>
            <li><a href="">
              <NavLink to='/logistica/cliente-crear'>
              <button  className='item'>      Nuevo Cliente</button>    
                </NavLink>
            </a></li>
            <li><a href="">
              <NavLink to='/logistica/proveedores'>
              <button  className='item'>    Proveedores</button>     
               </NavLink>

            </a></li>
            <li><a href="">
              <NavLink to='/logistica/proveedor-crear'>
              <button  className='item'>    Nuevo Proveedor</button>   
      </NavLink>
            </a></li>
            <li><a href="">
              <NavLink to='/logistica/almacenes'>
              <button  className='item'> Almacenes</button>    
      </NavLink>
            </a></li>
            <li><a href="">
              <NavLink to='/logistica/almacen-crear' className='item'>
              <button  className='item'> Nuevo Almacen</button>   
      </NavLink>
            </a></li>
            <li>
              <NavLink to='/logistica/productos' className='item'>
              <button  className='item'>Productos</button>   
      </NavLink>
            </li>
            <li>
              <NavLink to='/logistica/producto-crear' className='item'>
              <button  className='item'>Nuevo Producto</button>
      </NavLink>
          </li>
            

          </ul>
        </li>

        <li>
          <NavLink to='/logistica/reporte'> <button  className='item'>Reporte</button></NavLink>
        </li>
      </ul></nav>
      {/*<Button variant="small" route='proyecto/logistica'>
      Logistica
      </Button> 
       
      <Button variant="small" route='logistica/cliente-crear'>
      Nuevo Cliente
      </Button>  
      
      <Button variant="small" route='logistica/proveedores'>
      Proveedor
      </Button>  
      <Button variant="small" route='logistica/proveedor-crear'>
      Nuevo Proveedor
      </Button>  
      
      <Button variant="small" route='logistica/almacenes'>
      Almacenes
      </Button>  
      
      <Button variant="small" route='logistica/almacen-crear'>
      Nuevo Almacen
      </Button>  
      <Button variant="small" route='logistica/productos'>
      Productos
      </Button>  
      
      <Button variant="small" route='logistica/producto-crear'>
      Nuevo Producto
      </Button>  

      <Button variant="small" route='logistica/reporte'>
      Reportes
      </Button>  
  */}
    </div>
  )
}


export default MenuLogistica












