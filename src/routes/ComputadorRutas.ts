import { Router } from "express";
import computadoraController from "../controller/Computadora/ComputadoraController";
import safety from "../middleware/Safety";

class ComputadorRutas {
    public routeComputadorApi = Router();

    constructor() {
        this.routeComputadorApi = Router();
        this.configutation();

    }

    public configutation(): void {
        this.routeComputadorApi.get('/', computadoraController.showComputadoras);
        this.routeComputadorApi.get('/:codComputadora', computadoraController.buscar);
        this.routeComputadorApi.post('/crearPc', safety.verificarToken, computadoraController.crear);
        this.routeComputadorApi.put('/editarPC', safety.verificarToken, computadoraController.actualizar);
        this.routeComputadorApi.delete('/:codComputadora', safety.verificarToken, computadoraController.borrar);

    }

}
const computadorRutas = new ComputadorRutas();
export default computadorRutas.routeComputadorApi;