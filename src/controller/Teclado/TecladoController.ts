import { Request, Response } from "express";
import TecladoDAOs from "../../dao/Teclado/TecladoDAOs";
import { SQL_TECLADO } from "../../repository/Teclado/teclado_querys_sql";

class TecladoController extends TecladoDAOs {
    public mostrar(req: Request, res: Response): void {
        TecladoController.obtenerTeclados(SQL_TECLADO.TODO, [], res);
    }
    public buscar(req: Request, res: Response): void {
        const codigo = req.params.codTeclado;
        const parametro = [codigo];
        TecladoController.buscarTecladoPorId(SQL_TECLADO.BUSCAR, parametro, res);
    }

    public crear(req: Request, res: Response): void {
        const dispositivoEntrada = req.body.dispositivoEntrada;
        const marca = req.body.marca;
        const parametro = [dispositivoEntrada, marca];
        TecladoController.crearTeclado(SQL_TECLADO.CREAR, parametro, res);
    }
    public actualizar(req: Request, res: Response): void {
        const codigo = req.body.id;
        const dispositivoEntrada = req.body.dispositivoEntrada;
        const marca = req.body.marca;
        const parametro = [codigo, dispositivoEntrada, marca];
        TecladoController.actualizarTeclado(SQL_TECLADO.ACTUALIZAR, parametro, res);
    }
    public borrar(req: Request, res: Response): void {
        const codigo = req.params.codTeclado;
        const parametro = [codigo];
        TecladoController.eliminarPorId(SQL_TECLADO.ASOCIADO,SQL_TECLADO.BORRAR, parametro, res);
    }
}

const tecladoController = new TecladoController;
export default tecladoController;