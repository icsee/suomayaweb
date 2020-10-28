import http from "./http-common";

class AlmacenService {
    getAll() {
        return http.get("/logistica/listarAlmacenes");
      }
    
      create(data) {
        return http.post("/logistica/almacen", data);
      }
      update( data) {
        return http.put("/logistica/almacen", data);
      }
    
      delete(id) {
        return http.delete("/logistica/almacen"+id);
      }
}

export default new AlmacenService();