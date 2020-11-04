import http from "./http-common";

class ProductoService {
    getAll() {
        return http.get("/logistica/listarProducto");
      }

      get(id) {
        return http.get("/logistica/producto?id="+id);
      }

      
      create(data) {
        return http.post("/logistica/producto", data);
      }
      update( data) {
        return http.put("/logistica/producto", data);
      }
    
      delete(id) {
        return http.delete("/logistica/producto?id="+id);
      }
}

export default new ProductoService();