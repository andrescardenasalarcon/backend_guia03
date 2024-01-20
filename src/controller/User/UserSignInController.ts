import { Request, Response } from 'express';
import UserSignIn from "../../dao/User/UserSignIn";
import { SQL_USER_CREATE } from '../../repository/User/user_create_sql';
import { md5 } from 'js-md5';

class UserSignInController extends UserSignIn {
    public createUser(req: Request, res: Response): void {
        const fullName = req.body.fullName;
        const emailUser = req.body.emailUser;
        const stateUser = req.body.stateUser;
        const idProfile = req.body.idProfile;
        const passwordUser = req.body.password;
        const passwordEncypted = md5(passwordUser);
        const parametres = [fullName, emailUser, stateUser, idProfile, passwordEncypted];
        
        UserSignInController.createUser(SQL_USER_CREATE.CONFIRM, SQL_USER_CREATE.CREATE, parametres, res);
    }
}
const userSignInController = new UserSignInController();
export default userSignInController;