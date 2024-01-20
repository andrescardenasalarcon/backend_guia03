import { Response } from "express";
import pool from "../../configuration/connection/connectionBD";
import UserAccessAnswer from "../UserAccess/UserAccessAnswer";

class UserLogin {
    protected static async findIdUserAccess(sqlSearch: string, parameters: any, res: Response): Promise<any> {
        await pool.oneOrNone(sqlSearch, parameters)
            .then((result) => {
                return UserAccessAnswer.process(result, res);
            })
            .catch((error) => {
                console.log(error);
                return res.status(400).json({ error: 'Error busando el acceso' });
            })
    }


}
export default UserLogin;
