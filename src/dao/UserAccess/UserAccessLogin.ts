import { Response } from "express";
import pool from "../../configuration/connection/connectionBD";
import UserAccessAnswer from "./UserAccessAnswer";

class UserAccessLogin {
    protected static async searchIdAccess(sqlSearch: string, parametros: any, res: Response): Promise<any> {

        await pool.oneOrNone(sqlSearch, parametros)
            .then((dato) => {
                return UserAccessAnswer.process(dato, res);
            })
            .catch((error) => {
                console.log(error);
                return res.status(400).json({ msg: 'Error buscando acceso' });

            });
    }
}
export default UserAccessLogin;