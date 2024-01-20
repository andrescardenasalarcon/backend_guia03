import { Request, Response } from "express";
import CompradorDAOs from "../../dao/Comprador/CompradorDAOs";
import { SQL_COMPRADOR } from "../../repository/Comprador/comprador_querys_sql";

class CompradorController extends CompradorDAOs {

    public showComprador(req: Request, res: Response): void {
        CompradorController.obtenerComprador(SQL_COMPRADOR.TODO, [], res);
    }
    public buscar(req: Request, res: Response): void {
        const codigo = req.params.codComprador;
        const parametro = [codigo];
        CompradorController.buscarCompradorPorId(SQL_COMPRADOR.BUSCAR, parametro, res);
    }
    
    public crear(req: Request, res: Response): void {
        const primerNombre = req.body.primerNombre;
        const segundoNombre = req.body.segundoNombre;
        const primerApellido = req.body.primerApellido;
        const segundoApellido = req.body.segundoApellido;
        const documento = req.body.documento;
        const nombreFoto = req.body.nombreFoto;
        const base64Comprador = req.body.base64Comprador;
        const parametro = [primerNombre, segundoNombre, primerApellido, segundoApellido, documento, nombreFoto, base64Comprador];
        CompradorController.crearComprador(SQL_COMPRADOR.CREAR, parametro, res);
    }

    public actualizar(req: Request, res: Response): void {
        const codigo = req.body.idComprador;
        const primerNombre = req.body.primerNombre;
        const segundoNombre = req.body.segundoNombre;
        const primerApellido = req.body.primerApellido;
        const segundoApellido = req.body.segundoApellido;
        const documento = req.body.documento
        const nombreFoto = req.body.nombreFoto
        const base64Comprador = req.body.base64Comprador
        const parametro = [codigo, primerNombre, segundoNombre, primerApellido, segundoApellido, documento, nombreFoto, base64Comprador];
        CompradorController.actualizarComprador(SQL_COMPRADOR.ACTUALIZAR, parametro, res);
    }

    public borrar(req: Request, res: Response): void {
        const codigo = req.params.codComprador;
        const parametro = [codigo];
        CompradorController.eliminarPorId(SQL_COMPRADOR.BORRAR, parametro, res);
    }
}

const compradorController = new CompradorController();
export default compradorController;