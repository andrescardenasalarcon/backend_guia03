import { Response } from "express";
import pool from "../../configuration/connection/connectionBD";

class ComputadoraDAOs{
    public static async obtenerComputadora(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        pool.result(sqlConsulta, parametros)
            .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
            .catch((mierror) => {
                console.log('!Error¡', mierror);
                res.status(400).json({ respuesta: 'Algo salió mal en Computadora' });
            });
    }

    public static async buscarComputadoraPorId(sqlBuscar: string, parametros: any, res: Response): Promise<any> {
        await pool.one(sqlBuscar, parametros)
            .then((dato) => {
                console.log(dato);
                res.status(200).json(dato);
            })
            .catch((mierror) => {
                console.log(mierror);
                res.status(404).json({ msg: '!Error buscando el Computadora' });

            });
    }

    public static async crearComputadora(sqlCrear: string, parametros: any, res: Response): Promise<void> {
        await pool.task(async consulta => {
            return await consulta.one(sqlCrear, parametros);
        })
            .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({ respuesta: 'Computadora Creado!!!', nuevoCodigo: respuesta.id });
                
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({ respuesta: 'Error en las consultas', err })

            })
    }
    public static async actualizarComputadora(sqlActualizar: string, parametros: any, res: Response): Promise<void> {
        await pool.task(async consulta => {
            return await consulta.one(sqlActualizar, parametros);
        })
            .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({ respuesta: 'Computadora Actualizado!!!'});
                
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({ respuesta: 'Error en las consultas' })

            })
    }

    protected static async eliminarPorId(sqlBuscar: string, parametros: any, res: Response): Promise<any> {

        await pool.result(sqlBuscar, parametros)
            .then((dato) => {
                console.log(dato.rowCount);
                res.status(200).json({ respuesta: dato.rowCount});
            })
            .catch((mierror) => {
                console.log(mierror)
                return res.status(400).json({ msg: 'Error borrando el Computadora' });
            });
    }

}
export default ComputadoraDAOs;