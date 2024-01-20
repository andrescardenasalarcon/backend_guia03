import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

class Safety {

    public verificarToken(req: Request, res: Response, next: NextFunction): void {
        console.log(req.headers.authorization);
        if (!req.headers.authorization) {
            res.status(401).json({
                respuesta: "Peticion negada por el sistema",
            });
        } else {
            try {
                const tokenBackend = req.headers.authorization?.split(" ")[1] as string;
                const datos = jwt.verify(tokenBackend, 'abcdfghijklmnopqrstuvxyz1234567890');
                //req.body.datosUsuario = datos;
                next();
            } catch (error) {
                res.status(401).json({ respuesta: "Intento de fraude" });
            }
        }

    }
}
const safety = new Safety();
export default safety;