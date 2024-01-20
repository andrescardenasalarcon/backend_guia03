import jwt from 'jsonwebtoken';
import { Response } from 'express';
class UserAccessAnswer {
    public static async process(register: any, res: Response): Promise<any> {

        if (register != null) {
            console.log("register: ",register);
            //Creamos el token
            const user = register.fullName;
            const role = register.idProfile;
            const tokFull = { codigo: register.idUser, correo: register.emailUser, role: register.idProfile }
            const tokenBackend = jwt.sign({ codigo: register.idUser, correo: register.emailUser, role: register.idProfile }, 'abcdfghijklmnopqrstuvxyz1234567890', { expiresIn: '4h' })
            return res.status(200).json({ tokenBackend: tokenBackend, tokenName: user, tokenRole: role, tokenFull: tokFull })
        } else {
            return res.status(401).json({ miError: 'Usuario incorrecto' });
        }
    }

}
export default UserAccessAnswer;