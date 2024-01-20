import { Request, Response } from "express";
import OrdenDAOs from "../../dao/Orden/OrdenDAOs";
import { SQL_ORDEN } from "../../repository/Orden/orden_querys_sql";


class OrdenController extends OrdenDAOs{

    public showOrdenes(req: Request, res: Response):void{
        OrdenController.obtenerOrden(SQL_ORDEN.TODO, [], res);
    }
    public buscar(req: Request, res: Response): void {
        const codigo = req.params.codOrden;
        const parametro = [codigo];
        OrdenController.buscarOrdenPorId(SQL_ORDEN.BUSCAR, parametro, res);
    }
    
    public crear(req: Request, res: Response): void {
        
        const cantidad = req.body.cantidad;
        const computadoras = req.body.computadoras.idComputadora;
        const comprador = req.body.comprador.idComprador;
        const parametro = [cantidad, computadoras, comprador];
        console.log(parametro);
        
        OrdenController.crearOrden(SQL_ORDEN.CREAR, parametro, res);
    }

    public actualizar(req: Request, res: Response): void {
        const codigo = req.body.idOrden;
        const cantidad = req.body.cantidad;
        const computadoras = req.body.computadoras.idComputadora;
        const comprador = req.body.comprador.idComprador;
        const parametro = [codigo, cantidad, computadoras, comprador];
        
        OrdenController.actualizarOrden(SQL_ORDEN.ACTUALIZAR, parametro, res);
    }

    public borrar(req: Request, res: Response): void {
        const codigo = req.params.codOrden;
        const parametro = [codigo];
        OrdenController.buscarOrdenPorId(SQL_ORDEN.BUSCAR, parametro, res);
    }
}
const ordenController = new OrdenController();
export default ordenController;
