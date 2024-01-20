import { Request, Response } from "express";
import ComputadoraDAOs from "../../dao/Computadora/ComputadoraDAOs";
import { SQL_COMPUTADORA } from "../../repository/Computadora/computadora_querys_sql";

class ComputadoraController extends ComputadoraDAOs {

    public showComputadoras(req: Request, res: Response): void {
        ComputadoraController.obtenerComputadora(SQL_COMPUTADORA.TODO, [], res);
    }
    public buscar(req: Request, res: Response): void {
        const codigo = req.params.codComputadora;
        const parametro = [codigo];
        ComputadoraController.buscarComputadoraPorId(SQL_COMPUTADORA.BUSCAR, parametro, res);
    }
    
    public crear(req: Request, res: Response): void {
        const nombre = req.body.nombre;
        const monitor = req.body.monitor.idMonitor;
        const teclado = req.body.teclado.id;
        const raton = req.body.raton.id;
        const publicoFotoComputadora = req.body.publicoFotoComputadora;
        const base64Computadora = req.body.base64Computadora;
        const precio = req.body.precio;
        const parametro = [nombre, monitor, teclado, raton, publicoFotoComputadora, base64Computadora, precio];
        ComputadoraController.crearComputadora(SQL_COMPUTADORA.CREAR, parametro, res);
    }

    public actualizar(req: Request, res: Response): void {
        const codigo = req.body.idComputadora;
        const nombre = req.body.nombre;
        const monitor = req.body.monitor.idMonitor;
        const teclado = req.body.teclado.id;
        const raton = req.body.raton.id;
        const publicoFotoComputadora = req.body.publicoFotoComputadora;
        const base64Computadora = req.body.base64Computadora;
        const precio = req.body.precio;
        const parametro = [codigo, nombre, monitor, teclado, raton, publicoFotoComputadora, base64Computadora, precio];
        ComputadoraController.actualizarComputadora(SQL_COMPUTADORA.ACTUALIZAR, parametro, res);
    }

    public borrar(req: Request, res: Response): void {
        const codigo = req.params.codComputadora;
        const parametro = [codigo];
        ComputadoraController.eliminarPorId(SQL_COMPUTADORA.BORRAR, parametro, res);
    }
}
const computadoraController = new ComputadoraController();
export default computadoraController;
