import { Router } from "express";
import ratonController from "../controller/Raton/RatonController";
import safety from "../middleware/Safety";


class RatonRutas {
    public rutasRatonApi: Router;

    constructor() {
        this.rutasRatonApi = Router();
        this.configurations();
    }

    public configurations() {
        this.rutasRatonApi.get('/', ratonController.mostrar);
        this.rutasRatonApi.get('/:codRaton', ratonController.buscar);
        this.rutasRatonApi.post('/crearRaton', safety.verificarToken, ratonController.crear);
        this.rutasRatonApi.put('/editarRaton', safety.verificarToken, ratonController.actualizar);
        this.rutasRatonApi.delete('/:codRaton', safety.verificarToken, ratonController.borrar);

    }
}
const ratonRutas = new RatonRutas();
export default ratonRutas.rutasRatonApi;