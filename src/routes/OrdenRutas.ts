import { Router } from "express";
import ordenController from "../controller/Orden/OrdenController";

class OrdenRutas{
    public routeOrdenApi = Router();

    constructor(){
        this.routeOrdenApi = Router();
        this.configuration();
    }

    public configuration():void{
        this.routeOrdenApi.get('/', ordenController.showOrdenes);
        this.routeOrdenApi.get('/:codOrden', ordenController.buscar);
        this.routeOrdenApi.post('/crearOrden', ordenController.crear);
        this.routeOrdenApi.put('/editarOrden', ordenController.actualizar);
        this.routeOrdenApi.delete('/:codOrden', ordenController.borrar);
    }
}
const ordenRutas = new OrdenRutas();
export default ordenRutas.routeOrdenApi;