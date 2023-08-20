import { Router } from "express";
import { fileRoutes } from "./file.routes";
import { userRoutes } from "./users.routes";

const routes = Router();

routes.use("/", fileRoutes);
routes.use("/", userRoutes);

export { routes };
