import { Request, Response } from "express";
import RatonDAOs from "../../dao/Raton/RatonDAOs";
import { SQL_RATON } from "../../repository/Raton/raton_sql";


class RatonController extends RatonDAOs {
    public mostrar(req: Request, res: Response): void {
        RatonController.obtenerRatones(SQL_RATON.TODO, [], res);
    }
    public buscar(req: Request, res: Response): void {
        const codigo = req.params.codRaton;
        const parametro = [codigo];
        RatonController.buscarRatonPorId(SQL_RATON.BUSCAR, parametro, res);
    }

    public crear(req: Request, res: Response): void {
        const dispositivoEntrada = req.body.dispositivoEntrada;
        const marca = req.body.marca;
        const parametro = [dispositivoEntrada, marca];
        RatonController.crearRaton(SQL_RATON.CREAR, parametro, res);
    }
    public actualizar(req: Request, res: Response): void {
        const codigo = req.body.id;
        const dispositivoEntrada = req.body.dispositivoEntrada;
        const marca = req.body.marca;
        const parametro = [codigo, dispositivoEntrada, marca];
        RatonController.actualizarRaton(SQL_RATON.ACTUALIZAR, parametro, res);
    }
    public borrar(req: Request, res: Response): void {
        const codigo = req.params.codRaton;
        const parametro = [codigo];
        RatonController.eliminarPorId(SQL_RATON.ASOCIADO,SQL_RATON.BORRAR, parametro, res);
    }
}

const ratonController = new RatonController;
export default ratonController;