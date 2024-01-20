import { Response } from "express";
import pool from "../../configuration/connection/connectionBD";
import UserAccessAnswer from "../UserAccess/UserAccessAnswer";

class UserSignIn {



    public static async createUser(sqlConfirm: string, sqlCreate: string, parametres: any, res: Response): Promise<void> {
        await pool.task(async consult => {
            const dato = await consult.one(sqlConfirm, parametres);
            if (dato.amount == 0) {
                await consult.oneOrNone(sqlCreate, parametres)
                    .then((result) => {
                        return UserAccessAnswer.process(result, res);
                    })
                    .catch((error) => {
                        console.log(error);
                        return res.status(400).json({ error: 'Error busando el acceso' });
                    })
            } else {
                return { id_user: 0 };
            }
        })
            .catch((mierror) => {
                console.log(mierror);
                res.status(400).json({ error: 'Error en la query', mierror });

            });
    }

}

export default UserSignIn;



//     public static async createUser(sqlConfirm: string, sqlCreate: string, parametres: any, res: Response): Promise<void> {
//         await pool.task(async consult => {
//             const dato = await consult.one(sqlConfirm, parametres);
//             if (dato.amount == 0) {
//                 return await consult.one(sqlCreate, parametres);
//             } else {
//                 return { id_user: 0 };
//             }
//         })
//             .then((answer) => {
//                 if (answer.id_user != 0) {
//                     res.status(200).json({ answer: 'Usuario Creado', nuevoCodigo: answer.id_user });
//                 } else {
//                     console.log(answer);
//                     res.status(401).json({ error: 'Error creando el usuario' });

//                 }
//             })
//             .catch((mierror) => {
//                 console.log(mierror);
//                 res.status(400).json({ error: 'Error en la query', mierror });

//             });
//     }

// }