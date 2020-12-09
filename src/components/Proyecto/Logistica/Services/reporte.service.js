import http from "./http-common";

class ReporteService {
      getReporteInvCliente(id) {
        return http.get("logistica/consultarReporteInvCliente?id="+id);
      }
      getReporteInvProveedor(id) {
        return http.get("logistica/consultarReporteInvProveedor?idprov="+id);
      }
      getReporteInvProducto(id) {
        return http.get("logistica/consultarReporteInvProducto?codigo="+id);
      }
}

export default new ReporteService();