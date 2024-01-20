import { Request, Response } from "express";
import UserLogin from "../../dao/User/UserLogin";
import { SQL_USER_SEARCH_ONE } from "../../repository/User/user_search_one_sql";
import { md5 } from "js-md5";

class UserLoginController extends UserLogin {
    public findTheAccessUser(req: Request, res: Response): void {
        const emailUser = req.body.emailUser;
        const password = req.body.password;
        const passwordEncypted = md5(password);
        const parametros = [emailUser, passwordEncypted];
        UserLoginController.findIdUserAccess(SQL_USER_SEARCH_ONE.LOGIN, parametros, res);
    }

}
const userLoginController = new UserLoginController();
export default userLoginController;