import { Router } from "express"
import monitorController from "../controller/Monitor/MonitorController";
import safety from "../middleware/Safety";

class MonitorRutas {
    public routeMonitorApi = Router();

    constructor() {
        this.routeMonitorApi = Router();
        this.configuration();
    }

    public configuration(): void {
        this.routeMonitorApi.get('/', monitorController.showMonitores);
        this.routeMonitorApi.get('/:codMonitor', monitorController.buscar);
        this.routeMonitorApi.post('/crearMonitor', safety.verificarToken, monitorController.crear);
        this.routeMonitorApi.put('/editarMonitor', safety.verificarToken, monitorController.actualizar);
        this.routeMonitorApi.delete('/:codMonitor', safety.verificarToken, monitorController.borrar);
    }
}
const monitorRutas = new MonitorRutas();
export default monitorRutas.routeMonitorApi;