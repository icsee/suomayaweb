import http from "./http-common";

class ProveedorService {
  getAll() {
    return http.get("/logistica/listarProveedores");
  }

  create(data) {
    return http.post("/logistica/proveedor", data);
  }
  
  update( data) {
    return http.put("/logistica/proveedor", data);
  }

  delete(id) {
    return http.delete("/logistica/proveedor"+id);
  }

}

export default new ProveedorService();