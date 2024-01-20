import jwt from "jsonwebtoken";
import { Response } from "express";

class UserAccess {

    public static async proccess(data: any, res: Response): Promise<any> {
        if (data != null) {
            console.log("data: ",data);
            const tokenBackend = jwt.sign({ codigo: data.idUser, correo: data.emailUser, role: data.idProfile }, 'abcdfghijklmnopqrstuvxyz1234567890', { expiresIn: '4h' })
            return res.status(200).json({ tokenBackend: tokenBackend });
        } else {
            return res.status(404).json({ error: 'Usuario Incorrecto' });
        }
    }
}
export default UserAccess;