import { Router } from "express";
import tecladoController from "../controller/Teclado/TecladoController";
import safety from "../middleware/Safety";

class TecladoRutas {
    public rutasTecladoApi: Router;

    constructor() {
        this.rutasTecladoApi = Router();
        this.configurations();
    }

    public configurations() {
        this.rutasTecladoApi.get('/', tecladoController.mostrar);
        this.rutasTecladoApi.get('/:codTeclado', tecladoController.buscar);
        this.rutasTecladoApi.post('/crearTeclado', safety.verificarToken, tecladoController.crear);
        this.rutasTecladoApi.put('/editarTeclado', safety.verificarToken, tecladoController.actualizar);
        this.rutasTecladoApi.delete('/:codTeclado', safety.verificarToken, tecladoController.borrar);

    }
}
const tecladoRutas = new TecladoRutas();
export default tecladoRutas.rutasTecladoApi;