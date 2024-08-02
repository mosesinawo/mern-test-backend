import  { Router } from "express";
import taskRoutes from "./task/routes/task.routes";

const appRoute = Router();

appRoute.use('/api/tasks',taskRoutes);

export default appRoute;
