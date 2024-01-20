import { Request, Response } from "express";
import MonitorDAOs from "../../dao/Monitor/MonitorDAOs";
import { SQL_MONITOR } from "../../repository/Monitor/monitor_list_sql";

class MonitorController extends MonitorDAOs {
    public showMonitores(req: Request, res: Response): void {
        MonitorController.obtenerMonitor(SQL_MONITOR.ALL, [], res);
    }
    public buscar(req: Request, res: Response): void {
        const codigo = req.params.codMonitor;
        const parametro = [codigo];
        MonitorController.buscarMonitorPorId(SQL_MONITOR.BUSCAR, parametro, res);
    }

    public crear(req: Request, res: Response): void {
        const marca = req.body.marca;
        const tamanno = req.body.tamanno;
        const fotoPublicaMonitor = req.body.fotoPublicaMonitor;
        const base64Monitor = req.body.base64Monitor;
        const parametro = [marca, tamanno, fotoPublicaMonitor, base64Monitor];
        MonitorController.crearMonitor(SQL_MONITOR.CREAR, parametro, res);
    }
    public actualizar(req: Request, res: Response): void {
        const codigo = req.body.idMonitor;
        const marca = req.body.marca;
        const tamanno = req.body.tamanno;
        const fotoPublicaMonitor = req.body.fotoPublicaMonitor;
        const base64Monitor = req.body.base64Monitor;
        const parametro = [codigo, marca, tamanno, fotoPublicaMonitor, base64Monitor];
        MonitorController.actualizarMonitor(SQL_MONITOR.ACTUALIZAR, parametro, res);
    }
    public borrar(req: Request, res: Response): void {
        const codigo = req.params.codMonitor;
        const parametro = [codigo];
        MonitorController.eliminarPorId(SQL_MONITOR.ASOCIADO, SQL_MONITOR.BORRAR, parametro, res);
    }
}
const monitorController = new MonitorController;
export default monitorController;