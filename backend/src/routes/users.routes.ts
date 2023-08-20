import { Router } from "express";
import { SearchUserController } from "../modules/users/useCases/searchUser/SearchUserController";
import { NewUserController } from "../modules/users/useCases/newUser/newUser/newUserController";

const userRoutes = Router();
const searchUserController = new SearchUserController();
const newUserController = new NewUserController();

userRoutes.get("/api/users", searchUserController.search);
userRoutes.post("/api/users/create", newUserController.create);

export { userRoutes };
