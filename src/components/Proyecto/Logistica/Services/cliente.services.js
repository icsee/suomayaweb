import http from "./http-common";

class ClienteService {
  getAll() {
    return http.get("/logistica/listarClientes");
  }

  get(id) {
    return http.get("/logistica/cliente?id="+id);
  }

  create(data) {
    return http.post("/logistica/cliente", data);
  }
  update( data) {
    return http.put("/logistica/cliente", data);
  }

  delete(id) {
    return http.delete("/logistica/cliente?id="+id);
  }
}

export default new ClienteService();