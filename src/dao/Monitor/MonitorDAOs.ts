import { Response } from 'express';
import pool from '../../configuration/connection/connectionBD';
class MonitorDAOs {
    public static async obtenerMonitor(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        pool.result(sqlConsulta, parametros)
            .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
            .catch((mierror) => {
                console.log('!Error¡', mierror);
                res.status(400).json({ respuesta: 'Algo salió mal en Monitor' });
            });
    }

    public static async buscarMonitorPorId(sqlBuscar: string, parametros: any, res: Response): Promise<any> {
        await pool.one(sqlBuscar, parametros)
            .then((dato) => {
                console.log(dato);
                res.status(200).json(dato );
            })
            .catch((mierror) => {
                console.log(mierror);
                res.status(404).json({ msg: '!Error buscando el Monitor' });

            });
    }

    public static async crearMonitor(sqlCrear: string, parametros: any, res: Response): Promise<void> {
        await pool.task(async consulta => {
            return await consulta.one(sqlCrear, parametros);
        })
            .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({ respuesta: 'Monitor Creado!!!', nuevoCodigo: respuesta.id_monitor });
                
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({ respuesta: 'Error en las consultas', err })

            })
    }
    public static async actualizarMonitor(sqlActualizar: string, parametros: any, res: Response): Promise<void> {
        await pool.task(async consulta => {
            return await consulta.one(sqlActualizar, parametros);
        })
            .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({ respuesta: 'Monitor Actualizado!!!'});
                
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({ respuesta: 'Error en las consultas' })

            })
    }

    protected static async eliminarPorId(sqlConfirm: string, sqlBuscar: string, parametros: any, res: Response): Promise<any> {
        await pool
            .task(async consult => {
                // Verificar el número de Monitores vinculados
                const numeroVinculaciones = await consult.one(sqlConfirm, parametros);
                
                if (numeroVinculaciones.count  === '0') {
                    // No hay Monitores vinculados, proceder con la eliminación
                    const resultadoEliminar = await consult.result(sqlBuscar, parametros);
                    return { success: true, rowCount: resultadoEliminar.rowCount };
                } else {
                    // Hay Monitores vinculados, no se puede eliminar
                    return { success: false, msg: 'No se puede eliminar el Monitor porque está vinculado a una o más Computadoras' };
                }
            })
            .then((answer) => {
                // Aca va si todo está bien
                if (answer.success) {
                    res.status(200).json({ success: true, msg: 'Monitor eliminado', rowCount: answer.rowCount });
                } else {
                    // Aquí puedes personalizar el mensaje o realizar acciones adicionales si hay vinculaciones
                    // console.log('Monitor está vinculado a una o más Computadoras. No se elimina.');
    
                    res.status(400).json({ success: false, msg: answer.msg });
                }
            })
            .catch((miError) => {
                console.log('Error, consult no se realizó con éxito', miError);
                res.status(400).json({ success: false, msg: 'Error en la consulta' });
            });
    }
}
export default MonitorDAOs;