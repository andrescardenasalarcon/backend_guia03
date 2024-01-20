import { Router } from "express";
import userLoginController from "../controller/User/UserLoginController";
import userSignInController from "../controller/User/UserSignInController";

class UserAccessRoutes {
    public routesAccessApi: Router;
    constructor() {
        this.routesAccessApi = Router();
        this.configuration();
    }

    public configuration() {
        this.routesAccessApi.post("/login", userLoginController.findTheAccessUser);
        this.routesAccessApi.post("/signin", userSignInController.createUser);
    }
}
const userAccessRoutes = new UserAccessRoutes();
export default userAccessRoutes.routesAccessApi;