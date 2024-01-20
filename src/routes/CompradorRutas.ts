import { Router } from "express";
import compradorController from "../controller/Comprador/CompradorController";
import safety from "../middleware/Safety";

class CompradorRutas {
    public routeCompradorpi = Router();

    constructor() {
        this.routeCompradorpi = Router();
        this.configutation();

    }

    public configutation(): void {
        this.routeCompradorpi.get('/', compradorController.showComprador);
        this.routeCompradorpi.get('/:codComprador', compradorController.buscar);
        this.routeCompradorpi.post('/crearComprador', safety.verificarToken, compradorController.crear);
        this.routeCompradorpi.put('/editarComprador', safety.verificarToken, compradorController.actualizar);
        this.routeCompradorpi.delete('/:codComprador', safety.verificarToken, compradorController.borrar);

    }

}
const compradorRutas = new CompradorRutas();
export default compradorRutas.routeCompradorpi;