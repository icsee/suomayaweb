import React from 'react'
import './styles.css'
import Button from "../../../Button"
import { NavLink } from 'react-router-dom'
const MenuLogistica = () => {

  return (
    <div className="row">
      <nav><ul>
        <li><a href="https://siclog.suomaya.co/">
         
          <Button link="https://siclog.suomaya.co/">
                  Aplicación
              </Button>
        
      
        </a></li>

      

     
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












