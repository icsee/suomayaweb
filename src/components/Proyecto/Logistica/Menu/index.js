import React from 'react'
import './styles.css'
import  Button  from  "../../../Button"

const MenuLogistica = () => {

  return (
    <div className="row">
      <Button variant="small" route='proyecto/logistica'>
      Logistica
      </Button> 
      <Button variant="small" route='logistica/clientes'>
      Cliente
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
      </div>   
  )
}


export default MenuLogistica












